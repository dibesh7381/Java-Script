console.log("This is about loops in the array")
//For loop
let num = [1,2,3,4,5]
for(i=0;i<num.length;i++){
    console.log(num[i])
}

//Foreach Loop
let num1 = [3,45,67,23,90]
num1.forEach(a => {
    console.log(a + a)
});

//Array from
let name = "Dibesh"
let arr = Array.from(name)
console.log(arr)

//for of loop
let u = [23,14,89,45,56]
for(i of u){
    console.log(i)
}




