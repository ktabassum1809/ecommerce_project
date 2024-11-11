import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard';




const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid  white;
  color: white;
  font-size: 16px;
  border-radius: 12px;
  font-weight: 300;
  margin: 22px 0px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;
  background-color: grey;
${({ active }) =>
  active &&
  `
  background-color: black;
  `}

 

  &:hover {
    background-color: black;
    
  }

  @media screen and (max-width: 768px) {
  padding: 6px 8px;
  border-radius: 4px;
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: white;  
`;



function Products() {
  const [toggle, setToggle] = useState('all');
 
 
  return (
    <div>
   
    <div>
    <ToggleGroup>
    {toggle === "all" ? (
      <ToggleButton active value="all" onClick={() => setToggle("all")}>
        All
      </ToggleButton>
    ) : (
      <ToggleButton value="all" onClick={() => setToggle("all")}>
        All
      </ToggleButton>
    )}

    <Divider />
    {toggle === "furniture" ? (
      <ToggleButton
        active
        value="furnituret"
        onClick={() => setToggle("furniture")}
      >
        FURNITURE
      </ToggleButton>
    ) : (
      <ToggleButton
        value="furniture"
        onClick={() => setToggle("furniture")}
      >
        FURNITURE
      </ToggleButton>
    )}

    <Divider />
    {toggle === "fragrances" ? (
      <ToggleButton
        active
        value="fragrances"
        onClick={() => setToggle("fragrances")}
      >
      FRAGRANCE
      </ToggleButton>
    ) : (
      <ToggleButton value="fragrances" onClick={() => setToggle("fragrances")}>
      FRAGRANCE
      </ToggleButton>
    )}
    <Divider />
    {toggle === "groceries" ? (
      <ToggleButton
        active
        value="groceries"
        onClick={() => setToggle("groceries")}
      >
     GROCERIES
      </ToggleButton>
    ) : (
      <ToggleButton value="groceries" onClick={() => setToggle("groceries")}>
     GROCERIES
      </ToggleButton>
    )}
    <Divider />
    {toggle === "home-decoration" ? (
      <ToggleButton
        active
        value="home-decoration"
        onClick={() => setToggle("home-decoration")}
      >
      HOME DECORATION
      </ToggleButton>
    ) : (
      <ToggleButton value="home-decoration " onClick={() => setToggle("home-decoration")}>
      HOME DECORATION
      </ToggleButton>
    )}
  </ToggleGroup>
  
  </div>
  <ProductCard toggle={toggle} />
    </div>
  )
}

export default Products