import React, { useContext } from 'react'
import { ThemeContext } from '../../App'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Abouthero.css'


export default function Abouthero() {
    const { mode, setmood } = useContext(ThemeContext);
  return (
    <section className={`about-section${mode}`}>
       <div className='contante-div'>
       <h1>About Me</h1>
        <h2>Nour Eddin Zidan</h2>
        <h3>Front-end developer with hands-on experience in
HTML, CSS, JavaScript, React.js, and Next.js. Proven
ability to build responsive, user-friendly web
applications. Experienced in working with RESTful
APIs, state management using Redux, and modern
front-end tools. Currently pursuing a Master's degree

in Web Science. Passionate about delivering high-
quality code and seamless user experiences.</h3>
    </div> 
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        loop={true}
        speed={5000}
        allowTouchMove={true}
        className="custom-swiper"
      >

        



        <SwiperSlide>
          <img src="/assets/logo1.webp" alt="Logo 1" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/logo2.webp" alt="Logo 2" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/logo3.webp" alt="Logo 3" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/logo4.webp" alt="Logo 4" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/logo5.webp" alt="Logo 5" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/logo6.webp" alt="Logo 6" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/logo7.webp" alt="Logo 7" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/logo8.webp" alt="Logo 8" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/logo9.webp" alt="Logo 9" className="slide-img" />
        </SwiperSlide>

        
      </Swiper>
    </section>
    
  )
}
