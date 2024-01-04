import sinon from "sinon";
import expect from "expect";
import bcrypt from "bcrypt";

import UserModel from "../../model/user";
import { signup } from "../../service/auth";
import UnauthenticatedError from "../../error/unauthenticatedError";

describe("Auth Service Test Suite", () => {
  describe("signup", () => {
    let userModelGetByEmailStub: sinon.SinonStub;
    let bcryptHashStub: sinon.SinonStub;
    let userModelCreateStub: sinon.SinonStub;

    let signupData = {
      fullname: "test",
      email: "test@test.com",
      password: "password",
    };

    beforeEach(() => {
      userModelGetByEmailStub = sinon.stub(UserModel, "getByEmail");

      bcryptHashStub = sinon.stub(bcrypt, "hash");

      userModelCreateStub = sinon.stub(UserModel, "create");
    });

    afterEach(() => {
      userModelGetByEmailStub.restore();
      bcryptHashStub.restore();
      userModelCreateStub.restore();
    });

    it("Should throw error when email is already registered", async () => {
      userModelGetByEmailStub.resolves(true);

      await expect(signup(signupData)).rejects.toThrow(
        new UnauthenticatedError(
          "User with email: test@test.com already exists"
        )
      );
    });

    it("Should create user when email is not registered", async () => {
      userModelGetByEmailStub.resolves(false);

      const hashedPassword = "test-hash-password";
      bcryptHashStub.resolves(hashedPassword);

      const response = await signup(signupData);

      expect(userModelGetByEmailStub.callCount).toBe(1);
      expect(userModelGetByEmailStub.getCall(0).args).toStrictEqual([
        signupData.email,
      ]);

      expect(bcryptHashStub.callCount).toBe(1);
      expect(bcryptHashStub.getCall(0).args).toStrictEqual([
        signupData.password,
        10,
      ]);

      expect(userModelCreateStub.callCount).toBe(1);
      expect(userModelCreateStub.getCall(0).args).toStrictEqual([
        { ...signupData, password: hashedPassword },
      ]);

      expect(response).toStrictEqual({
        message: "User signed up successfully",
      });
    });
  });
});
