import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';

const router=createBrowserRouter([
  {
    path:'/',

    element:<Home/>
  },
  {
    path:'/About',

    element:<About/>
  },
  {
    path:'/Education',
    element:<Education/>
  },
  {
    path:'/Projects',
    element:<Projects/>
  },
  { path: '/Projects/:id', element:<ProjectDetails/> },
  {
    path:'/Contact',
    element:<Contact/>
  }
])

export const ThemeContext = createContext();

function App() {


const[mode,setmood]=useState('dark')

  return (
    <>
    <ThemeContext.Provider value={{mode,setmood}}>
      

      <RouterProvider  router={router}/>
    
      </ThemeContext.Provider>
      
    </>
  )
}

export default App
