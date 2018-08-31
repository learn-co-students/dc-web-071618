//Step 2: create a new Pokemon
//Step 3: when I click on a pokemon, I can edit it
//Step 4: when I click a delete button, it deletes the pokemon



//Step 1: When, the page loads, I want to make a GET fetch and render the pokemon inside #pokemon-container
document.addEventListener('DOMContentLoaded', function(){
  getAllFetch()
})

function getAllFetch(){
  fetch(`http://localhost:3000/pokemon/`)
  .then(response => response.json())
  .then(jsonData => {
    //do something with that json data
    jsonData.forEach(pokemon => {render(pokemon)})
  })
}

function render(pokemon){
  //render pokemon to the #pokemon-container div
  let divElement = document.createElement('div')
  let h2Element = document.createElement('h2')
  let imgElement = document.createElement('img')
  let buttonElement = document.createElement('button')

  divElement.appendChild(h2Element)
  divElement.appendChild(imgElement)
  divElement.appendChild(buttonElement)

  divElement.classList.add('card')
  h2Element.innerHTML = pokemon.name
  imgElement.src = pokemon.sprite
  buttonElement.innerText = 'Delete'

  document.querySelector('#pokemon-container').appendChild(divElement)
}

























// //line 1
// //line 2 setTimeout {
// //
// //}
// //line 3
//
//
// //synchronous code is blocking
// //asynchronous code is non-blocking
//
//
// console.log('first line in the file')
// console.log('doing so js logic')
//
// let p = fetch(`https://pokeapi.co/api/v2/pokemon/?limit=949`)
// console.log(p)
//
// console.log('doing some more js logic')
// console.log('end of the file')
//
//
// //making an API call
// p = fetch(`http://localhost:3000/trainers/`)
// //might take many seconds
//
// p = fetch(`http://localhost:3000/trainers/`)
// p.then((promiseValue) => {console.log(promiseValue)})
//
// fetch(`http://localhost:3000/trainers/`)
// .then((response) => {console.log(response)})
//
//
// let trainers;
// //How to make a basic fetch request and get back the json data
// fetch(`http://localhost:3000/trainers/`)
// .then(response => response.json())
// .then(jsonData => {
// 	console.log(jsonData)
//   trainers = jsonData
// 	//do other things with the data
// })
