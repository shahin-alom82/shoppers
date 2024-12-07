import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/RootLayout/Root.jsx'
import Home from './components/RootLayout/Home.jsx'
import ProductDetails from './components/productDetails/ProductDetails.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/details/:id",
      element: <ProductDetails />
    }
  ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
