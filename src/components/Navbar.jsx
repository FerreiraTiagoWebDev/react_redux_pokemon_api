import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logoImage from "./logo.png";

const Nav = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;
const Logo = styled.img`
  background: transparent;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -20px;
  height: 150px;
  width: 250px;
`;

const Navbar = (props) => {
  return (
    <div className="">
      <Nav>
        <NavLink to={"/"}>
          <Logo src={logoImage} alt="logo_img" />
        </NavLink>
        <div className="nav-bar">
          {/* <NavLink to={"/wishlist"}>WishList</NavLink>
        <NavLink to={"/"}>Pokemon's Caught!</NavLink> */}
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;
