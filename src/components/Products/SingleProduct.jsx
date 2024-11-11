import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const ProductImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ProductTitle = styled.h1`
  font-size: 2em;
  margin: 0;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: #666;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
  color: #333;
  margin: 10px 0;
`;

const ProductInfo = styled.p`
  font-size: 0.9em;
  color: #333;
  margin: 5px 0;
`;

const ReviewContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.5s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  color: gold;
  font-size: 1.2em;
  margin-right: 5px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

function SingleProduct() {
  const { products, dispatch } = useContext(ProductContext);
  const { id } = useParams();

  const productId = parseInt(id, 10);

  const product = products.find((product) => product.id === productId);
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Star key={i}>&#9733;</Star>); // Filled star
      } else {
        stars.push(<Star key={i}>&#9734;</Star>); // Empty star
      }
    }
    return stars;
  };
  function handleAddButton(product) {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  }

  return (
    <ProductContainer>
      <ProductImage src={product.thumbnail} alt={product.title} />
      <ProductDetails>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice><BoldText>Price:</BoldText> ${product.price}</ProductPrice>
      <ProductInfo><BoldText>Category:</BoldText> {product.category}</ProductInfo>
      <ProductInfo><BoldText>Shipping Information:</BoldText> {product.shippingInformation}</ProductInfo>
      <ProductInfo><BoldText>Availability Status:</BoldText> {product.availabilityStatus}</ProductInfo>
      <ProductInfo><BoldText>Warranty Information:</BoldText> {product.warrantyInformation}</ProductInfo>
      <ProductInfo><BoldText>Return Policy:</BoldText> {product.returnPolicy}</ProductInfo>
      <ProductInfo><BoldText>Minimum Order Quantity:</BoldText> {product.minimumOrderQuantity}</ProductInfo>
      <ProductInfo><BoldText>Brand:</BoldText> {product.brand}</ProductInfo>
      <ProductInfo><BoldText>Quantity in Stock:</BoldText> {product.stock}</ProductInfo>
      <ProductInfo><BoldText>Weight:</BoldText> {product.weight}</ProductInfo>
        <ProductInfo><BoldText>Arrival Date:</BoldText> {new Date(product.meta.createdAt).toLocaleDateString()}</ProductInfo>
      <ProductInfo><BoldText>Product Dimensions:</BoldText></ProductInfo>
      {product.dimensions && (
        <div>
          <ProductInfo><BoldText>Height:</BoldText> {product.dimensions.height} cm</ProductInfo>
          <ProductInfo><BoldText>Depth:</BoldText> {product.dimensions.depth} cm</ProductInfo>
          <ProductInfo><BoldText>Width:</BoldText> {product.dimensions.width} cm</ProductInfo>
        </div>
      )}
      <ReviewContainer>
        {product.reviews ? (
          product.reviews.map((review, index) => (
            <ReviewBox key={index}>
              <StarRating>{renderStars(review.rating)}</StarRating>
              <p><BoldText>Reviewer Name:</BoldText> {review.reviewerName}</p>
              <p><BoldText>Reviewer Email:</BoldText> {review.reviewerEmail}</p>
              <p><BoldText>Comment:</BoldText> {review.comment}</p>
              <p><BoldText>Date:</BoldText> {new Date(review.date).toLocaleDateString()}</p>
            </ReviewBox>
          ))
        ) : (
          <p>No Reviews for this item</p>
        )}
      </ReviewContainer>
      </ProductDetails>
      <button onClick={() => handleAddButton(product)}>Add product</button>
    </ProductContainer>
  );
}

export default SingleProduct;
