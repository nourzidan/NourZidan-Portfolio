import React, { useContext } from 'react'
import './Hero.css'
import { ThemeContext } from '../../App';

export default function Hero() {

  const { mode, setmood } = useContext(ThemeContext);

  return (
    <section className={`hero-section${mode}`}>
<div className='contant-div'>
    <div className='continer'>
        <div className='text-div'>
          <img className='bgimg' src='/assets/Dark Blur Gradient (1)-DcTKs0SK.png' alt="" />
        
<h1>HEY!<span className='fir-p'> I’m Nour,
</span>
<p>Full-Stack Developer</p> </h1>

<p className='sec-p'>Agency-quality Webflow websites </p>
<p className='sec-p'>with the personal touch of a freelancer.</p>
<a className='cv-btn' target='blank' href='https://drive.google.com/file/d/15P9xVNje_m3GkaLvnxbkniW9CqC0UExc/view?usp=sharing' >Download Cv</a>
</div>
        <div className='myimg-div'>
          <img className='squer' src="/assets/squers  - option 1.svg" alt="" />
          <img className='myimg' src="/assets/removebg-preview.png" alt="" /></div>
    </div>
</div>
    </section>
  )
}
