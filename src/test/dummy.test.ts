import expect from "expect";
import { add } from "../../dummy";

describe("Dummy test suite", () => {
  describe("sum", () => {
    it("Should return sum of two numbers", () => {
      const sum = add(1, 2);

      expect(sum).toBe(3);
    });
  });

  describe("substract", () => {});
});
