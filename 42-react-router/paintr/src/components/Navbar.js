import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

// color
// title
// icon
// description

const Navbar = props => {
  console.log(props);
  return (
    <div className={`ui inverted ${props.color} menu`}>
      <Link to="/" className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </Link>
      <NavLink to="/about" activeClassName="active item" className="item">
        <h3 className="ui header">About</h3>
      </NavLink>
      <NavLink exact to="/" activeClassName="active item" className="item">
        <h3 className="ui header">Home</h3>
      </NavLink>
      <div className="item">{props.location.pathname}</div>
    </div>
  );
};

const NavBarWithRouter = withRouter(Navbar);

export default NavBarWithRouter;

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
