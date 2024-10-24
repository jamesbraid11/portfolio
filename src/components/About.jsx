import ProfileImage from "/src/assets/images/profile-pic.jpg"

export default function About() {
  return (
    <section id="about-screen">
      <h1>About</h1>
      <div className="container about-container">
        <div className="about about-image">
          <img className="profile-image" src={ProfileImage} alt="James Braid software engineer profile image" />
        </div>
        <div className="about about-text">
          <p className="about-p about-p-top">
            In my current role as a freelance WordPress Elementor Developer with Mota Creative, I specialise in transforming visually compelling designs into fully functional and responsive websites. I collaborate with designers, project managers, and clients to ensure design concepts are seamlessly turned into interactive web experiences. By leveraging WordPress and Elementor, I develop custom themes and layouts, focusing on both performance and user experience. This position has strengthened my skills in mobile-first design, UI/UX best practices, agile working and website optimisation, while reinforcing my ability to deliver engaging, high quality digital solutions efficiently.
          </p>
          <p className="about-p about-p-bottom">
            Prior to this, driven by a passion for creative problem solving, I completed an intensive software engineering course with General Assembly where I developed four projects, including two full stack applications. This experience has equipped me with a strong foundation in programming, particularly in TypeScript, JavaScript, HTML, CSS, and Git. I have a deep interest in front end development with React, using hooks, React Router, and JSX to build intuitive interfaces. Additionally, I have strong experience with Python, having built the back end of my final project using Django. Having also worked with relational and non-relational databases, API integration and JSON Web Tokens, my technical acumen is ready to contribute meaningfully to any team.
          </p>
        </div>
      </div>
    </section>
  )
}