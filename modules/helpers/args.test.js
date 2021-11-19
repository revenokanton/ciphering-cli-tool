const { expect } = require("@jest/globals");

const {
  getValueFromArgs,
  getConfigProps,
  getInputFilePath,
  getOutputFilePath,
} = require("./args");

describe("modules / helpers / args / getValueFromArgs", () => {
  test("should work with args", () => {
    expect(getValueFromArgs(["-c", "--config"], ["-c", "test"])).toEqual(
      "test"
    );
  });
  test("should work without args", () => {
    expect(getValueFromArgs(["-t", "--test"], ["-c", "C0"])).toEqual(null);
  });
});

describe("modules / helpers / args / getConfigProps", () => {
  test("should work with args", () => {
    expect(getConfigProps(["-c", "C0"])).toEqual(["C0"]);
  });
  test("should work with wrong args", () => {
    expect(getConfigProps(["-c"])).toEqual(undefined);
  });
});

describe("modules / helpers / args / getInputFilePath", () => {
  test("should work with args", () => {
    expect(getInputFilePath(["-i", "input.txt"])).toEqual("input.txt");
  });
  test("should work with wrong args", () => {
    expect(getInputFilePath([])).toEqual(null);
  });
});

describe("modules / helpers / args / getOutputFilePath", () => {
  test("should work with args", () => {
    expect(getOutputFilePath(["-o", "output.txt"])).toEqual("output.txt");
  });
  test("should work with wrong args", () => {
    expect(getOutputFilePath([])).toEqual(null);
  });
});
