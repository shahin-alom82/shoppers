import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import ProductDetails from './components/productDetails/ProductDetails.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import RootLayout from './components/layout/RootLayout.jsx'
import Home from './components/layout/Home.jsx'


const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/details/:id",
      element: <ProductDetails />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
