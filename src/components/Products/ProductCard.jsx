import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { useContext } from "react";

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  margin-top:0px;
`;

const Product = styled.div`
  border: 1px solid  #FFD700;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   background-color: #fff;
     transition: transform 0.3s ease, box-shadow 0.3s ease;
  
     &:hover {
   transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

   @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
    `;


const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
  color: #C19A6B; 
`;

const ProductPrice = styled.p`
  font-size: 1em;
  color: #333;
   font-family: 'Georgia', serif; /* Luxurious serif font */
  margin: 10px 0;
`;
const SortSelect = styled.select`
 padding: 8px;
  border-radius: 4px;
  border: 1px solid #FFD700;
  background-color: #fff;
  font-size: 1em;
  color: #333;
  margin: 20px 0; /* Add spacing around the dropdown */

  @media (max-width: 768px) {
    margin: 10px 0 20px;
  }
`;

const ViewButton = styled.button`
   background: linear-gradient(145deg, #8B4513, #A0522D);
  color: #f5f5f5;
   border: 1px solid #FFD700;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(145deg, #A0522D, #8B4513);
  }
`;

function ProductCard({ toggle }) {
  const { products, setProducts, dispatch } = useContext(ProductContext);

  const navigate = useNavigate();

  useEffect(() => {
    let url = "https://dummyjson.com/products?limit=100";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.error("Network response was not ok");
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [setProducts]);

  function handleSortPrice() {
    const sortedProduct = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProduct);
  }

  function handleSortTitle() {
    const sortedProduct = [...products].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setProducts(sortedProduct);
  }

  function handleSortChange(e) {
    if (e.target.value === "price") {
      handleSortPrice();
    } else if (e.target.value === "title") {
      handleSortTitle();
    }
  }

  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
    <SortSelect onChange={handleSortChange}>
      <option value="default">Select sorting options</option>
      <option value="price">Sort by Price</option>
      <option value="title">Sort by Title</option>
    </SortSelect>
  </div>

      <ProductContainer>
        {products.slice(0,80)
          .filter((product) => toggle === "all" || product.category === toggle)
          .map((product) => (
            <Product key={product.id}>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>${product.price}</ProductPrice>
              <ProductImage src={product.thumbnail} alt={product.title} />

              <ViewButton onClick={() => navigate(`/products/${product.id}`)}>
                View Product
              </ViewButton>
            </Product>
          ))}
      </ProductContainer>
    </>
  );
}

export default ProductCard;
