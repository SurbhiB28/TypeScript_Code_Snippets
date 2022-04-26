"use strict";
/*function outerFunction(arg) {
    var variableInOuterFunction = arg;

    function bar() {
        console.log(variableInOuterFunction);
    }
    bar();
}

outerFunction("closure");
*/
//
function createCounter() {
    let val = 0;
    return {
        increment() { val++; },
        getVal() { return val; }
    };
}
let counter = createCounter();
counter.increment();
console.log(counter.getVal());
counter.increment();
console.log(counter.getVal());
counter.increment();
console.log(counter.getVal());
