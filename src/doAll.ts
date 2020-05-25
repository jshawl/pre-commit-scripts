import { pc } from "./pre-commit";

export const doAll = (
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
