import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import DropDown from "../Dropdown/Dropdown";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [isDropDownOpen] = useState(false);

  useEffect(() => {
    console.log("Navbar component is mounted");
  });

  useEffect(() => {
    console.log("Navbar component is updated");
  });

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>E-commerce</p>
      </div>
      <DropDown isOpen={isDropDownOpen} />
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Sign Up</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
