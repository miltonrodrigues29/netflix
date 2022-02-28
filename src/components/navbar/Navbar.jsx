import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
            className="img"
          ></img>
          <span>Home Page</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon"></Search>
          <span>Children</span>
          <Notifications className="icon"></Notifications>
          <img
            src="https://avatars.githubusercontent.com/u/56884655?s=400&u=ad79cca06cc501dd2ef0e17895bf272d0e53f35d&v=4"
            alt=""
          ></img>
          <div className="profile">
            <ArrowDropDown className="icon"></ArrowDropDown>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
