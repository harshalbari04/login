// // 1) function declaration
// function add(x,y){
//     return x+y
// }
// let aaa = add(100,50)
// console.log(aaa)

// 2) function expression
// let add = function(x,y){
//     return x+y
// }
// let aaaa = add(100,50)
// console.log(aaaa)

// 3) arrow function
// let add = (x,y)=>{
//     return x+y
// }
// let aaaa = add(100,50)
// console.log(aaaa)

// function as a parameter to another function

// let addup = function(a,b){
//     return a*b
// }
// function mul(fn){
//     let gk = fn(10,25)
//     return gk
// }
// let kk = mul(addup)
// console.log(kk)

// array as a parameter to another function
// let numbersA = [11,22,33]

// function addition(arr){
//     return arr.reduce(function(acc,el){
//         return acc + el
//     })
// }
// let sum1 = addition(numbersA)
// console.log(sum1)

// string as a parameter to another function

let greeting = "Good Morning"
function greet(str){
    return 'welcome ${str}'
}
let g = greet(greeting)
console.log(g)
