import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';


export default function AuthGard({children}) {
  const { token } = useAuth();
  return (
    <>
      {token ? <Navigate to="/" /> : children }
    </>
  )
}
