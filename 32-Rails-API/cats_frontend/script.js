document.addEventListener('DOMContentLoaded', function(){
  fetchCats()
  fetchHobby()
})

function deleteCat(id){
  fetch(`http://localhost:3000/cats/${id}`, {
    method: "DELETE"
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    //rerending the DOM without the old cat
  })
}

function updateCat(id, quote){
  fetch(`http://localhost:3000/cats/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': "application/json",
      'Accept': "application/json"
    },
    body: JSON.stringify({quote: quote})
  }).then(response => response.json())
  .then(data => {
    console.log(data)
    //rerending the DOM without a refresh
  })
}

function createCat(name, breed, age, color, quote){
  let data = {name: name, breed: breed, age: age, color: color, quote: quote}
  fetch(`http://localhost:3000/cats/`, {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
      'Accept': "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
  .then(data => {
    renderCat(data)
  })
}

function fetchCats(){
  fetch(`http://localhost:3000/cats`)
  .then(response => response.json())
  .then(data => {
  	data.forEach(cat => {
      renderCat(cat)
    })
  })
}

function renderCat(cat){
  let divElement = document.querySelector('#cats')
  let ul = document.createElement('ul')
  ul.innerText = `${cat.name} ${cat.breed} ${cat.age} ${cat.color} "${cat.quote}"`
  divElement.appendChild(ul)
  cat.hobbies.forEach(hobby => {
    let li = document.createElement('li')
    li.innerText = `${hobby.title}`
    ul.appendChild(li)
  })
}

function fetchHobby(){
  let divElement = document.querySelector('#hobbies')
  fetch(`http://localhost:3000/hobbies`)
  .then(response => response.json())
  .then(data => {
  	data.forEach(hobby => {
      let ul = document.createElement('ul')
      ul.innerText = `${hobby.title} ${hobby.description}`
      divElement.appendChild(ul)
    })
  })
}
