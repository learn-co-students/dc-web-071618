// const text = "Hello, this is a React Element";
// const secondText = "What a world, with elements";
// const title = "This is our page";

// const Page = children =>
// React.createElement("div", { className: "ui container" }, children);

// const Header = React.createElement("h1", {}, title);

// console.log("Header", Header);

// const Article = text =>
// React.createElement("p", { className: "ui card" }, text);

// console.log(Page([Header, Article(text), Article(secondText)]));

// Page([Header, Article(text), Article(secondText)]),

{
  /* <div class="ui inverted orange menu">
  <a class='item'>
    <h2 class="ui header">
      <i class="paw icon"></i>
      <div class="content">
        ZooKeepr
      </div>
      <div class="sub header">
        Keep track of your animals
      </div>
    </h2>
  </a>
</div> */
}

const Navbar = props => {
  return React.createElement(
    "div",
    { className: `ui inverted ${props.color} menu` },
    [
      React.createElement("a", { className: "item" }, [
        React.createElement("h2", { className: "ui header" }, [
          React.createElement("i", { className: `${props.icon} icon` }, []),
          React.createElement("div", { className: "content" }, [props.title]),
          React.createElement("div", { className: "sub header" }, [
            props.description
          ])
        ])
      ])
    ]
  );
};

ReactDOM.render(
  Navbar({
    title: "Paintr",
    icon: "paint brush",
    color: "teal",
    description: "keep track of your paintings"
  }),
  document.querySelector("#main")
);
