const { expect } = require("@jest/globals");
const { startApp } = require("./main");

describe("modules / main", () => {
  it("should work without proper props", async () => {
    jest.clearAllMocks();
    const logSpy = jest.spyOn(console, "log");
    await startApp({
      args: [
        "-c",
        "C0",
        "-i",
        "fixtures/test_input.txt",
        "-o",
        "fixtures/test_unit_output.txt",
      ],
    });
    expect(logSpy.mock.calls).toEqual([
      ["Text was successfully transformed according provided steps: C0"],
    ]);
  });
});
