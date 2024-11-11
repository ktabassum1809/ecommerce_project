
import './App.css'

import { Routes,Route } from 'react-router-dom'

import React from 'react';

import LoginSignup from './components/Login/LoginSignup';
import ForgotPassword from './components/Login/ForgotPassword';
import ForgotEmail from './components/Login/ForgotEmail';
import SingleProduct from './components/Products/SingleProduct';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Hero from './components/Herosection/Hero';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout';





function App() {


  return (
    <>
   
   
   
    <Routes>
    <Route path="/" element={<Layout><Hero /></Layout>} />
    <Route path="/hero" element={<Layout><Hero /></Layout>} />
    <Route path="/products" element={<Layout><Products /></Layout>} />
    <Route path="/products/:id" element={<Layout><SingleProduct /></Layout>} />
    <Route path="/cart" element={<Layout><Cart /></Layout>} />
    <Route path="/login" element={<Layout><LoginSignup /></Layout>} />
    <Route path="/forgot-password" element={<Layout><ForgotPassword /></Layout>} />
    <Route path="/forgot-email" element={<Layout><ForgotEmail /></Layout>} />
    <Route path="*" element={<Layout><PageNotFound /></Layout>} />
  </Routes>
    
    
   
   
    </>
  )
}

export default App
