import { useContext } from 'react';
import './Projecthero.css'
import { ThemeContext } from '../../App';
import projectsdata from '../../data/project-data/Project-Data';
import ProjectCard from '../ProjectCard/ProjectCard';


export default function Projecthero() {
 
    const { mode, setmood } = useContext(ThemeContext);
    return (
    <section className={`pro-section ${mode}`} >


        <div className='top-div'>
            <div className='t-left-div'>
                <h5 className='main-titel'>Portfolio</h5>
                <h2 className='text-h2'>My Creative Works <samp className='sp-text'><h2 className='latest'>Latest</h2>
                 <h2 className='project'>Projects</h2></samp></h2>
            </div>
            <div className='t-right-div'> <a className='git-a' target='blank' href='https://github.com/nourzidan'>View Github <img className="btn-img" src="/assets/download.png" alt="" /></a></div>
        </div>
        <div className='bottom-div'>
        <div className="project-grid">
          {projectsdata.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        </div>


    </section>
  )
}
