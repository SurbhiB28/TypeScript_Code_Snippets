//type and interfaces
type X = {
  a: string;
  b: number;
}
type Y = X & {
  c: string
  d: number
}
let y: Y = {
  c: "testing",
  d: 42 // er
}

interface Z extends X {
  name: string
  age: number
}
interface Person {
  name: string
  age: number
}
interface Guy extends Person {
  profession: string
}

type K = Person & {
  a: string
  b: number
}