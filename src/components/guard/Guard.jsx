import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Guard({ children }) {
   const { token } = useAuth();
  return (
    <>
      {token ? children : <Navigate to="/login" />}
    </>
  )
}
