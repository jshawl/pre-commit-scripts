#!/usr/bin/env node

import { existsSync, readFileSync } from "fs";
import { exec, ExecException } from "child_process";
import ORA from "ora";

const spinner = ORA();
console.log("Running .git/hooks/pre-commit");
let scripts: string[];
if (existsSync(".pre-commit-scripts")) {
  console.log("Using ./.pre-commit-scripts");
  scripts = readFileSync(".pre-commit-scripts", "utf8")
    .split("\n")
    .filter(String);
} else {
  scripts = [
    "npm run format:check",
    "npm run format",
    "npm run lint",
    "npm run build",
  ];
}

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
  },
};

const doAll = (
  fns: string[],
  done: () => void,
  fail: () => void,
  anyErrors = false
): void => {
  const fn = fns.shift();
  pc.exec(fn as string, (err: Error | null) => {
    if (err) {
      anyErrors = true;
    }
    if (fns.length) {
      doAll(fns, done, fail, anyErrors);
    } else {
      if (anyErrors) {
        fail();
      } else {
        done();
      }
    }
  });
};

doAll(
  scripts,
  (): void => {
    process.exit(0);
  },
  (): void => {
    console.log("Refusing to commit. Fix and stage changes and try again.");
    console.log("or run `!! --no-verify` to skip these checks");
    process.exit(1);
  }
);
