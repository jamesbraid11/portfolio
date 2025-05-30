import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Poxymon from '../assets/images/projects/poxymon.png'
import VinousVoyages from '../assets/images/projects/vinous-voyages.png'
import HpCharacterIndex from '../assets/images/projects/hp-character-index.png'
import KhFrogger from '../assets/images/projects/kh-frogger.png'
import RyanRhodes from '../assets/images/projects/ryan-rhodes.png'

const projects = [
  {
    title: "Ryan Rhodes",
    image: RyanRhodes,
    appLink: "https://ryanrhodes.coach/",
    description: "An application built using Elementor for a client's mind and body coaching business."
  },
  {
    title: "Poxymon",
    image: Poxymon,
    appLink: "https://poxymon-6ef2721d90ac.herokuapp.com/",
    repoLink: "https://github.com/jamesbraid11/poxymon_v2/tree/main#:~:text=Repository%20files%20navigation-,README,-Poxymon",
    description: "A full stack application built with Django and React, where users can create monsters for battling."
  },
  {
    title: "Vinous Voyages",
    image: VinousVoyages,
    appLink: "https://vinous-voyages-8453f6380e78.herokuapp.com/",
    repoLink: "https://github.com/jamesbraid11/Vinous-Voyages/tree/main#:~:text=Repository%20files%20navigation-,README,-Vinous%20Voyages",
    description: "A full stack MERN application that helps users learn about wineries around the world."
  },
  {
    title: "Character Index",
    image: HpCharacterIndex,
    appLink: "https://harry-potter-character-index.netlify.app",
    repoLink: "https://github.com/jamesbraid11/hp-character-index#:~:text=Repository%20files%20navigation-,README,-Harry%20Potter%20Character",
    description: "A multi-component React app that consumes the Harry Potter API for character and spell information."
  },
  {
    title: "Kingdom Hearts Frogger",
    image: KhFrogger,
    appLink: "https://jamesbraid11.github.io/frogger-game/",
    repoLink: "https://github.com/jamesbraid11/frogger-game/tree/main?tab=readme-ov-file#kingdom-hearts-frogger-game:~:text=Repository%20files%20navigation-,README,-Kingdom%20Hearts%20Frogger",
    description: "A Kingdom Hearts themed frogger-style game built using HTML, CSS, and vanilla JavaScript."
  }
]

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 20000,
}

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <img className="project-image" src={project.image} alt={project.title} />
    <div className="links">
      <a href={project.appLink} target="_blank" rel="noopener noreferrer">Application</a>
      {project.repoLink && (
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">ReadMe</a>
      )}
    </div>
    <p className="project-description">{project.description}</p>
  </div>
)

export default function LoopingProjectGrid() {

  return (
    <section id="projects-screen">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project-card-container">
          <Slider {...sliderSettings}>
            {[...projects].map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}