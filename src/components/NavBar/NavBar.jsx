// import React, { useContext } from 'react'
// import "./NavBar.css"
// import { NavLink } from 'react-router-dom'
// import { ThemeContext } from '../../App';

// export default function NavBar() {
  
  
//   const { mode, setmood } = useContext(ThemeContext);
  
 
  
  
//   return (
//     <nav className={`navbar${mode} `}
//     >
//         <div className='logo-div'><p className='name-p'>NOUR EDDIN <samp className='last'>ZIDAN</samp></p></div>
//         <div>
//             <ul>
//                 <li><NavLink to={'/'} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
//                 <li><NavLink to={'/About'} className={({ isActive }) => (isActive ? "active" : "")}>About me</NavLink ></li>
//                 <li><NavLink to={'/Education'} className={({ isActive }) => (isActive ? "active" : "")}>Education</NavLink ></li>
//                 <li><NavLink to={'/Projects'} className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink ></li>
//                 <li><NavLink to={'/Contact'} className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink ></li></ul>
//                 </div>

//         <div className='them-div'><img className='icon' onClick={() => setmood(mode === 'dark' ? 'light' : 'dark')} 
//         src={mode === 'dark' ?  "/assets/Sun_fill.svg" : "/assets/Vector.svg"} 
//         alt="Toggle theme"/>
//         </div>
//     </nav>
//   )
// }


import React, { useContext, useState } from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../App';

export default function NavBar() {
  const { mode, setmood } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${mode}`}>
        <div className='logo-div'>
          <p className='name-p'>NOUR EDDIN <span className='last'>ZIDAN</span></p>
        </div>

        {/* Desktop links (optional, can hide on mobile) */}
        <ul className='nav-desktop'>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/About" className={({ isActive }) => isActive ? "active" : ""}>About me</NavLink></li>
          <li><NavLink to="/Education" className={({ isActive }) => isActive ? "active" : ""}>Education</NavLink></li>
          <li><NavLink to="/Projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
          <li><NavLink to="/Contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>

        <div className='theme-menu-wrapper'>
          <img
            className='icon'
            onClick={() => setmood(mode === 'dark' ? 'light' : 'dark')}
            src={mode === 'dark' ? "/assets/Sun_fill.svg" : "/assets/Vector.svg"}
            alt="Toggle theme"
          />
          <button className='menu-btn' onClick={toggleMenu}>☰</button>
        </div>
      </nav>

      {/* Overlay */}
      <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={closeMenu}></div>

      {/* Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>✕</button>
        <ul>
          <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/About" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>About me</NavLink></li>
          <li><NavLink to="/Education" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Education</NavLink></li>
          <li><NavLink to="/Projects" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
          <li><NavLink to="/Contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>
      </div>
    </>
  );
}

