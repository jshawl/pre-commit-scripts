import { readFileSync } from "fs";
import { exec, ExecException } from "child_process";
import ORA from "ora";

const spinner = ORA();
const pc = {
  package: () => JSON.parse(readFileSync("./package.json", "utf-8")),
  exec: (string: string, callback: (err: Error | null) => void) => {
    spinner.start(`Running ${string}`);
    exec(string, {}, (err: ExecException | null) => {
      if (err) {
        spinner.fail(string);
        callback(err);
      } else {
        spinner.succeed(string);
        callback(err);
      }
    });
  }
};
export { pc };
