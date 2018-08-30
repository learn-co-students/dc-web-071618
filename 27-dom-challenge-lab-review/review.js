let count = 0;
const counter = document.getElementById("counter");
const up = document.getElementById("+");
const down = document.getElementById("-");
const like = document.getElementById("<3");
const likes = document.querySelector(".likes");
const pause = document.getElementById("pause");
const form = document.getElementById("comment-form");
const input = document.getElementById("comment-input");
const comments = document.getElementById("list");
let paused = false;
let likeTracker = {};

//start by setting up counter
//function to increment counter

//handle Comments
function getFormData() {
  return input.value;
}

function disableButtons() {
  // pause.addEventListener("click", () => {
  let btns = Array.from(document.querySelectorAll(".disable-me"));
  console.log(btns);
  btns.forEach(btn => {
    if (!paused) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });
  // });
}

function addSubmitListener() {
  form.addEventListener("submit", e => {
    // e.preventDefault();
    addCommentToDom(e);
    form.reset();
  });
}

function addCommentToDom(e) {
  e.preventDefault();
  let comment = document.createElement("li");
  comment.innerText = getFormData();
  comments.appendChild(comment);
}

function addButtonListeners() {
  up.addEventListener("click", incrementCount);
  down.addEventListener("click", decrementCount);
  like.addEventListener("click", handleLikes);
  pause.addEventListener("click", () => {
    pauseClock();
    disableButtons();
  });
  // pause.addEventListener("click");
}

//handle likes
function handleLikes() {
  if (!likeTracker[count]) {
    likeTracker[count] = 1;
    let li = document.createElement("li");
    li.innerText = `You have liked ${count} one time`;
    li.id = count;
    likes.appendChild(li);
  } else {
    likeTracker[count] += 1;
    let likedNum = document.getElementById(count);
    likedNum.innerText = `You have liked ${count} ${likeTracker[count]} times!`;
  }
}

//pause function
function pauseClock() {
  paused = !paused;
  if (paused) {
    pause.innerText = "resume";
  } else {
    pause.innerText = "pause";
  }
  console.log("Paused?", paused);
}

//clock functions
function tickingClock() {
  setInterval(incrementCount, 1000);
}

function incrementCount() {
  if (!paused) {
    count++;
    counter.innerText = count;
  }
}

function decrementCount() {
  count--;
  counter.innerText = count;
}

function init() {
  tickingClock();
  addButtonListeners();
  addSubmitListener();
  // disableButtons();
}

document.addEventListener("DOMContentLoaded", init);
