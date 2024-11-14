/* import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// Styled Components
const LoginSignupWrapper = styled.div`
  max-width: 500px;
  padding: 30px;
  margin: 80px auto;
  margin-top: 150px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #000, #333);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 760px) {
    max-width: 85%;
    padding: 20px;
    margin: 100px auto;
  }
  @media (max-width: 375px) {
    width: 100%;
    max-width: 320px;
    padding: 15px;
    margin: 100px auto;
  }
`;
const FormTitle = styled.h2`
  font-size: 34px;
  color: #eaa504;
  margin-bottom: 20px;
  @media (max-width: 760px) {
    font-size: 26px;
    margin-bottom: 18px;
  }
  @media (max-width: 375px) {
    font-size: 22px;
    margin-bottom: 16px;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%; 
  margin-top: 10px;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 40px 12px 12px;
  border: 2px solid white;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s;
  &:focus {
    border-color: red;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
  &:focus {
    outline: 1px solid #edc561;
    background-color: white;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    padding: 10px 35px 10px 10px;
  }
`;
const TogglePasswordIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #555;
`;
const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: rgb(237, 197, 97);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
  box-sizing: border-box;
  &:hover {
    background-color: white;
    color: rgb(237, 197, 97);
    border-color: red;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    padding: 10px;
    margin-top: 15px;
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ForgotLink = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: red;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #357abd;
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
const P = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #eec661;
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
// Component
const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && formValues.password !== formValues.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    navigate("/");
    console.log(isLogin ? "Logging in..." : "Registering...", formValues);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <LoginSignupWrapper>
      <FormTitle>{isLogin ? "Login" : "Signup"}</FormTitle>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleInputChange}
            required
          />
        </InputWrapper>
        {!isLogin && (
          <>
            <InputWrapper>
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formValues.fullName}
                onChange={handleInputChange}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleInputChange}
                required
              />
            </InputWrapper>
          </>
        )}
        <InputWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleInputChange}
            required
          />
          <TogglePasswordIcon onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </TogglePasswordIcon>
        </InputWrapper>
        {!isLogin && (
          <InputWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <TogglePasswordIcon onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </TogglePasswordIcon>
          </InputWrapper>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit">{isLogin ? "Login" : "Signup"}</Button>
      </Form>
      <ForgotLink onClick={() => navigate("/forgot-password")}>
        Forgot Password?
      </ForgotLink>
      <ForgotLink onClick={() => navigate("/forgot-email")}>
        Forgot Email?
      </ForgotLink>
      <P>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={toggleForm}
          style={{
            color: "#EEC661",
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {isLogin ? " Sign up" : " Log in"}
        </button>
      </P>
      <p
        onClick={handleSubmit}
        style={{
          color: "#EEC661",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        Back to the Home
      </p>
    </LoginSignupWrapper>
  );
};
export default LoginSignup;
 */

import { useReducer, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// Styled Components
const LoginSignupWrapper = styled.div`
  max-width: 500px;
  padding: 30px;
  margin: 80px auto;
  border-radius: 15px;
  box-shadow: 0 0 25px rgba(255, 223, 0, 0.4);
  background: linear-gradient(135deg, #000, #333);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 760px) {
    max-width: 85%;
    padding: 20px;
    margin: 100px auto;
  }
  @media (max-width: 375px) {
    width: 100%;
    max-width: 320px;
    padding: 15px;
    margin: 100px auto;
  }
`;
const FormTitle = styled.h2`
  font-size: 34px;
  color: #EAA504;
  margin-bottom: 20px;
  @media (max-width: 760px) {
    font-size: 26px;
    margin-bottom: 18px;
  }
  @media (max-width: 375px) {
    font-size: 22px;
    margin-bottom: 16px;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 40px 12px 12px;
  border: 2px solid white;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s;
  &:focus {
    border-color: red;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
  &:hover {
    border-color: #EDC561;
    background-color: #EDC561;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    padding: 10px 35px 10px 10px;
  }
`;
const TogglePasswordIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #555;
`;
const CheckboxWrapper = styled.div`
  margin-top: 10px;
  text-align: left;
  color: #EEC661;
`;
const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: rgb(237, 197, 97);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
  box-sizing: border-box;
  &:hover {
    background-color: white;
    color: rgb(237, 197, 97);
    border-color: red;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    padding: 10px;
    margin-top: 15px;
  }
`;
const ForgotLink = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: red;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #357ABD;
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
const P = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #EEC661;
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
// Reducer setup
const initialState = {
  isLogin: true,
  showPassword: false,
  formValues: {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    rememberMe: false,
  },
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FORM":
      return {
        ...state,
        isLogin: !state.isLogin,
        error: "",
      };
    case "TOGGLE_PASSWORD_VISIBILITY":
      return {
        ...state,
        showPassword: !state.showPassword,
      };
    case "SET_FORM_VALUE":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.field]: action.value,
        },
      };
    case "SET_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};
//  functions for validation checks
const isValidEmail = (email) => email.includes("@") && email.includes(".");
const isValidPassword = (password) =>
  password.length >= 8 &&
  /[A-Z]/.test(password) &&
  /[a-z]/.test(password) &&
  /\d/.test(password);
const LoginSignup = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (state.error) {
      const timer = setTimeout(
        () => dispatch({ type: "SET_ERROR", error: "" }),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [state.error]);
  const handleInputChange = (e) => {
    dispatch({
      type: "SET_FORM_VALUE",
      field: e.target.name,
      value: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.isLogin) {
      if (!isValidEmail(state.formValues.email)) {
        dispatch({ type: "SET_ERROR", error: "Invalid email format." });
        return;
      }
      if (!isValidPassword(state.formValues.password)) {
        dispatch({
          type: "SET_ERROR",
          error:
            "Password must be 8 characters, include uppercase, lowercase, and a number.",
        });
        return;
      }
      if (state.formValues.password !== state.formValues.confirmPassword) {
        dispatch({ type: "SET_ERROR", error: "Passwords do not match!" });
        return;
      }
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };
  return (
    <LoginSignupWrapper>
      <FormTitle>{state.isLogin ? "Login" : "Signup"}</FormTitle>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={state.formValues.username}
            onChange={handleInputChange}
            required
          />
        </InputWrapper>
        {!state.isLogin && (
          <>
            <InputWrapper>
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={state.formValues.fullName}
                onChange={handleInputChange}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={state.formValues.email}
                onChange={handleInputChange}
                required
              />
            </InputWrapper>
          </>
        )}
        <InputWrapper>
          <Input
            type={state.showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={state.formValues.password}
            onChange={handleInputChange}
            required
          />
          <TogglePasswordIcon
            onClick={() => dispatch({ type: "TOGGLE_PASSWORD_VISIBILITY" })}
          >
            {state.showPassword ? <FaEyeSlash /> : <FaEye />}
          </TogglePasswordIcon>
        </InputWrapper>
        {!state.isLogin && (
          <InputWrapper>
            <Input
              type={state.showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={state.formValues.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <TogglePasswordIcon
              onClick={() => dispatch({ type: "TOGGLE_PASSWORD_VISIBILITY" })}
            >
              {state.showPassword ? <FaEyeSlash /> : <FaEye />}
            </TogglePasswordIcon>
          </InputWrapper>
        )}
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        <CheckboxWrapper>
          <input
            type="checkbox"
            name="rememberMe"
            checked={state.formValues.rememberMe}
            onChange={(e) =>
              dispatch({
                type: "SET_FORM_VALUE",
                field: "rememberMe",
                value: e.target.checked,
              })
            }
          />
          <label htmlFor="rememberMe"> Remember Me</label>
        </CheckboxWrapper>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Processing..." : state.isLogin ? "Login" : "Signup"}
        </Button>
        <ForgotLink onClick={() => navigate("/forgot-password")}>
          Forgot Password?
        </ForgotLink>
        <ForgotLink onClick={() => navigate("/forgot-email")}>
          Forgot Email?
        </ForgotLink>
        <ForgotLink onClick={() => navigate("/")}>
          Go Back to Home
        </ForgotLink>
        <P>
          {state.isLogin
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            onClick={() => dispatch({ type: "TOGGLE_FORM" })}
            style={{
              color: "#EEC661",
              cursor: "pointer",
              background: "none",
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {state.isLogin ? " Sign up" : " Log in"}
          </button>
        </P>
      </form>
    </LoginSignupWrapper>
  );
};
export default LoginSignup;