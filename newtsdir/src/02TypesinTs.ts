//type inference
let drink1 = "coffee";
// let drink1: string
console.log(drink1);

let cups = Math.random()>0.5 ? 10 : '20'
// let cups: string | number

console.log(cups);

//type annotation
let drink2 : string  = "chai"
console.log(drink2);
