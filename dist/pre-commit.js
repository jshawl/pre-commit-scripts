"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var child_process = require("child_process");
var ora = require("ora");
var spinner = ora('Loading unicorns');
var pc = {
    package: function () { return JSON.parse(fs_1.readFileSync("./package.json", "utf-8")); },
    exec: function (string, callback) {
        spinner.start("Running " + string);
        child_process
            .exec(string, function (err, stdout, stderr) {
            if (err) {
                spinner.fail();
                callback(err, stdout);
            }
            else {
                spinner.succeed();
                callback(err, stdout);
            }
        })
            .on('exit', function (code) {
            callback();
        });
    }
};
exports.pc = pc;
//# sourceMappingURL=pre-commit.js.map