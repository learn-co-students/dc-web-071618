// console.log('connected')

//Functions and take in other functions as params
//.forEach, .map, take in callback functions

// let arr = [1,2,3,4,5]
//
// function myMapper(array, callback){
//   let newArray = []
//   for(let i=0; i<array.length; i++){
//     newArray.push(callback(array[i]))
//   }
//   return newArray
// }
//
// function addTen(x){
//   return x+10
// }
//
// function mulitpleBy5(x){
//   return x*5
// }
//
// console.log(myMapper(arr,mulitpleBy5))

// setTimeout(sayHello, 2000)
//
// function sayHello(){
//   console.log('hello world')
// }
//
// let interval = setInterval(sayHello, 1000)
//
// setTimeout(function(){
//   clearInterval(interval)
// }, 5000)

//Custom callback Functions
// function onBoardNewStudent(studentName, callback){
//   console.log(`Welcome, ${studentName}`)
//   callback(studentName)
// }
//
// function giveKeyCard(name){
//   console.log(`${name}, here is your key card`)
// }
//
// function giveLaptop(name){
//   console.log(`${name}, here is your laptop`)
// }
//
// function kickOut(name){
//   console.log(`${name}, good bye`)
// }

//Function factory
// function welcomeStudentToModFactory(num){
//   //scope of num
//   return function(studentName){
//     //scope of studentName
//     //scope of num
//     console.log(`Welcome ${studentName} to mod ${num}`)
//   }
// }

// let welcomeStudentToMod1 = welcomeStudentToModFactory(1)
// let welcomeStudentToMod2 = welcomeStudentToModFactory(2)
// let welcomeStudentToMod3 = welcomeStudentToModFactory(3)
// let welcomeStudentToMod4 = welcomeStudentToModFactory(4)
// let welcomeStudentToMod5 = welcomeStudentToModFactory(5)

// welcomeStudentToMod('Paul', 1)
// welcomeStudentToMod('Ann', 3)
// welcomeStudentToMod('Rob', 6)

//Nested Functions and Closures
// function generateIdsForStudents(){
//   let id = 0
//   return function(studentName){
//     id = id + 1
//     console.log(`Welcome ${studentName}, your student ID is ${id}`)
//   }
// }
//
// let enrollStudent = generateIdsForStudents()

//IIFE (Immediately Invoked Function Expression)
// debugger;
// (function createDCCampus(){
//   window.newCampus = `New campus opened`
// })()

// debugger;
// (function createDCCampus(date, location, firstCohort){
//   window.newCampus = `New campus opened on ${date} at ${location} with ${firstCohort}`
// })('March', 'by the white house', 'baby got stack')





//OO Programming

// class Instructor
//
//   def initialize(name, salary)
//     @name = name
//     @salary = salary
//   end
//
//   def give_raise(raise)
//     @salary = @salary + raise
//   end
//
//   def show_info
//     puts "#{@name} makes $#{@salary}"
//   end
//
// end
//
// arr = [Instructor.new("Ann", 100), Instructor.new("Paul", 100)]
//
// arr.each{ |x| x.give_raise(100)}
// arr.each{ |x| x.show_info}

//Functional Programming

// arr = [{name:"Ann", salary:100},{name:"Paul", salary:100}]
//
// function updateSalary(instructor, raise){
//   newInstructor = Object.assign({}, instructor)
//   newInstructor.salary = instructor.salary + raise
//   return newInstructor
// }
//
// function updateSalaries(instructors, raise){
//   return instructors.map(instructor => updateSalary(instructor, raise))
// }
//
// newArr = updateSalaries(arr, 100)
// console.log(newArr)
