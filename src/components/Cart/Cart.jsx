import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`

const CartItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const ProductImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
`

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProductTitle = styled.h2`
  font-size: 1.2em;
  margin: 0;
`

const ProductDescription = styled.p`
  font-size: 0.9em;
  color: #666;
  margin: 5px 0;
`

const ProductReview = styled.p`
  font-size: 0.9em;
  color: #666;
  margin: 5px 0;
`

const ProductPrice = styled.p`
  font-size: 0.9em;
  color: #333;
  margin: 5px 0 0;
`

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  width: 100px;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #ff1a1a;
  }
`
const ProductQuantity = styled.p`
  font-size: 0.9em;
  color: #333;
  margin: 5px 0 0;
  
`
const ProductTotal = styled.p`
  font-size: 0.9em;
  color: #333;
  margin: 5px 0 0;
`
const TotalPrice = styled.p`
  font-size: 1.5em;
  color: #333;
  margin-top: 20px;
  font-weight: bold;
`

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }
`
const ButtonDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`

const QuantityInput = styled.input`
  width: 70px;
  padding: 2px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-size: 0.8em;
  color: #333;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`
function Cart() {
  const { state: cart, dispatch } = useContext(ProductContext)
 const navigate = useNavigate();


  if (!cart || cart.length === 0) {
    return <div>No products in the cart</div>
  }
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += (cart[i].price * cart[i].quantity);
  }
  console.log(total)

function handleQuantityChange(e, product) {
  if (e.target.value < 1) {
    return;
  }
  dispatch({ type: 'CHANGE_QUANTITY', payload: { id: product.id, quantity: e.target.value } });
}

  return (
    <CartContainer>
      <h1>Cart</h1>
      <CartItems>
        {cart.map((product) => (
          <CartItem key={product.id}>
            <ProductImage src={product.thumbnail} alt={product.title} />
            <ProductDetails>
              <ProductTitle>Name: {product.title}</ProductTitle>
              <ProductDescription>Description: {product.description}</ProductDescription>
            
              <ProductPrice>Price: ${product.price}</ProductPrice>
              <ProductQuantity>Quantity: {product.quantity}</ProductQuantity>
              <QuantityInput type="number"  name='quantity' value={product.quantity} onChange={(e)=>handleQuantityChange(e,product)} />
              <ProductTotal>Total Price: ${product.quantity * product.price}</ProductTotal>
             
              <RemoveButton onClick={() => dispatch({ type: 'REMOVE_PRODUCT', payload: product.id })}>
                Remove
              </RemoveButton>
            </ProductDetails>
          </CartItem>
          
        ))}

      </CartItems>
      <TotalPrice>Total: ${total}</TotalPrice>
      <ButtonDiv>
     <Button onClick={()=> navigate('/login')}>Checkout</Button>
     <Button onClick={()=> navigate('/products')}>Continue Shopping</Button>
     </ButtonDiv>
    </CartContainer>
  )
}

export default Cart