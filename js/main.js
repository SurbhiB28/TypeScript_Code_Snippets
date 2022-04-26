"use strict";
var message = "Hello World";
console.log(message);
var point2D = { x: 0, y: 10 };
var point3D = { x: 0, y: 10, z: 20 };
function TakePoint2D(point) {
    // 
}
TakePoint2D(point2D);
TakePoint2D(point3D);
console.log(null == null);
console.log(undefined == undefined);
console.log(null == undefined);
//Annotation
function foo1() {
    //return {a:1,b:2};
    return { a: 1 };
}
//type of
var A = 2;
if (typeof A !== 'undefined') {
    console.log(A);
}
// err
fs.readFile('someFile', (err, data) => {
    if (err) {
        // 
    }
    else {
        //
    }
});
//
function toInt(str) {
    const int = parseInt(str);
    if (isNaN(int)) {
        return { valid: false };
    }
    else {
        return { valid: true, int };
    }
}
