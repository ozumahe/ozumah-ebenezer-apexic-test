import React, { useState } from "react";
import "../styles/nav.scss";
import {
  Hamburger,
  Logo,
  NotificationIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from "./SVGS";
import { useDispatch } from "react-redux";
import { searchProducts } from "../global/redux-functionality/slices/productsSlice";
import { AppDispatch } from "../global/redux-functionality";

function Nav() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    dispatch(searchProducts(searchValue));
  };

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
            <input
              value={searchValue}
              onChange={handleChange}
              name="search"
              type="text"
              placeholder="Search"
            />
          </div>
          <button onClick={handleSearch}>Search</button>
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
