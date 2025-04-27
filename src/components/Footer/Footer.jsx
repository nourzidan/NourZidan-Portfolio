import { useContext } from 'react';
import './Footer.css'
import { ThemeContext } from '../../App';

export default function Footer() {

    const { mode, setmood } = useContext(ThemeContext);

  return (
    <footer className={`footer-div ${mode}footer`}>
        <div className='container-footer'>
        <div className='copyright-div'>
        &copy; {new Date().getFullYear()} . All Rights Reserved.
        </div>
        <div className='dev-by-div'>Development By Nour Zidan.E</div>
        <div className='icon-div'><a href="https://www.linkedin.com/in/nour-eddin-zidan-aa7057243" target='_blank'><img src="/assets/linkedin.svg" alt="" /></a></div>
        </div>
       

    </footer>
  )
}
