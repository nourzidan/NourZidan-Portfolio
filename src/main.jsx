import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Education from './pages/Education.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',

//     element:<Home/>
//   },
//   {
//     path:'/About',

//     element:<About/>
//   },
//   {
//     path:'/Education',
//     element:<Education/>
//   },
//   {
//     path:'/Projects',
//     element:<Projects/>
//   },
//   {
//     path:'/Contact',
//     element:<Contact/>
//   }
// ])



createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <RouterProvider router={router}/>
    <App/> */}
   <App/>
  </StrictMode>,
)
