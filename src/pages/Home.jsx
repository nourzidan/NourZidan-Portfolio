import Abouthero from "../components/Abouthero/Abouthero";
import Eduhero from "../components/Eduhero/Eduhero";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import Projecthero from "../components/Projecthero/Projecthero";
import Risk from "../components/Risk/Risk";
import Contact from "./Contact";



export default function Home() {
  return (
    <>
    
    
    <NavBar/>
    <Hero/>
    <Abouthero/>
    <Eduhero/>
    <Risk/>
    <Projecthero/>
    <Contact/>
    <Footer/>
  
        </>
  )
}
