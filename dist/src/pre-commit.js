"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var child_process_1 = require("child_process");
var ora = require("ora");
var spinner = ora('Loading unicorns');
var pc = {
    package: function () { return JSON.parse(fs_1.readFileSync("./package.json", "utf-8")); },
    exec: function (string) {
        spinner.start();
        try {
            var out = child_process_1.execSync('npm run format');
            spinner.succeed();
        }
        catch (err) {
            var stdout = err.stdout, stderr = err.stderr;
            console.log(stderr.toString());
        }
    }
};
exports.pc = pc;
//# sourceMappingURL=pre-commit.js.map