import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import ViewInfo from './pages/ViewInfo.jsx';
import EditInfo from './pages/EditInfo.jsx';
import Timeline from './pages/Timeline.jsx';
import Wireframe from './pages/Wireframe.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/projects/:projectId/info',
                element: <ViewInfo />,
            },
            {
                path: '/projects/:projectId/info',
                element: <EditInfo />,
            },
            {
                path: '/projects/:projectId/timeline',
                element: <Timeline />,
            },
            {
                path: '/projects/:projectId/wireframe',
                element: <Wireframe />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)