//pseudo codinging solution

//When clicking on Edit, (make a fetch to ingredients?) changes the ice cream card to be a form
//On Submit, make a PATCH request, rerender the ice cream card
//On click of delete, make a DELETE request, remove that ice cream card form DOM
//On load of the page, GET fetch, to see the ingredients
//On load of the page, GET fetch, to see the ice creams
//On click on Create Ice Cream, POST fetch, rendering to the DOM

document.addEventListener('DOMContentLoaded', function(){
  getAndRenderIngredientOntoForm()
  getAndRenderIceCreamOntoDOM()
  //select <button id="create">Create Ice Cream!</button>
  //and .addEventListener('submit/click', createNewIceCream)
})

function createNewIceCream(event){
  //grab data from the iceCreamForm
  //document.querySelector
  //let newIceCreamName = document.querySelector the text in the form
  //let arry = []
  //document.querySelector('ul'), iterate through {
    //if the li is checked, grab the id off that dom element
    //ingredient-${id}
    //split it ('-')
    //parse the string to a number
    //push that into the arry
  //}
  //let iceCreamObj = {"name": newIceCreamName, "ingredients": array}
  //fetch(`http://localhost:3000/ice_cream`, {
    //method: "POST,
    // headers:
    //body: JSON.stringify(iceCreamObj)
//}).then()
//  .then(data => {
  //renderIceCream(data)
//})
}

function getAndRenderIceCreamOntoDOM(){
  //fetch(http://localhost:3000/ice_cream)
  //.then()
  //.then(data => {
  /* data = [
      {
      name: "Rocky Sidewalk!",
      ingredients: [
      "1",
      "2",
      "3",
      "4",
      "5"
      ],
      id: 2
      }
    ]
    data.forEach(iceCream => {
    //render the iceCream to the DOM
    //renderIceCream(iceCream)
  })
  */
  //})
//}

function deleteIceCream(event){
  //event.target.id id oging to be delete-4
  //let id = event.target.id.split()[1]
  //fetch(`http://localhost:3000/ice_cream/${id}`, {
  //  method: "DELETE"
  //})
  //.then()
  //.then(data => {
    //remove that ice cream card from the DOM
    //select('#ice-cream-${id}').remove()
  //})
}

function createEditForm(){
  //event.target.id id oging to be edit-4
  //let id = event.target.id.split()[1]
  //select <div id="ice-cream-${id}">
  //inner.HTML => to be a form
  //make sure this form has a <button>Submit</button>
  //on that button.addEventListener('click/submit', updateIceCream)
}

function updateIceCream(event){
  //let id = event.target.id.split()[1]
  //fetch(url/id)
  //.then
  //.then(data => {
    //remove the form, in its place, renderIceCream(data)
  //})
}

function renderIceCream(iceCream){
  //create something like
    /*
    <div id="ice-cream-${iceCream.id}">
        <h3>${iceCream.name}</h3>
        <img src="icecream.jpeg">
        <div id="editDeleteButtons">
          <button data-button-type="edit" class="editButton">Edit</button>
          <button id='delete-${iceCream.id}' class="deleteButton">Delete</button>
        </div>
        <h4>Ingredients:</h4>
        <ul id="ul-${id}">
        </ul>
      </div>*/

    //let deleteButton = select the HTML element with class='deleteButton' from above
    //deleteButton.addEventListener('click', deleteIceCream)

    //let editButton = select the HTML element with class='editButton' from above
    //editButton.addEventListener('click', createEditForm)

    //select the <ul>
    //let ingredients = iceCream.ingredients
    /*
    ingredients: [
    "1",
    "2",
    "3",
    "4",
    "5"
    ]
    */
    //forEach.ingredients(ingredientNumString => {
      //let ingredientString = querySelector(`#ingredient-${ingredientNumString}`).innerText
      //let li = document.create('li')
      //li.innerText = ingredientString
      //<ul>.appendChild(li)
    //})
}


function getAndRenderIngredientOntoForm(){
  //fetch(http://localhost:3000/ingredient).
  //.then(response => repsonse.json())
  //.then(data => {
      /*data = [
        {
        id: 1,
        name: "vanilla"
        },
        {
        id: 2,
        name: "chocolate"
        }
      ]*/
      //do something with our data
      //let ul = <ul id='iceCreamCheckboxes'>
      //data.forEach(ingredient => {
        //create an li, give it an id (ingredient-${id})
        // ul.appendChild(li)
      //})
  //})
}
