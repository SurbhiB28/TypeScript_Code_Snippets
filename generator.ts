const start = new Date('2022-04-15T00:00:00.000Z').getTime();
const oneMinuteInMillis = 60_000;

function* generateDate(timestamp: number, intervalInMillis: number){
    let increment = 0;
    while(true){
        increment +=1;
        const timeIncrement = increment * intervalInMillis;

        yield new Date(timestamp + timeIncrement);
    }
}
const generator = generateDate(start, oneMinuteInMillis);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

function* generator_next() {
    const bar = yield 'foo'; // bar may be *any* type
    console.log(bar); ///// foo
}

const a = generator_next();

const b = a.next();

console.log(b); //foo

const c = a.next('woo');

console.log(c); 