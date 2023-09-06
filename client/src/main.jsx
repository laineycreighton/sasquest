import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import Work from './components/pages/Work.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,

        //Add Error Page

        children: [

            //index: true
            //element: "REDIRECTED PAGE"

            //Add children for:
            //Login Page
            //Sign Up Page
            //Home Page
            //Project Page

        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)