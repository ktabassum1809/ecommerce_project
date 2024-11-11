import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  max-width: 400px;
  padding: 30px;
  margin: 100px auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
`;
const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4A90E2;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: #357ABD;
  }
`;
const ForgotEmail = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Check your phone for a recovery email.");
    setTimeout(() => {
        navigate("/login");
    }, 5000);
    return () => {
      clearTimeout();
    };
  
    
  };
  return (
    <Wrapper>
      <h2>Forgot Email</h2>
      <p>Enter your phone number to recover your email address.</p>
      <form onSubmit={handleSubmit}>
        <Input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <Button type="submit">Recover Email</Button>
      </form>
      {message && <p>{message}</p>}
    </Wrapper>
  );
};
export default ForgotEmail;