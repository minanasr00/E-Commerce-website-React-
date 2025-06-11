import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import { Outlet } from 'react-router'

export default function Layout() {
    return <>
        <Navbar/>
        <Outlet />
    </>
}
