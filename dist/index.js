"use strict";
exports.__esModule = true;
var doAll_1 = require("./doAll");
var scripts = [
    "npm run format:check",
    "npm run lint:check"
];
doAll_1.doAll(scripts, function () {
    console.log('good to go');
}, function () {
    console.log('Refusing to commit');
    console.log('Fix the above errors and try again!');
});
//# sourceMappingURL=index.js.map