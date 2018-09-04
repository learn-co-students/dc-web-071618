// var ann = {
//   firstName: 'Ann',
//   lastName: 'Duong'
// }

// function instructorFactory(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }
// var ann = instructorFactory('Ann', 'Duong')
// var rob = instructorFactory('Rob', 'Cobb')

// function Instructor(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName
// }
// var ann = new Instructor('Ann', 'Duong')
// var rob = new Instructor('Rob', 'Cobb')

// function Instructor(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.teach = function(){console.log(`${this.firstName} is giving a lecture`)}
// }
// var ann = new Instructor('Ann', 'Duong')
// var rob = new Instructor('Rob', 'Cobb')

// function Instructor(firstName, lastName){
//   this.firstName = firstName
//   this.lastName = lastName
// }
// Instructor.prototype.teach = function(){
//   console.log(`${this.firstName} is giving a lecture`)
// }
// var ann = new Instructor('Ann', 'Duong')
// var rob = new Instructor('Rob', 'Cobb')



//ES5

// function Instructor(firstName, lastName){
//   this.firstName = firstName
//   this.lastName = lastName
//   Instructor.all.push(this)
// }
// Instructor.prototype.teach = function(){
//   console.log(`${this.firstName} is giving a lecture`)
// }
// Instructor.all = []
// Instructor.teach = function(){
//   console.log("all instructors teach")
// }
// var ann = new Instructor('Ann', 'Duong')
// var rob = new Instructor('Rob', 'Cobb')



//ES6

// class Instructor{
//   constructor(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName
//     Instructor.all.push(this)
//   }
//   teach(){
//     console.log(`${this.firstName} is giving a lecture`)
//   }
//   static teach(){
//     console.log("all instructors teach")
//   }
// }
// Instructor.all = []
// var ann = new Instructor('Ann', 'Duong')
// var rob = new Instructor('Rob', 'Cobb')

// class Person{
//   constructor(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName
//   }
//   greet(){
//     console.log(`${this.firstName} says hi`)
//   }
// }
// class Instructor extends Person{
//   constructor(firstName, lastName){
//     super(firstName, lastName)
//     Instructor.all.push(this)
//   }
//   teach(){
//     console.log(`${this.firstName} is giving a lecture`)
//   }
//   static teach(){
//     console.log("all instructors teach")
//   }
// }
// Instructor.all = []
// var ann = new Instructor('Ann', 'Duong')
// var rob = new Instructor('Rob', 'Cobb')
// var jane = new Person('Jane', 'Doe')

//manually setting the __proto__ for new objects
//manually setting the __proto__ for existing objects is dangerous
//hasOwnProperty method, instanceof
//show Array.prototype
