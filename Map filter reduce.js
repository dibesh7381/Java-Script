//Array Map
let a = [23,78,45]
let c = a.map((value,index, array)=>{
   console.log(value ,index, array)
   return value+1
}
)
console.log(c)

//array filter
let arr2 = [10,2,3,4,78,90]
 let j = arr2.filter((k)=>{
    return k<10
}
)
console.log(j)


//Array reduce
let arr3 = [2,13,45,23,49,90]
let arr4 = arr3.reduce((w,x)=>{
     return w + x
})
console.log(arr4)
