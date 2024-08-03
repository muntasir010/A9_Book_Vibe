import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root'
import ErrorPage from './Components/ErrorPage'
import Home from './Components/Home'
import BooksDetails from './Components/BooksDetails'
import { ToastContainer } from 'react-toastify'
import PageToRead from './Components/PageToRead'


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
      {
        path: '/book/:id',
        element: <BooksDetails/>,
        loader: ({params})=>fetch(`books.json/${params.id}`)
      },
      {
        path:'/pagesToRead',
        element: <PageToRead/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
   <ToastContainer/>
  </React.StrictMode>,
)
