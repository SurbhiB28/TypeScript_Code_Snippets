// Function signature
let g: (a: string, b: string) => string
let add: (a: number, b: number) => number

g = (name: string , greeting: string) => {
    return `${name} wants to say ${greeting}`
}

add = (first: number, second: number) => {
    return first + second
}

console.log(g('surbhi','hello'))
console.log(add(5,5))

