import { doAll } from "./doAll";
const scripts = [
  "npm run format:check",
  "npm run format",
  "npm run lint",
  "npm run build"
];
doAll(
  scripts,
  (): void => {
    console.log("ok");
  },
  () => {
    console.log("Refusing to commit. Fix and stage changes and try again.");
    console.log("or run `!! --no-verify` to skip these checks");
  }
);
