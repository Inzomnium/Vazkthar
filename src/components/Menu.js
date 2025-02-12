import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: 'Press Start 2P', cursive;
  position:absolute;
  z-index:9;
`;

const MenuButton = styled.button`
  background-color: #202020;
  color: #FFFFFF;
  padding: 1rem 2rem;
  border: 2px solid #FFFFFF;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.2s ease;
   font-family: 'Press Start 2P', cursive;

  &:hover {
    background-color: #303030;
    transform: scale(1.05);
  }
`;

const MenuDropdown = styled.ul`
  position: absolute;
  background-color: #202020;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 220px;
  z-index: 1000;
  top: 100%;
  left: 0;

  li {
    padding: 1rem;
    cursor: pointer;
    border-bottom: 1px solid #FFFFFF;
    transition: background-color 0.3s ease;
    position: relative;
     list-style: none;


    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color:rgb(34, 47, 233);
    }

    a {
      color: #FFFFFF;
      text-decoration: none;
      display: block;

      em {
          font-size: 0.5em;
          font-style: normal;
          padding: 0.4em;
          background: grey;
          position: absolute;
          bottom: 0;
          right: 0;
            }
    }
    
    /* Submenú */
    ul {
      display: none;
      position: absolute;
      padding:0;
      top: 0;
      left: 100%;
      background-color: #202020;
      border: 2px solid #FFFFFF;
      width: 200px;

      li {
        padding: 1rem;
        border-bottom: 1px solid #FFFFFF;
        position:relative
        
        

        &:hover {
          background-color:rgb(34, 47, 233);
        }
      }
    }

    &:hover ul {
      display: block;
    }
  }
    @media (max-width: 480px) { 
    width:auto;
    ul {
    width:auto
    }
}
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <MenuButton onClick={toggleMenu}>Menu</MenuButton>
      {isOpen && (
        <MenuDropdown>
          <li>
            <span>Stories</span>
            <ul>
              <li><Link to="/texts/tales/druids">Druids <em>Unfinished</em></Link></li>
              <li><Link to="/texts/historias-cortas">-</Link></li>
              <li><Link to="/texts/historias-inconclusas">-</Link></li>
            </ul>
          </li>
          <li><Link to="/texts/poesia">Poetry</Link></li>
          <li><Link to="/texts/otros">Otros Textos</Link></li>
          <li><Link to="/">Home</Link></li>
        </MenuDropdown>
      )}
    </MenuContainer>
  );
};

export default Menu;
