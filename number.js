"use strict";
exports.__esModule = true;
exports.bar = exports.foo = void 0;
//console.log({max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER});
var big_js_1 = require("big.js");
exports.foo = new big_js_1.Big('111.11111111111111111111');
exports.bar = exports.foo.plus(new big_js_1.Big('0.00000000000000000001'));
// To get a number:
var x = Number(exports.bar.toString()); // Loses the precision
console.log(x);
