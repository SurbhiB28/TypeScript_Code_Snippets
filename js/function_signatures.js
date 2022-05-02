// Function signature
var g;
var add;
g = function (name, greeting) {
    return "".concat(name, " wants to say ").concat(greeting);
};
add = function (first, second) {
    return first + second;
};
console.log(g('surbhi', 'hello'));
console.log(add(5, 5));
