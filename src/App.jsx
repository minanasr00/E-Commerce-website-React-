import { useState } from 'react'
import PageNotFound from './components/PageNotFound';
import './App.css'
import Register from './components/Register'
import Login from './components/Login'

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

export default App
