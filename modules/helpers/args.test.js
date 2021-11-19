const { expect } = require("@jest/globals");

const {
  getValueFromArgs,
  getConfigProps,
  getInputFilePath,
  getOutputFilePath,
} = require("./args");

describe("modules / helpers / args / getValueFromArgs", () => {
  it("should work with args", () => {
    expect(getValueFromArgs(["-c", "--config"], ["-c", "test"])).toEqual(
      "test"
    );
  });
  it("should work without args", () => {
    expect(getValueFromArgs(["-t", "--test"], ["-c", "C0"])).toEqual(null);
  });
});

describe("modules / helpers / args / getConfigProps", () => {
  it("should work with args", () => {
    expect(getConfigProps(["-c", "C0"])).toEqual(["C0"]);
  });
  it("should work with wrong args", () => {
    expect(getConfigProps(["-c"])).toEqual(undefined);
  });
});

describe("modules / helpers / args / getInputFilePath", () => {
  it("should work with args", () => {
    expect(getInputFilePath(["-i", "fixtures/test_input.txt"])).toEqual(
      "fixtures/test_input.txt"
    );
  });
  it("should work with wrong args", () => {
    expect(getInputFilePath([])).toEqual(null);
  });
});

describe("modules / helpers / args / getOutputFilePath", () => {
  it("should work with args", () => {
    expect(getOutputFilePath(["-o", "fixtures/test_unit_output.txt"])).toEqual(
      "fixtures/test_unit_output.txt"
    );
  });
  it("should work with wrong args", () => {
    expect(getOutputFilePath([])).toEqual(null);
  });
});
