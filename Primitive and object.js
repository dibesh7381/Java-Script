console.log("This is about java script primitive data and objects")

// There are 7 types of primitive data types.
// ss bb nn u

// String
// Symbol
// Boolean
// Bigint
// Number
// null
// undefined

let a = null;
let b = 345;
let c = true;
let d = BigInt(34) + BigInt(6)
let e = "Dibesh"
let f = undefined
let g = Symbol("Hey how are you")

console.log(a,b,c,d,e,f,g)

console.log(typeof(d))
console.log(typeof(g))
console.log(typeof(c))


//Objects or non-primitive data types in Java Script.

const Data = {
    "Dibesh" : "Student",
    "Santosh" : "Friend",
    "Raja" : 2,
    "Muna" : "Kill chor"
}
console.log(Data["Muna"])