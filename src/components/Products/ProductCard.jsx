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
`;

const Product = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductTitle = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 1em;
  color: #333;
`;
const SortSelect = styled.select`
  position: absolute;
  top: 70px;
  right: 20px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 1em;
`;

function ProductCard({ toggle }) {
  const { products, setProducts, dispatch } = useContext(ProductContext);

  const navigate = useNavigate();

  useEffect(() => {
    let url = "https://dummyjson.com/products?limit=60";

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
      <SortSelect onChange={handleSortChange}>
        <option value="default" name="default">
          Select sorting options
        </option>
        <option value="price" name="price">
          Sort by Price
        </option>
        <option value="title" name="title">
          Sort by Title
        </option>
      </SortSelect>

      <ProductContainer>
        {products
          .filter((product) => toggle === "all" || product.category === toggle)
          .map((product) => (
            <Product key={product.id}>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductImage src={product.thumbnail} alt={product.title} />

              <button onClick={() => navigate(`/products/${product.id}`)}>
                View Product
              </button>
            </Product>
          ))}
      </ProductContainer>
    </>
  );
}

export default ProductCard;
