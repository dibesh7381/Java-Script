// chapter 1 Q:1
// Create a variable type of string and try to add a number to it.

let a = "Dibesh "
let b = 45
console.log(a + b)

// chapter 1 Q:2
// use type of operator to find the data type of the string from the last question

console.log(typeof(a+b))

//chapter 1 Q:3
//create a const object in java script can you change it to hold a number later

const data = {
    name : "Dibesh",
    Age : 20
}
data['name'] = "Raja"

console.log(data)

//chapter 1 Q:4
//try to add a new key to the const object in the question 3

data['Friend'] = "Santosh"
console.log(data)

//chapter 5 Q:5
//write a js program to create a word meaning dictionary of 5 word

const dict = {
    jalopy : "an old, decrepit, or unpretentious automobile.",
    Weltschmerz : "sorrow that one feels and accepts as one's necessary portion in life; sentimental pessimism.",
    risible : "causing or capable of causing laughter; laughable; ludicrous."
}
console.log(dict.jalopy)