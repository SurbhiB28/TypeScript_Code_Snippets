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
const student={
    name: {firstName: "surbhi", lastName: "bahukhandi"},
    age: 10
}
let {name: {firstName: prefferedName}, age} = student
student.name.firstName= "deepika";
({name: {firstName:prefferedName}}= student)
console.log(prefferedName);

//Array Destructuring
const numbers = [1,2,3,4,5]
const [a,b] = numbers
console.log(a,b)
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

const numberGroups = {odd: [1,3], even: [2,4]}
const {odd:[one,three], even:[two,four]} = numberGroups
console.log(one,two,three,four)