/*
const student = {firstName:"surbhi", lastname:"bahukhandi", age:23};

//const first = student.firstName
//const age =  student.age

const {firstName: first, age: age} = student
//console.log(first,age)

const {a,b, ...others}= {a:1, b:2 , c:4, d:5};
console.log(a,b,others)

const student={
    name: {firstName: "surbhi", lastName: "bahukhandi"},
    age: 10
}
const {name: {firstName: prefferedName}, age} = student
console.log(prefferedName);
*/
//Update name
var student = {
    name: { firstName: "surbhi", lastName: "bahukhandi" },
    age: 10
};
var prefferedName = student.name.firstName, age = student.age;
student.name.firstName = "deepika";
(prefferedName = student.name.firstName);
console.log(prefferedName);
//Array Destructuring
var numbers = [1, 2, 3, 4, 5];
var a = numbers[0], b = numbers[1];
console.log(a, b);
/*
const num = [1,2,3,4,5,6]
const [one, two, three, ...tail]= num;
console.log(one,two,three,tail)
*/
/*
const number = [{one:1}, {two:2}, {three:3}]
const [{one}, {two},{three}] = number
console.log(one,two,three)
*/
var numberGroups = { odd: [1, 3], even: [2, 4] };
var _a = numberGroups.odd, one = _a[0], three = _a[1], _b = numberGroups.even, two = _b[0], four = _b[1];
console.log(one, two, three, four);
