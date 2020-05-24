"use strict";
exports.__esModule = true;
var pre_commit_1 = require("./pre-commit");
exports.doAll = function (fns, done, fail, errors) {
    if (errors === void 0) { errors = false; }
    var fn = fns.shift();
    pre_commit_1.pc.exec(fn, function (err, out) {
        if (err) {
            errors = true;
            console.log(err.message);
            if (fns.length)
                exports.doAll(fns, done, fail, errors);
            else {
                if (errors) {
                    fail();
                }
                else {
                    done();
                }
            }
        }
    });
};
//# sourceMappingURL=doAll.js.map