const addBtn = document.querySelector("#new-toy-btn");
const toyForm = document.querySelector(".container");
const form = document.querySelector(".add-toy-form");
let addToy = false;

addBtn.addEventListener("click", () => {
  addToy = !addToy;
  if (addToy) {
    toyForm.style.display = "block";
    // addSubmitListener();
  } else {
    toyForm.style.display = "none";
  }
});

//post new toy and add to DOM
// get form data
const getFormData = () => {
  return {
    name: form.name.value,
    image: form.image.value,
    likes: 0
  };
};
// post to db
// render new toy alongside others
const postToy = toyData => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
      Accept: "Application/json"
    },
    body: JSON.stringify(toyData)
  };
  return fetch("http://localhost:3000/toys", options)
    .then(res => res.json())
    .then(json => {
      form.reset();
      createToyCards(json);
      //thx bruno!
      window.scrollTo(0, document.body.scrollHeight);
    });
};
// attach event listener to form
form.addEventListener("submit", e => {
  e.preventDefault();
  postToy(getFormData());
});

//fetch toys and add to DOM
const fetchToys = () => {
  fetch("http://localhost:3000/toys")
    .then(res => res.json())
    .then(json => {
      json.forEach(toy => {
        createToyCards(toy);
      });
      addLikeBtnListeners();
    });
};

const createToyCards = toy => {
  let collection = document.getElementById("toy-collection");
  let card = document.createElement("div");
  let img = document.createElement("img");
  let title = document.createElement("h2");
  let likes = document.createElement("p");
  let likeBtn = document.createElement("button");
  let likesCount = document.createElement("span");

  img.src = toy.image;
  title.innerText = toy.name;
  likes.innerText = "Likes: ";
  likesCount.id = `likes-${toy.id}`;
  likesCount.innerText = toy.likes;
  likeBtn.innerText = "👍";
  likeBtn.dataset.id = toy.id;
  likeBtn.className = "like";
  card.id = toy.id;
  card.className = "card";
  img.className = "toy-avatar";

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(likes);
  card.appendChild(likesCount);
  card.appendChild(likeBtn);

  collection.appendChild(card);
};
//add event listener to each toy's like button
const addLikeBtnListeners = () => {
  let btnArray = Array.from(document.querySelectorAll(".like"));
  btnArray.forEach(btn =>
    btn.addEventListener("click", e => {
      let count = document.getElementById(`likes-${e.target.dataset.id}`)
        .innerText;
      let id = e.target.dataset.id;
      patchLikes(count, id);
    })
  );
};

//dispatch a patch request updating its 'likes' attribute to 'likes + 1'
const patchLikes = (likesCount, toyId) => {
  // console.log("patching", likesCount, toyId);
  let url = `http://localhost:3000/toys/${toyId}`;
  let options = {
    method: "PATCH",
    headers: {
      "Content-type": "Application/json",
      Accept: "Application/json"
    },
    body: JSON.stringify({ likes: parseInt(likesCount) + 1 })
  };
  fetch(url, options)
    .then(res => res.json())
    .then(toy => updateLikesOnDom(toy));
};

const updateLikesOnDom = toy => {
  let likeCount = document.getElementById(`likes-${toy.id}`);
  likeCount.innerText = toy.likes;
};

const init = () => {
  fetchToys();
};
document.addEventListener("DOMContentLoaded", init);
