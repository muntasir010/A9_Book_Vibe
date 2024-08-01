import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root'
import ErrorPage from './Components/ErrorPage'
import Home from './Components/Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
