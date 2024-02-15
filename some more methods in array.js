console.log("This is about more methods present in the array")
let a = [1,2,3,4,5,6,7,8]
console.log(a)
delete a[0]
console.log(a)

let b = [1,,5,9,10,11]
let c = [90,56,78,90,100]
let new_array = b.concat(c)
console.log(new_array)

let d = [2,5,6,8,90,0.01]
d.sort()
console.log(d)

let e = [23,45,67,12,90]
e.splice(0,4,5)
console.log(e)
