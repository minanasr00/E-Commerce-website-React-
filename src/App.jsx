import './fonts.css';
import { useState } from 'react'
// import PageNotFound from './components/PageNotFound';
import './App.css'
import Register from './components/Register'
// import Login from './components/Login'



import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
// import AboutSection from'./components/AboutPage.jsx'
// import ProductDetails from'./components/ProductDetails.jsx'
function App() {
  useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>
  )
 

}

export default App
