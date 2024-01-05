import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRouter from './router/MainRouter'
import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={MainRouter}></RouterProvider>
  </React.StrictMode>,
)
