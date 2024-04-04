import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Test from './components/test/Test.jsx'
import CharacterGrid from './components/character-grid/characterGrid.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharacterDetails from './components/character-details/CharacterDetails.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <CharacterGrid />
            },
            {
              path: "test",
              element: <Test />,
            },
            {
                path: "character/:id",
                element: <CharacterDetails />
            }
        ]
    },
    // {
    //     path: "/test",
    //     element: <Test />
    // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>,
)
