import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Home.css"
import Footer from './Footer';

const App = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default App
