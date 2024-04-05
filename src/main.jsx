import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import CharacterGrid from './components/character-grid/characterGrid.jsx'
import CharacterDetails from './components/character-details/CharacterDetails.jsx'
import HomePage from './components/home-page/HomePage.jsx';
import FavsPage from './components/favs-page/FavsPage.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "characters",
                element: <CharacterGrid />,
            },
            {
                path: "characters/:id",
                element: <CharacterDetails />
            },
            {
                path: "characters/favs",
                element: <FavsPage />
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>,
)
