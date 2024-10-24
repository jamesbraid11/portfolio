import Poxymon from '../assets/images/projects/poxymon.png'
import VinousVoyages from '../assets/images/projects/vinous-voyages.png'
import HpCharacterIndex from '../assets/images/projects/hp-character-index.png'
import KhFrogger from '../assets/images/projects/kh-frogger.png'

export default function Projects() {
  return (
    <section id="projects-screen">
      <h1>Projects</h1>
      <div className="container" id="projects-container">
        <div className="project">
          <h3>Poxymon</h3>
          <img className="project-image" src={Poxymon} alt="james braid poxymon project image" />
          {/* <div className="project-image" style={{backgroundImage: {Poxymon}}}></div> */}
          <div className="links">
            <a href="https://poxymon-6ef2721d90ac.herokuapp.com/" target="_blank">Application</a>
            <a href="https://github.com/jamesbraid11/poxymon_v2/tree/main#:~:text=Repository%20files%20navigation-,README,-Poxymon" target="_blank">ReadMe</a>
          </div>
          <p className="project-description">
            This solo project is a full stack application built with Django and React, where users can create monsters for battling. It consumes my own built API that comprises of many models and relationships.
          </p>
        </div>
        <div className="project">
          <h3>Vinous Voyages</h3>
          <img className="project-image" src={VinousVoyages} alt="james braid vinous voyages project image" />
          <div className="links">
            <a href="https://vinous-voyages-8453f6380e78.herokuapp.com/" target="_blank">Application</a>
            <a href="https://github.com/jamesbraid11/Vinous-Voyages/tree/main#:~:text=Repository%20files%20navigation-,README,-Vinous%20Voyages" target="_blank">ReadMe</a>
          </div>
          <p className="project-description">
            This group project is a full stack MERN application that consumes our own API, where users can learn about wineries around the world with a view to planning visits to them.
          </p>
        </div>
        <div className="project">
          <h3>Harry Potter Character Index</h3>
          <img className="project-image" src={HpCharacterIndex} alt="james braid harry potter character index project image" />
          <div className="links">
            <a href="https://harry-potter-character-index.netlify.app" target="_blank">Application</a>
            <a href="https://github.com/jamesbraid11/hp-character-index#:~:text=Repository%20files%20navigation-,README,-Harry%20Potter%20Character" target="_blank">ReadMe</a>
          </div>
          <p className="project-description">
            This short group project is a multi-component React application that consumes the Harry Potter API, so users can discover information about the characters and spells.
          </p>
        </div>
        <div className="project">
          <h3>Kingdom Hearts Frogger</h3>
          <img className="project-image" src={KhFrogger} alt="james braid kingdom hearts frogger project image" />
          <div className="links">
            <a href="https://jamesbraid11.github.io/frogger-game/" target="_blank">Application</a>
            <a href="https://github.com/jamesbraid11/frogger-game/tree/main?tab=readme-ov-file#kingdom-hearts-frogger-game:~:text=Repository%20files%20navigation-,README,-Kingdom%20Hearts%20Frogger" target="_blank">ReadMe</a>
          </div>
          <p className="project-description">
            This solo project is a frogger type game built using only HTML, CSS and plain JavaScript.
          </p>
        </div>
      </div>
    </section>
  )
}