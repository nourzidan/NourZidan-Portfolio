import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ id, title, techStack, image }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />
      
        <div className="bottom-card-div"> 

        <div className="text-card-div">
        <h3>{title}</h3>
        <p>{techStack}</p>
        </div>
      
      <Link to={`/Projects/${id}`} className="project-link">
        <img src="/assets/downloadc.png" alt="Go to project" />
      </Link>
      </div>
    </div>
  );
}
