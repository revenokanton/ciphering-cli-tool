const { expect } = require("@jest/globals");
const {
  checkConfigPatter,
  checkMultipleArgs,
  validateAppArgs,
} = require("./validation");

describe("modules / helpers / validation / checkConfigPatter", () => {
  it("should work with proper args", () => {
    expect(() => {
      checkConfigPatter(["C1", "C0", "R1", "R0", "A"]);
    }).not.toThrow();
  });

  it("should throw error if wrong patterns", () => {
    jest.clearAllMocks();
    const spy = jest.spyOn(process.stderr, "write");
    jest.spyOn(process, "exit").mockImplementationOnce(() => {
      throw new Error("process.exit() was called.");
    });
    expect(() => {
      checkConfigPatter(["C2", "C3", "R2", "R3", "A1"]);
    }).toThrow();
    expect(spy.mock.calls).toEqual([["There are invalid config properties"]]);
    expect(process.exit).toHaveBeenCalledWith(1);
  });
});

describe("modules / helpers / validation / checkMultipleArgs", () => {
  it("should work with proper args", () => {
    expect(() => {
      checkMultipleArgs(
        ["-c", "--config"],
        ["-c", "C0", "-i", "input.txt", "-o", "output.txt"]
      );
    }).not.toThrow();
  });

  it("should throw error if wrong patterns", () => {
    jest.clearAllMocks();
    const spy = jest.spyOn(process.stderr, "write");
    jest.spyOn(process, "exit").mockImplementationOnce(() => {
      throw new Error("process.exit() was called.");
    });
    expect(() => {
      checkMultipleArgs(["-c", "--config"], ["-c", "C0", "--config", "C1"]);
    }).toThrow();
    expect(spy.mock.calls).toEqual([
      ["Please remove multiple --config arguments"],
    ]);
    expect(process.exit).toHaveBeenCalledWith(1);
  });
});

describe("modules / helpers / validation / validateAppArgs", () => {
  it("should work with proper args", () => {
    expect(() => {
      validateAppArgs(["-c", "C0", "-i", "input.txt", "-o", "output.txt"]);
    }).not.toThrow();
  });

  it("should throw error if wrong config patterns", () => {
    jest.clearAllMocks();
    const spy = jest.spyOn(process.stderr, "write");
    jest.spyOn(process, "exit").mockImplementationOnce(() => {
      throw new Error("process.exit() was called.");
    });
    expect(() => {
      validateAppArgs([]);
    }).toThrow();
    expect(spy.mock.calls).toEqual([
      ["Please add a required config argument: -c | --config"],
    ]);
    expect(process.exit).toHaveBeenCalledWith(1);
  });

  it("should throw error if proper input file", () => {
    jest.clearAllMocks();
    const spy = jest.spyOn(process.stderr, "write");
    jest.spyOn(process, "exit").mockImplementationOnce(() => {
      throw new Error("process.exit() was called.");
    });
    expect(() => {
      validateAppArgs(["-c", "C0", "-i", "nofile.txt"]);
    }).toThrow();
    expect(spy.mock.calls).toEqual([
      ["ENOENT: no such file or directory, access 'nofile.txt'"],
    ]);
  });

  it("should throw error if proper output file", () => {
    jest.clearAllMocks();
    const spy = jest.spyOn(process.stderr, "write");
    jest.spyOn(process, "exit").mockImplementationOnce(() => {
      throw new Error("process.exit() was called.");
    });
    expect(() => {
      validateAppArgs(["-c", "C0", "-o", "nofile.txt"]);
    }).toThrow();
    expect(spy.mock.calls).toEqual([
      ["ENOENT: no such file or directory, access 'nofile.txt'"],
    ]);
  });
});
