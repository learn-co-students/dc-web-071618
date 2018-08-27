// console.log("this is the first line")
// var a = "a"
// var b = "b"
// console.log("this is the last line")
// alert("hello string")

// function sayHello(){
//   return "hello there"
// }
//
// console.log(sayHello())


//Primitive Data Types

//Strings
let str1 = "hello"
let str2 = "world"
let myString1 = 'string'
let myString2 = `string`
// concatenation vs interpolation
let x = str1 + " " + str2
let y = `${str1} ${str2}`

//Numbers
1
1.754837593
Math.PI
Infinity

//Boolean
true
false
!!undefined
Boolean([])
// == vs ===
//Coersion

//undefined
undefined

null

//Objects
//objects are Objects
// arrays
//functions

//Objects
- {}

//arrays
- []

//functions
// - objects that have code associated with it that you can return

//Pass by Value vs Pass by Reference
// function multiplyByTwo(num){
//   num = num * 2
//   return num
// }
//
// let a = 4
// let b = multiplyByTwo(a)

//num look something like {number: 4}
function multiplyByTwo(obj){
  let newNumber = obj.number * 2
  obj.number = newNumber
  debugger
  return newNumber
}

let a = {number: 3}
let b = multiplyByTwo(a)



















//
