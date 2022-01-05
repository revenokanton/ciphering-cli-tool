const { exec } = require("child_process");
const fs = require("fs");

describe("CLI success scenarios with files", () => {
  beforeEach(() => {
    fs.writeFileSync("fixtures/test_output.txt", "", "utf8");
  });

  afterEach(() => {
    fs.unlinkSync("fixtures/test_output.txt");
  });

  it("Should cipher text according to config => C1-C1-R0-A", (done) => {
    exec(
      'node my_ciphering_cli -c "C1-C1-R0-A" -i "fixtures/test_input.txt" -o "fixtures/test_output.txt"',
      () => {
        const file = fs.readFileSync("fixtures/test_output.txt", "utf8");
        expect(file).toEqual('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!');
        done();
      }
    );
  });

  it("Should cipher text according to config => C1-C0-A-R1-R0-A-R0-R0-C1-A", (done) => {
    exec(
      'node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "fixtures/test_input.txt" -o "fixtures/test_output.txt"',
      () => {
        const file = fs.readFileSync("fixtures/test_output.txt", "utf8");
        expect(file).toEqual('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!');
        done();
      }
    );
  });

  it("Should cipher text according to config => A-A-A-R1-R0-R0-R0-C1-C1-A", (done) => {
    exec(
      'node my_ciphering_cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "fixtures/test_input.txt" -o "fixtures/test_output.txt"',
      () => {
        const file = fs.readFileSync("fixtures/test_output.txt", "utf8");
        expect(file).toEqual('Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!');
        done();
      }
    );
  });

  it("Should cipher text according to config => C1-R1-C0-C0-A-R0-R1-R1-A-C1", (done) => {
    exec(
      'node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "fixtures/test_input.txt" -o "fixtures/test_output.txt"',
      () => {
        const file = fs.readFileSync("fixtures/test_output.txt", "utf8");
        expect(file).toEqual('This is secret. Message about "_" symbol!');
        done();
      }
    );
  });
});

describe("CLI success scenarios with stdout", () => {
  it("Should cipher text according to config => C1-C1-R0-A", (done) => {
    exec(
      'node my_ciphering_cli -c "C1-C1-R0-A" -i "fixtures/test_input.txt"',
      (error, stdout) => {
        expect(stdout).toEqual('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!');
        done();
      }
    );
  });

  it("Should cipher text according to config => C1-C0-A-R1-R0-A-R0-R0-C1-A", (done) => {
    exec(
      'node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "fixtures/test_input.txt"',
      (error, stdout) => {
        expect(stdout).toEqual('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!');
        done();
      }
    );
  });

  it("Should cipher text according to config => A-A-A-R1-R0-R0-R0-C1-C1-A", (done) => {
    exec(
      'node my_ciphering_cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "fixtures/test_input.txt"',
      (error, stdout) => {
        expect(stdout).toEqual('Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!');
        done();
      }
    );
  });

  it("Should cipher text according to config => C1-R1-C0-C0-A-R0-R1-R1-A-C1", (done) => {
    exec(
      'node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "fixtures/test_input.txt"',
      (error, stdout) => {
        expect(stdout).toEqual('This is secret. Message about "_" symbol!');
        done();
      }
    );
  });
});
