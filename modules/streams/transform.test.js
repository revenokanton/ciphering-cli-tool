const { expect } = require("@jest/globals");
const { CryptoTransformStream } = require("./transform");

describe("modules / streams / transform / CryptoTransformStream", () => {
  it("should use proper cipher C0", async () => {
    const mockedStream = new CryptoTransformStream("C0");

    mockedStream.on("data", (d) => {
      expect(d.toString()).toEqual("sdrs");
    });

    mockedStream._transform("test", "UTF-8", () => {});
  });

  it("should use proper cipher C1", async () => {
    const mockedStream = new CryptoTransformStream("C1");

    mockedStream.on("data", (d) => {
      expect(d.toString()).toEqual("uftu");
    });

    mockedStream._transform("test", "UTF-8", () => {});
  });

  it("should use proper cipher R0", async () => {
    const mockedStream = new CryptoTransformStream("R0");

    mockedStream.on("data", (d) => {
      expect(d.toString()).toEqual("lwkl");
    });

    mockedStream._transform("test", "UTF-8", () => {});
  });

  it("should use proper cipher R1", async () => {
    const mockedStream = new CryptoTransformStream("R1");

    mockedStream.on("data", (d) => {
      expect(d.toString()).toEqual("bmab");
    });

    mockedStream._transform("test", "UTF-8", () => {});
  });

  it("should use proper cipher A", async () => {
    const mockedStream = new CryptoTransformStream("A");

    mockedStream.on("data", (d) => {
      expect(d.toString()).toEqual("gvhg");
    });

    mockedStream._transform("test", "UTF-8", () => {});
  });
});
