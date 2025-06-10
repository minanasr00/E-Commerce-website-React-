import { useState } from 'react'
import PageNotFound from './components/PageNotFound/PageNotFound';
import './App.css'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

import './App.css'
// import AboutSection from'./components/AboutPage.jsx'
// import ProductDetails from'./components/ProductDetails.jsx'
// import Register from './components/Register';
// import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';


function App() {
  useState(0)

  return (
   <>
   <div className='w-full h-screen bg'>
    <Register/>
   </div>
   </>
   )


}

export default App;
