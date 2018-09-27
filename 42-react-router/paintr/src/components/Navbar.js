import React from "react";

// color
// title
// icon
// description

const Navbar = props => (
  <div className={`ui inverted ${props.color} menu`}>
    <a className="item">
      <h2 className="ui header">
        <i className={`${props.icon} icon`} />
        <div className="content">{props.title}</div>
        <div className="sub header">{props.description}</div>
      </h2>
    </a>
  </div>
);

export default Navbar;

// const Navbar = props => {
//   return React.createElement(
//     "div",
//     { className: `ui inverted ${props.color} menu` },
//     [
//       React.createElement("a", { className: "item" }, [
//         React.createElement("h2", { className: "ui header" }, [
//           React.createElement("i", { className: `${props.icon} icon` }, []),
//           React.createElement("div", { className: "content" }, [props.title]),
//           React.createElement("div", { className: "sub header" }, [
//             props.description
//           ])
//         ])
//       ])
//     ]
//   );
// };
