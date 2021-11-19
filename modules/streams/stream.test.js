const { expect } = require("@jest/globals");
const { getReadStream, getWriteStream } = require("./stream");

describe("modules / streams / stream / getReadStream", () => {
  it("should return read stream", () => {
    expect(() => {
      getReadStream(["-c", "C1-C0", "-i", "fixtures/test_input.txt"]);
    }).not.toThrow();
  });
  it("should return stdin if no error", () => {
    jest.clearAllMocks();
    jest.spyOn(console, "log");
    expect(() => {
      getReadStream(["-c", "C1-C0"]);
    }).not.toThrow();
    expect(console.log.mock.calls[0][0]).toEqual("Enter text:");
  });
});

describe("modules / streams / stream / getReadStream", () => {
  it("should return read stream", () => {
    expect(() => {
      getWriteStream(["-c", "C1-C0", "-o", "fixtures/test_unit_output.txt"]);
    }).not.toThrow();
  });
  it("should return stdin if no error", () => {
    jest.clearAllMocks();
    jest.spyOn(console, "log");
    expect(() => {
      getWriteStream(["-c", "C1-C0"]);
    }).not.toThrow();
  });
});
