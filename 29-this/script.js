// "use strict"
// a = 'helloworld'
// console.log('global:', this)
// function myFunc(){
//   console.log('inside a function:', this)
//   this.extraProp = 'fjeiosajoif'
// }
// myFunc()

// console.log(this)
//Ruby's `self` and JS's `this`

// let ann = {
//   firstName: "Ann",
//   lastName: "Duong",
//   greet: greet
// }
//
// let paul = {
//   firstName: "Paul",
//   lastName: "Nicholsen",
//   greet: greet
// }
//
// function greet(){
//   console.log(`${this.firstName} say hi`)
// }

// let rob = {
//   firstName: "Rob",
//   lastName: "Cobb",
//   greet: function(){
//     //this == ann
//     console.log(`${this.firstName} say hi`)
//     setFullName = () => {
//       this.fullName = `${this.firstName} ${this.lastName}`
//     }
//     setFullName()
//   }
// }
//
// let ann = {
//   firstName: "Ann",
//   lastName: "Duong",
//   greet: rob.greet
// }
let ann = {
  name: "Ann"
}
let rob = {
  name: "Rob"
}
let paul = {
  name: "Paul"
}

//bind
// function greet(){
//   console.log(`${this.name} say hi`)
// }

// let annBound = greet.bind(ann)
// let robBound = annBound.bind(rob)

//person is going to be a string
function greetPeople(person1, person2){
  console.log(`${this.name} say hi ${person1} and ${person2}`)
}

let annBound = greetPeople.bind(ann)
let robBound = greetPeople.bind(rob, "bruno")
let paulBound = greetPeople.bind(paul, "bruno", "sam")


//call and apply


// greetPeople.call(paul, "sam", "jake")
// greetPeople.call(paul, "nicole", "melanie")
// greetPeople.call(ann, "nicole", "melanie")

greetPeople.apply(paul, ["sam", "jake"])
greetPeople.apply(paul, ["nicole", "melanie"])
greetPeople.apply(ann, ["nicole", "melanie"])












//
