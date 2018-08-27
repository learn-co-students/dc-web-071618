// debugger;
//How do we write functions in JS


//Function declaration
// function sellCupCake(){
//   console.log('cupcakes are sold')
// }
//
// //Function expression
// let iceCupCake = function(){
//   console.log('icing the cupcakes')
// }
//
// //Arrow Functions
// //very explicit way of writing
// let eatCupCake1 = () => {return 'eating cupcake'}
//
// //without paranthese
// let eatCupCake2 = x => {return `eating ${x} cupcake`}
//
// let eatCupCake3 = (a, b) => {return `eating ${a}-${b} cupcake`}
//
// //implied return
// let eatCupCake4 = ingredient => `eating ${ingredient} cupcake`
//
// let multipleByTwo = x => 2*x
//
//
// //hositing (function declartions are hoisted;
// //variables declared with var are hosited, but only the declartion and not the assignmment)
// var1 = 1
// var var2 = 2;
// let var3 = 3
// const var4 = 4

// debugger
// let chocolate = 'dark chocolate'
// vanilla = 'definitely vanilla'
//
// function outerFunction(){
//   let chocolate = 'white chocolate'
//   if(true){
//     chocolate = 'milk chocolate'
//     vanilla = 'pure vanilla'
//   }
//
//   anotherFunction(chocolate)
//   vanilla = "not vanilla"
// }
//
// function anotherFunction(chocolate){
// }
//
// outerFunction()

// let array = ["a","b","c","d"]
// let obj = {key1: 11, key2: 22, key3: 33, key4: 44}
// for loops
// for(let i=0; i<array.length; i++){
//   console.log(array[i])
// }

// for...in
// for(const key in array){
//   console.log(array[key])
// }
//for both arrays and objs


// function loop(){
//   for(var key in obj){
//     console.log(key)
//   }
//   console.log(key)
// }

// loop()


// for...of
// for(const element of array){
//   console.log(element)
// }
//only work for arrays, not objects



// let array = [11,22,33,44]
// array.forEach(consoleLog)
// function consoleLog(x){
//   console.log(x)
// }
//
// array.forEach(function(x){console.log(x)})
//
// array.forEach(x => {console.log(x)})


let array = [11,22,33,44]
let newArray = array.map(multipleByTwo)
function multipleByTwo(x){
  return 2*x
}

// array.map(function(x){
//   debugger;
// })
//
let anotherArray = array.map(x => {
  debugger;
  return 2*x
})

// array methods (.map, .forEach)
























//
