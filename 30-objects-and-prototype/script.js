//OOJS
// let ann = {
//   firstName: "Ann",
//   lastName: "Duong"
// }
//
// let rob = {
//   firstName: "Rob",
//   lastName: "Cobb"
// }
//
// function instructorFactory(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }


//ES5 way of writing classes

//class properties
// Instructor.all = []
// //class Methods
// Instructor.lecture = function(){
//   console.log('all Instructors give lectures')
// }
// //constructor function
// function Instructor(firstName, lastName){
//   //instance properties
//   this.firstName = firstName
//   this.lastName = lastName
//   Instructor.all.push(this)
// }
// //instance methods
// Instructor.prototype.teach = function(){
//   console.log(`${this.firstName} is giving a lecture`)
// }
// Instructor.prototype.goHome = function(){
//   console.log(`${this.firstName} is going home`)
// }
//
// let paul = new Instructor("Paul", "Nicholsen")
// let ann = new Instructor("Ann", "Duong")

//ES6 way of writing classes
class Person{
  constructor(firstName, lastName){
    //instance properties
    this.firstName = firstName
    this.lastName = lastName
  }
  greet(){
    console.log(`${this.firstName} says hi`)
  }
}

class Instructor extends Person {
  constructor(firstName, lastName){
    super(firstName, lastName)
    Instructor.all.push(this)
  }
  //instance methods
  teach(){
    console.log(`${this.firstName} is giving a lecture`)
  }
  goHome(){
    console.log(`${this.firstName} is going home`)
  }
  //class Methods
  static lecture(){
    console.log('all instructors give lectures')
  }
}
//class properties
Instructor.all = []

let ann = new Instructor("Ann", "Duong")
let jane = new Person('Jane', 'Doe')
let paul = new Instructor("Paul", "Nicholsen")

// let rob = {
//   firstName: "Rob",
//   lastName: "Cobb"
// }




//
