"use strict";
var arr = [1, 2, 3];
var arr1 = [...arr, 4, 5, 6];
console.log(arr1);
function sum(...a) {
    console.log(a);
}
sum(5, 6, 7);
