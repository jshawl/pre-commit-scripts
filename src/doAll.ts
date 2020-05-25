import { pc } from "./pre-commit";

export const doAll = (
  fns: string[],
  done: Function,
  fail: Function,
  anyErrors = false
) => {
  const fn = fns.shift();
  pc.exec(fn as string, (err: Error, stderr: string, stdout: string) => {
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
