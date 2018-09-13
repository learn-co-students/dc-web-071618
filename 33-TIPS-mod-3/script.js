console.log('connected')

//1) Break down the problem into sub-problems
//2) Pseudo Code
//3) Consider Edge Cases
//4) Implement/Test iteratively
//5) Always communicate with your interviewer

//given an array of arrays (2d array)   <= input
//for each array,
  //find the max in the array
  //find the min in the array
  //subtract min from max
  //add all the differences together
//return that sum (number)     <= output

var data = [
  [2, 3, 7, 8],
  [0, -1, 3],
  [9, 2, 8, 3]
]
var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]
// var transformedData = [
//   [8, 2],
//   [3, 0],
//   [9, 3]
// ]

function findCheckSum(data){  // <= data is an array of arrays
  let accumulator = 0
  for(let i = 0; i < data.length; i++){
    accumulator += findDifference(data[i])
  }
  return accumulator
}

function findDifference(array){ // <= one dimensional
  let sortedArray = array.sort((a, b) => {
    return a - b
  })
  let max = sortedArray[array.length - 1]
  let min = sortedArray[0]
  return max - min
  // let max = Math.max(...array)
  // let min = Math.min(...array)
  // return max-min
}

// let max = array[0]
// let min = array[0]
// for(let i = 0; i <  array.length; i++){
//   if(array[i] > max){
//     max = array[i]
//   }
// }
// for(let i = 0; i <  array.length; i++){
//   if(array[i] < min){
//     min = array[i]
//   }
// }
// return max - min

let array = [5, 3, 2, 4, 1]
let array2 = [5, 3, 21, 4, 1, 2, 31]

// console.log(array.sort())
