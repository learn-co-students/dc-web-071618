document.addEventListener('DOMContentLoaded', function(){
  tableElement = document.querySelector('#table-body')
  addNewInstructor2('Jane', 'Doe', 'jane@flatiron.com', tableElement)
})

//append a new instructor to the DOM
function addNewInstructor(firstName, lastName, email, node){
  //add new row
  let trElement = document.createElement('tr')
  node.appendChild(trElement)
  trElement.id = 'row-4'

  let firstNameElement = document.createElement('td')
  let lastNameElement = document.createElement('td')
  let emailElement = document.createElement('td')

  trElement.appendChild(firstNameElement)
  trElement.appendChild(lastNameElement)
  trElement.appendChild(emailElement)

  firstNameElement.innerText = firstName
  lastNameElement.innerText = lastName
  emailElement.innerText = email
  // debugger
}

function addNewInstructor2(firstName, lastName, email, node){
  debugger
  let string = `<tr id="row-4">
          <td class="firstName">${firstName}</td>
          <td class="lastName">${lastName}</td>
          <td class="email">${email}</td>
        </tr>`

  node.innerHTML += string
}
