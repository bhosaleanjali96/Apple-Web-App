import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row nowrap;

  li {
    padding-top: 13px;
    padding-botton: 10px;
    padding-right: 32px;
    color: white;
    font-size: 12px;
    letter-spacing: -0.01em;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
      sans-serif;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    flex-flow: column nowrap;
    background-color: #121112;
    color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 2.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      padding-top: 20px;
    }
  }

  @media (max-width: 1240) and (min-width: 769px) {
    padding-right: 15px;
    color: white;
    font-size: 10px;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Store</li>
      <li>Mac</li>
      <li>iPad</li>
      <li>iPhone</li>
      <li>Airpods</li>
      <li>Watch</li>
      <li>Entertainment</li>
      <li>Accessories</li>
      <li>Support</li>
      <li>
        <i class="fa-solid fa-magnifying-glass"></i>
      </li>
      <li>
        <i class="fa fa-briefcase fa_custom"></i>
      </li>
    </Ul>
  );
};

export default RightNav;
