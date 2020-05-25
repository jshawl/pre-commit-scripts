import { readFileSync } from "fs";
const child_process = require("child_process");
const ora = require("ora");
const spinner = ora("Loading unicorns");
const pc = {
  package: () => JSON.parse(readFileSync("./package.json", "utf-8")),
  exec: (string: string, callback: Function) => {
    spinner.start(`Running ${string}`);
    child_process.exec(string, (err: Error, stdout: string, stderr: string) => {
      if (err) {
        spinner.fail(string);
        callback(err, stdout);
      } else {
        spinner.succeed(string);
        callback(err, stdout);
      }
    });
  }
};
export { pc };
