
import { useParams, Link, useNavigate } from "react-router-dom";
import projectsdata from '../data/project-data/Project-Data';
import './ProjectDetails.css'; 
import { useContext } from "react";
import { ThemeContext } from '../App'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ProjectCard from "../components/ProjectCard/ProjectCard";
import NavBar from "../components/NavBar/NavBar";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsdata.find(p => p.id === id);

  if (!project) return <h2 className="not-found">Project Not Found</h2>;

  

  const { mode, setmood } = useContext(ThemeContext);

  return (
    <div className={`details-div ${mode}`}>
      
      <div className="project-details-container">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-info">
        <h1>{project.title}</h1>
        <p><strong>Tech Stack:</strong> {project.techStack}</p>
        <p>{project.description}</p>

        <div className="project-links">
          <a href={project.repo} target="_blank" rel="noopener noreferrer">🔗 GitHub Repo</a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">🚀 Live Demo</a>
        </div>

        <div className="back-link">
          <Link to="/">← Back to Home</Link>
          
        </div>
      </div>

      </div>
      <div className="swip-div">
<Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        loop={true}
        speed={5000}
        allowTouchMove={true}
        className="custom-swiper-de"
      >
        {projectsdata.map(project => (
          <SwiperSlide>  <ProjectCard key={project.id} {...project} /></SwiperSlide>
          ))}
      </Swiper>



      </div>
      
    </div>
  );
}
