import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const ImgSlider = ({ images, onSelect, onMainImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    onSelect(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    onSelect(newIndex);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    onSelect(index);
  };

  const handleMainImageClick = () => {
    console.log(`Main image clicked: ${images[currentIndex]}`);
    onMainImageClick(); // Call the handler to show SingleProduct
  };

  return (
    <SliderContainer>
      <Title>Black Friday Special Offer!</Title>
      <StyledSlider>
        <SliderArrow onClick={handlePrevClick}>
          <FaChevronLeft />
        </SliderArrow>
        <ThumbnailContainer>
          {images.map((img, index) => (
            <StyledThumbnail
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              isActive={index === currentIndex}
            />
          ))}
        </ThumbnailContainer>
        <SliderArrow onClick={handleNextClick}>
          <FaChevronRight />
        </SliderArrow>
      </StyledSlider>

      <StyledMainImage
        src={images[currentIndex]}
        alt="Main Image"
        onClick={handleMainImageClick}
      />
    </SliderContainer>
  );
};

export default ImgSlider;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #2c2c2c;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  max-width: 100%; /* Ensure it doesn't exceed the viewport width */
  box-sizing: border-box;
`;
const Title = styled.h1`
  font-size: 2rem;
  color: #ffd700; /* Gold color */
  margin-bottom: 10px;
  text-align: center;
`;

const StyledSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  background-color: #333;
  border-radius: 8px;
  padding: 10px;
  border: 2px solid #ffd700;
`;
const ThumbnailContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  max-width: 100%;
  white-space: nowrap; /* Keep thumbnails in a single row */
  margin-bottom: 40px;
  padding: 2px 5px; /* Adjust padding for a cleaner look */

`;

const StyledMainImage = styled.img`
   width: 100%; /* Full width of the container */
  max-width: 300px; /* Limit the maximum width */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(255, 215, 0, 0.6);
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 250px; /* Reduce size for smaller screens */
  }
`;
const StyledThumbnail = styled.img`
 width: 60px; /* Adjust this as needed */
  height: 60px; /* Maintain square aspect ratio */
  object-fit: cover;
  border: 2px solid ${(props) => (props.isActive ? "#FFD700" : "transparent")};
  cursor: pointer;
  margin: 0 5px; /* Reduce spacing on smaller screens */
  border-radius: 5px;

  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    border-color: #ffd700;
  }
`;

const SliderArrow = styled.div`
  cursor: pointer;
  font-size: 2.5rem;
  color: #ffd700; /* Gold color */
  margin: 0 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #d4af37; /* Slightly darker gold on hover */
  }
`;
