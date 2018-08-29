document.addEventListener("DOMContentLoaded", function(){
  let formElement = document.querySelector('form')
  formElement.addEventListener('submit', submitHandler)

  let emailElements = document.querySelectorAll('.email')
  emailElements.forEach(node => {addEmailHandler(node)})

  let rowElements = document.querySelectorAll('.person')
  rowElements.forEach(node => {addProfileHandler(node)})
})

function addProfileHandler(node){
  node.addEventListener('click', function(e){
    console.log("viewing profile for: " + e.currentTarget.innerText)
  }, true)
}

function addEmailHandler(node){
  node.addEventListener('click', function(event){
    // event.stopPropagation()
    console.log("sending an email to: " + event.target.innerText)
  })
}

function submitHandler(event){
  event.preventDefault()
  let tbodyEl = document.querySelector('tbody')
  let firstName = document.getElementById('firstNameInput').value
  let lastName = document.getElementById('lastNameInput').value
  let email = document.getElementById('emailInput').value
  addNewInstructor(firstName, lastName, email, tbodyEl)
  // document.getElementById('firstNameInput').value = ''
  // document.getElementById('lastNameInput').value = ''
  // document.getElementById('emailInput').value = ''
  document.querySelector('form').reset()
}

function addNewInstructor(firstName, lastName, email, node){
  let trElement = document.createElement('tr')
  addProfileHandler(trElement)
  node.appendChild(trElement)
  trElement.id = 'row-4'

  let firstNameElement = document.createElement('td')
  let lastNameElement = document.createElement('td')
  let emailElement = document.createElement('td')
  addEmailHandler(emailElement)

  trElement.appendChild(firstNameElement)
  trElement.appendChild(lastNameElement)
  trElement.appendChild(emailElement)

  firstNameElement.innerText = firstName
  lastNameElement.innerText = lastName
  emailElement.innerText = email
}

function addNewInstructor2(firstName, lastName, email, node){
  let string = `<tr id="row-4">
          <td class="firstName">${firstName}</td>
          <td class="lastName">${lastName}</td>
          <td class="email">${email}</td>
        </tr>`
  node.innerHTML += string
    //add addEventListener for all missing nodes

}
