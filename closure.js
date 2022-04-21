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
    var val = 0;
    return {
        increment: function () { val++; },
        getVal: function () { return val; }
    };
}
var counter = createCounter();
counter.increment();
console.log(counter.getVal());
counter.increment();
console.log(counter.getVal());
counter.increment();
console.log(counter.getVal());
