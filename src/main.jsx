import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import ProductDetails from './components/productDetails/ProductDetails.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import RootLayout from './components/layout/RootLayout.jsx'
import Home from './components/layout/Home.jsx'
import Product from './components/cart/Product.jsx'
import FoodGrocery from './components/ProductMenu/FoodGrocery.jsx'
import SkinCare from './components/ProductMenu/SkinCare.jsx'
import BabyFormula from './components/ProductMenu/BabyFormula.jsx'
import DairyEggs from './components/ProductMenu/DairyEggs.jsx'
import PersonalCare from './components/ProductMenu/PersonalCare.jsx'
import OrganicFood from './components/ProductMenu/OrganicFood.jsx'
import Electric from './components/ProductMenu/Electric.jsx'
import AllProducts from './components/ProductMenu/AllProducts.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'


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
    },
    {
      path: "/cart",
      element: <Product />
    },
    {
      path: "/all",
      element: <AllProducts />
    },
    {
      path: "/foodgrocery",
      element: <FoodGrocery />
    },
    {
      path: "/skincare",
      element: <SkinCare />
    },
    {
      path: "/babyformula",
      element: <BabyFormula />
    },
    {
      path: "/dairyeggs",
      element: <DairyEggs />
    },
    {
      path: "/personalcare",
      element: <PersonalCare />
    },
    {
      path: "/organicfood",
      element: <OrganicFood />
    },
    {
      path: "/electric",
      element: <Electric />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },


  ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
