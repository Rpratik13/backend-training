import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import config from "../config";
import UserModel from "../model/user";
import { ISignUp } from "../interface/auth";
import { ACCESS_TOKEN_EXPIRY, REFRESH_TOKEN_EXPIRY } from "../constant/jwt";
import UnauthenticatedError from "../error/unauthenticatedError";
import BadRequestError from "../error/badRequestError";

const SALT_ROUNDS = 10;

export const signup = async (body: ISignUp) => {
  const userEmailExists = await UserModel.getByEmail(body.email);

  if (userEmailExists) {
    throw new BadRequestError(`User with email: ${body.email} already exists`);
  }

  const hashedPassword = await bcrypt.hash(body.password, SALT_ROUNDS);

  await UserModel.create({
    ...body,
    password: hashedPassword,
  });

  return {
    message: "User signed up successfully",
  };
};

export const login = async (body: ISignUp) => {
  const user = await UserModel.getByEmail(body.email);

  if (!user) {
    throw new BadRequestError("Invalid Email or Password");
  }

  const passwordMatch = await bcrypt.compare(body.password, user.password);

  if (!passwordMatch) {
    throw new BadRequestError("Invalid Email or Password");
  }

  const accessToken = jwt.sign(user, config.jwt.accessTokenSecret!, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });

  const refreshToken = jwt.sign(user, config.jwt.refreshTokenSecret!, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  });

  return {
    accessToken,
    refreshToken,
  };
};
