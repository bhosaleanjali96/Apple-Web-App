import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 44px;
  padding: 0 192px;
  display: flex;
  justify-content: center;
  background: #161617cc;
  

  .logo {
    padding: 5px 0;
  } 


  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    padding: 0 28px;

  }

  @media (max-width: 1240) and (min-width: 769px) {
    .logo {
      padding: 5px 0;
    } 
  }

 
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <i class="fab fa-apple"></i>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
