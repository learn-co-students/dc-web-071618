//Step 1: When the page loads, I want to make a GET fetch and render the pokemons inside #pokemon-container
document.addEventListener('DOMContentLoaded', function(){
  getAllFetch()
  document.querySelector('#new-pokemon-form').addEventListener('submit', handleCreatePokemon)
  document.querySelector('#update-pokemon-form').addEventListener('submit', handleEditPokemon)
})

//Step 2: When the user submits the Create New Pokemon form,
//I want to make a make a POST request, and render the new pokemon without a page refresh
function handleCreatePokemon(event){
  event.preventDefault()
  postFetch()
  event.currentTarget.reset()
}

function postFetch(){
  let pokemonName = document.querySelector('#name-input').value
  let pokemonSprite = document.querySelector('#sprite-input').value
  let data = {name: pokemonName, sprite: pokemonSprite}
  fetch(`http://localhost:3000/pokemon`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  .then(response => response.json())
  .then(jsonData => {
    render(jsonData)
  })
}

function getAllFetch(){
  fetch(`http://localhost:3000/pokemon`)
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
  divElement.addEventListener('click', clickPokemonHandler)
  buttonElement.addEventListener('click', clickDeleteHandler)

  divElement.classList.add('card')
  divElement.id = `pokemon-${pokemon.id}`
  h2Element.innerHTML = pokemon.name
  imgElement.src = pokemon.sprite
  buttonElement.innerText = 'Delete'
  buttonElement.id = `button-${pokemon.id}`

  document.querySelector('#pokemon-container').appendChild(divElement)
}

//Step 3.1: When a user clicks on a pokemon card, its info is shown in the Update
//Pokemon form
function clickPokemonHandler(event){
  let pokemonName = event.currentTarget.querySelector('h2').innerText
  let pokemonSprite = event.currentTarget.querySelector('img').src
  let pokemonId = event.currentTarget.id.split('-')[1]
  document.querySelector('#name-edit').value = pokemonName
  document.querySelector('#sprite-edit').value = pokemonSprite
  document.querySelector('#id-edit').value = pokemonId
}

//Step 3.2: When a user submits the Edit Pokemon form, I want to make a PATCH fetch,
//and update the DOM
function handleEditPokemon(event){
  patchFetch(event.currentTarget.querySelector('input').value)
  event.preventDefault()
}

function patchFetch(id){
  let pokemonName = document.querySelector('#name-edit').value
  let data = {name: pokemonName}
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  .then(response => response.json())
  .then(jsonData => {
    document.querySelector(`#pokemon-${jsonData.id}`).querySelector('h2').innerText = jsonData.name
  })
}

//Step 4: When a user click a delete button, make a DELETE fetch, and
//remove the pokemon from the DOM
function clickDeleteHandler(event){
  console.log()
  deleteFetch(event.currentTarget.id.split('-')[1])
}

function deleteFetch(id){
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(jsonData => {
    let div = document.querySelector(`#pokemon-${id}`)
    div.remove()
  })
}

//Plan, Think, Brainstorm
//When <some event happens>, I want to make a <what kind of> fetch request,
//and manipulate the DOM <in what way>. 






















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
