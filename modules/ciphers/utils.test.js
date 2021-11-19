const { expect } = require("@jest/globals");
const {
  cipherModes,
  getCipherPeriod,
  filterSymbols,
  convertFromCode,
  convertToCode,
  compose,
  transformData,
  encode,
  decode,
} = require("./utils");

describe("modules / ciphers / utils / cipherModes", () => {
  test("should return proper values", () => {
    expect(cipherModes("encode", "decode")).toEqual({
      encode: "encode",
      decode: "decode",
    });
  });
});

describe("modules / ciphers / utils / getCipherPeriod", () => {
  test("should return proper cipher period", () => {
    expect(getCipherPeriod(9, 3)).toBe(3);
  });
});

describe("modules / ciphers / utils / filterSymbols", () => {
  jest.clearAllMocks();
  const mockCallback = jest.fn((x) => 42 + x);
  const codes = Array.from(Array(255).keys());

  test.each(codes)("should return proper code", (code) => {
    let expected;
    if (code > 96 && code < 123) {
      expected = 97 + code - 97 + 42;
    } else if (code > 64 && code < 91) {
      expected = 65 + code - 65 + 42;
    } else {
      expected = code;
    }
    expect(filterSymbols(mockCallback)(code)).toBe(expected);
  });
});

describe("modules / ciphers / utils / convertFromCode", () => {
  const codes = Array.from(Array(255).keys());
  test.each(codes)("should convert from char", (code) => {
    jest.clearAllMocks();
    const mockCallback = jest.fn((x) => String.fromCharCode(x));
    expect(convertFromCode(code)).toEqual(mockCallback(code));
  });
});

describe("modules / ciphers / utils / convertToCode", () => {
  test("should convert to char", () => {
    jest.clearAllMocks();
    const char = "A";
    const mockCallback = jest.fn((str) => str.charCodeAt(0));
    expect(convertToCode(char)).toEqual(mockCallback(char));
  });
});

describe("modules / ciphers / utils / compose", () => {
  test("should convert to char", () => {
    jest.clearAllMocks();
    const mockCallback = jest.fn((x) => 42 + x);
    const mockConvertToCode = jest.fn((str) => str.charCodeAt(0));
    const mockConvertFromCode = jest.fn((x) => String.fromCharCode(x));
    expect(
      compose(
        mockConvertToCode,
        filterSymbols(mockCallback),
        mockConvertFromCode
      )("A")
    ).toEqual("k");
  });
});

describe("modules / ciphers / utils / transformData", () => {
  test("should convert to char", () => {
    jest.clearAllMocks();
    const mockCallback = jest.fn((x) => 42 + x);
    expect(transformData(mockCallback, "A")).toEqual("k");
  });
});

describe("modules / ciphers / utils / decode", () => {
  test("should convert to char", () => {
    jest.clearAllMocks();
    const mockCallback = { decode: jest.fn((x) => 42 + x) };
    expect(decode(mockCallback, "A")).toEqual("k");
  });
});

describe("modules / ciphers / utils / encode", () => {
  test("should convert to char", () => {
    jest.clearAllMocks();
    const mockCallback = { encode: jest.fn((x) => 42 + x) };
    expect(encode(mockCallback, "A")).toEqual("k");
  });
});
