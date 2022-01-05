const { exec } = require("child_process");

describe("CLI error scenarios", () => {
  it("Should handle: User passes the same cli argument twice", (done) => {
    exec(
      "node my_ciphering_cli -c C1-C1-A-R0 -c C0",
      (error, stdout, stderr) => {
        expect(stderr).toEqual("Please remove multiple --config arguments");
        done();
      }
    );
    exec(
      "node my_ciphering_cli --config C1-C1-A-R0 -c C0",
      (error, stdout, stderr) => {
        expect(stderr).toEqual("Please remove multiple --config arguments");
        done();
      }
    );
    exec(
      "node my_ciphering_cli --config C1-C1-A-R0 --config C0",
      (error, stdout, stderr) => {
        expect(stderr).toEqual("Please remove multiple --config arguments");
        done();
      }
    );
  });

  it("Should handle: User doesn't pass -c or --config argument", (done) => {
    exec("node my_ciphering_cli", (error, stdout, stderr) => {
      expect(stderr).toEqual(
        "Please add a required config argument: -c | --config"
      );
      done();
    });
  });

  it("Should handle: User passes -i argument with path that doesn't exist or with no read access", (done) => {
    exec(
      "node my_ciphering_cli --config C1-C1-A-R0 -i input",
      (error, stdout, stderr) => {
        expect(stderr).toEqual(
          "ENOENT: no such file or directory, access 'input'"
        );
        done();
      }
    );
  });

  it("Should handle: User passes -o argument with path to directory that doesn't exist or with no read access", (done) => {
    exec(
      "node my_ciphering_cli --config C1-C1-A-R0 -o output",
      (error, stdout, stderr) => {
        expect(stderr).toEqual(
          "ENOENT: no such file or directory, access 'output'"
        );
        done();
      }
    );
  });

  it("Should handle: User passes incorrect symbols in argument for --config", (done) => {
    exec(
      "node my_ciphering_cli --config C0-C1-A2-R1",
      (error, stdout, stderr) => {
        expect(stderr).toEqual("There are invalid config properties");
        done();
      }
    );
  });
});
