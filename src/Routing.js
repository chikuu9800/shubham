import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './modules/App'
import Home from './modules/Home'
import Projects from './modules/Projects'
import About from './modules/About'
import ContactMe from './modules/contact'

const appRouting = createBrowserRouter([
    {
        path:"",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<ContactMe/>
            },
            {
                path:"/projects",
                element:<Projects/>
            },
         
        ]
    }
])
export default appRouting