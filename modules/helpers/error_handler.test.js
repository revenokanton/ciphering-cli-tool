const { expect } = require("@jest/globals");
const { handleError } = require("./error_handler");

describe("modules / helpers / error_handler / handleError", () => {
  test("should show proper error message", () => {
    jest.clearAllMocks();
    const spy = jest.spyOn(process.stderr, "write");
    jest.spyOn(process, "exit").mockImplementationOnce(() => {
      throw new Error("process.exit() was called.");
    });
    expect(() => {
      handleError({ message: "Test error" });
    }).toThrow("process.exit() was called.");
    expect(spy.mock.calls).toEqual([["Test error"]]);
    expect(process.exit).toHaveBeenCalledWith(1);
  });

  test("should work without args", () => {
    expect(() => {
      handleError(null);
    }).not.toThrow();
  });
});
