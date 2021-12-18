import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logoImage from "./logo.png";

const Nav = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
 
  a {
    margin-right: 50px;
    color: white;
    text-decoration: none;
  
  }
  &:before {
  content: '';
  position: absolute;
  background: #ff0000c3;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: blur(10px);
  z-index: -1;
}
`;
const Logo = styled.img`
background: transparent;
margin-left: 50%;
transform: translateX(-50%);
  z-index: 3;
  height: 10vh;
  width: 100px;
 
`;

const Navbar = (props) => {


  return (
    <div className="">
      <Nav>
        <Logo src={logoImage} alt="logo_img" />
        <div className="nav-bar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/wishlist"}>WishList</NavLink>
        <NavLink to={"/"}>Pokemon's Caught!</NavLink>
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;
