import "./Eduhero.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";
export default function Eduhero() {
  const { mode, setmood } = useContext(ThemeContext);
  return (
    <section className={`edu-section${mode}`}>
      <div className="head-div">
        <h3>Education and Experience</h3>
        <h1>Education & Experience</h1>
      </div>
      <div className="main-contant-div">
        <img className="edu-squers" src="/assets/Images bg.svg" alt="" />
        <div className="left-div">
          <img className="line-img" src="/assets/Frame 11.svg" alt="" />
          <div className="container">
            <div className="top-div">
              <h3>Master’s in Web Science :</h3>
              <p>
                Syrian Virtual University Currently pursuing my Master’s in Web
                Science, where I'm deepening my understanding of modern web
                technologies, data-driven applications, and internet
                infrastructure. This program is helping me build advanced skills
                in both front-end and back-end development, along with
                research-oriented thinking in the evolving field of web
                technologies
              </p>
            </div>
            <div className="bottom-div">
              <h3>
                Bachelor of Technology in Computer Science and Engineering :
              </h3>
              <p>
                Kalinga Institute of Industrial Technology During my time at
                KIIT, I gained a strong foundation in computer science
                principles, software development, and problem-solving. I worked
                on various academic projects, collaborated with peers, and
                developed practical skills that prepared me for real-world tech
                challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="right-div">
          <img className="line-img" src="/assets/Frame 11.svg" alt="" />
          <div className="container">
            <div className="top-div">
              <h3>Web Development Training & Internships :</h3>
              <p>
                I’ve completed three focused courses in web development—two
                specializing in front-end development and one in full-stack
                development. These experiences helped me build strong skills in
                HTML, CSS, JavaScript, React.js, and Next.js, along with
                hands-on practice in real projects, responsive design, state
                management, and working with APIs and databases.
              </p>
            </div>
            <div className="bottom-div">
              <h3>Design Tools & Creative Skills :</h3>
              <p>
                 I’ve also completed a course in
                design, where I gained hands-on experience with Adobe Photoshop
                and Illustrator. This gave me a solid understanding of visual
                design principles, image editing, and creating graphics—skills
                that complement my web development work and help me collaborate
                more effectively with designers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
