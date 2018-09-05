const addBtn = document.querySelector("#new-toy-btn");
const toyForm = document.querySelector(".container");
const form = document.querySelector(".add-toy-form");
const collection = document.querySelector("#toy-collection");
let addToy = false;

addBtn.addEventListener("click", () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyForm.style.display = "block";
    // submit listener here
  } else {
    toyForm.style.display = "none";
  }
});
//update likes on a toy
//when a toy's like button is clicked
//send a patch request to that toy in DB, increment 'likes' by 1
//reflect new likes value on the DOM

function addLikeBtnListeners() {}

//add event listener to form, listen for submit
//make post request to /toys
//data???
//get data from form values!
//render new toy on DOM

function addSubmitListener() {
  form.addEventListener("submit", event => {
    event.preventDefault();
    postNewToy(event);
    window.scrollTo(0, document.body.scrollHeight);
  });
}

function postNewToy(event) {
  let toyInfo = {
    name: event.target[0].value,
    image: event.target[1].value,
    likes: 0
  };
  console.log("event from inside postNewToy", event);
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(toyInfo)
  })
    .then(res => res.json())
    .then(json => addToysToDom(json));
}

function fetchToys() {
  fetch("http://localhost:3000/toys")
    .then(res => res.json())
    .then(json => json.forEach(toy => addToysToDom(toy)));
}

function addToysToDom(toy) {
  let div = document.createElement("div");
  let name = document.createElement("h2");
  let img = document.createElement("img");
  let likes = document.createElement("p");
  let likeBtn = document.createElement("button");

  div.className = "card";
  img.className = "toy-avatar";
  name.innerText = toy.name;
  img.src = toy.image;
  likes.innerText = toy.likes;
  likes.id = `likes-${toy.id}`;
  likeBtn.innerText = "like";
  likeBtn.className = "like-me";
  likeBtn.id = `toy-${toy.id}`;
  likeBtn.addEventListener("click", () => {
    // debugger;
    updateLikes(likeBtn.id);
  });

  div.appendChild(name);
  div.appendChild(img);
  div.appendChild(likeBtn);
  div.appendChild(likes);
  collection.append(div);
}

// function addLikeListener() {
//   let btnArr = Array.from(document.querySelectorAll(".like-me"));
//   btnArr.forEach(btn =>
//     btn.addEventListener("click", e => {
//       console.log("clicked", e.target.innerText);
//     })
//   );
// }
//
function updateLikes(toyId) {
  let toyIdNumber = toyId.split("-")[1];
  let likeCount = document.querySelector(`#likes-${toyIdNumber}`).innerText;
  fetch(`http://localhost:3000/toys/${toyIdNumber}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ likes: parseInt(likeCount) + 1 })
  })
    .then(res => res.json())
    .then(toy => updateLikesOnDom(toy));
}

function updateLikesOnDom(toy) {
  const likeCount = document.querySelector(`#likes-${toy.id}`);
  likeCount.innerText = parseInt(likeCount.innerText) + 1;

  console.log(likeCount);
}

function init() {
  fetchToys();
  addSubmitListener();
}

document.addEventListener("DOMContentLoaded", init);
