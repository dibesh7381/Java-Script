console.log("This is about for loops in java script")

let i = 1
for ( i = 1; i < 100; i++) {
    console.log(i)
}
// for loop
// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for( i = 0; i < n; i++){
//     sum = i+1
// }
// console.log("Sum of first " + n + " natural number is " + sum)

//for in loop
let obj = {
    Dibesh : 80,
    Santosh :70,
    Raja : 50
}
for(a in obj){
    console.log(a+ " Marks are "  + obj [a])
}

//for of loop
let = "Harry"
for(a of "Dibesh"){
    console.log(a)
}