import { doAll } from "./doAll";
const scripts = ["npm run format:check", "npm run format", "npm run lint"];
doAll(
  scripts,
  () => {
    console.log("ok");
  },
  () => {
    console.log("Refusing to commit. Fix and stage changes and try again.");
  }
);
