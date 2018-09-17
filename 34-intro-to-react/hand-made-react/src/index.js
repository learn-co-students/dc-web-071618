const text = "Hello, this is a React Element";
const secondText = "What a world, with elements";
const title = "This is our page";

const Page = children =>
  React.createElement("div", { className: "ui container" }, children);

const Header = React.createElement("h1", {}, title);

// console.log("Header", Header);

const Article = text =>
  React.createElement("p", { className: "ui card" }, text);

// console.log(Page([Header, Article(text), Article(secondText)]));

ReactDOM.render(
  Page([Header, Article(text), Article(secondText)]),
  document.querySelector("#main")
);
