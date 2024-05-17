import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";

const Navbar = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className="d-flex justify-content-between py-3 px-5 bg-secondary text-white">
      <Link to="/" className="navbar-brand fs-4 fw-bolder">
        Shop
      </Link>
      <Link
        to="/cart"
        className="navbar-link fs-5 text-white text-decoration-none"
      >
        <BsCart />{cart.length}
      </Link>
    </div>
  );
};

export default Navbar;
