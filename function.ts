let greet: Function;

greet = () => {
    console.log('Hello')
}

const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a+b)
    console.log(c)
}
add(5,10,20)

const minus = (a: number, b: number): number =>{
    return a+b
}
let result = minus(10,7)
