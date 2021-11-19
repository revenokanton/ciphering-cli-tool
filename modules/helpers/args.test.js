const { expect } = require("@jest/globals");

const { getValueFromArgs } = require("./args");

describe("modules / helpers / args / getValueFromArgs", () => {
  test("should work without args", () => {
    expect(getValueFromArgs()).toEqual(null);
  });
});
