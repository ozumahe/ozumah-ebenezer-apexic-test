import React from "react";
import "../styles/nav.scss";
import {
  Hamburger,
  Logo,
  NotificationIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from "./SVGS";

function Nav() {
  return (
    <div className="nav-container">
      <div className="left-container">
        <Logo />

        <button className="menu-button">
          <Hamburger />
        </button>
      </div>
      <div className="right-container">
        <div className="search-container">
          <div className="input-box">
            <div>
              <SearchIcon />
            </div>
            <input type="text" placeholder="Search" />
          </div>
          <button>Search</button>
        </div>
        <div className="menu">
          <button>
            <SettingsIcon />
          </button>

          <button>
            {/* This component accepts a prop named unread, which is used to determine whether the user has unread notifications. */}
            <NotificationIcon unread={true} />
          </button>
          <div className="user">
            <UserIcon />
            <p>Adriana Arias</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
