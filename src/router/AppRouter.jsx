import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/pages/LandingPage";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Tours from "../components/pages/Tours";
import Prices from "../components/pages/Prices";

const router = createBrowserRouter([
    {
        path: "/",
        element : <LandingPage/>,
        children :[
            {
                path:'/',
                element : <Home></Home>
            },
            {
                path:'/home',
                element : <Home></Home>
            },
            {
                path:'/about',
                element : <About></About>
            },
            {
                path:'/tours',
                element : <Tours></Tours>
            },
            {
                path:'/prices',
                element : <Prices/>
            }
        ]
    }
])

export default router;