console.log("This is about conditional expression in java script")
let a = prompt("Hey,whats your age")
a = Number.parseInt(a) //converting string to a number
console.log(typeof (a))

//if statement

if(a<0){
    alert("This is an Invalid Age")
}
else if(a<10){
    alert("You are a kid don't think about driving")
}
else if(a<18 && a>=11){
    alert("You can drive after a few years but now you can't drive")
}
else{
    alert("You can Drive")
}

console.log("Done")

console.log("You can", a<18? "not Drive" : "Drive") // Ternary operator.
