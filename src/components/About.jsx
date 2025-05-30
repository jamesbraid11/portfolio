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
            Hi, I’m James — a full stack software engineer with a slightly unconventional journey into tech. Before diving into coding, I spent several years as a primary school teacher and digital lead, where I developed a love for problem-solving, creativity, and helping others grow — all of which naturally led me towards software development.</p>

          <p className="about-p about-p-top">Since completing an immersive Software Engineering bootcamp with General Assembly, I’ve built full stack applications using technologies like React, Python/Django, Node.js, and MongoDB. I enjoy working across both frontend and backend, whether that’s building RESTful APIs, crafting clean UIs, or integrating authentication systems. In my current freelance role, I work with Mota Creative to design and build responsive, user-friendly websites using WordPress and Elementor, collaborating closely with clients to turn ideas into polished digital experiences.</p>

          <p className="about-p about-p-top">I’m passionate about continuous learning and thrive in collaborative, Agile teams where I can contribute ideas and pick up new skills along the way. Outside of coding, I’m a big foodie (I’ve been lucky enough to visit a few Michelin-starred restaurants), a long-time Crystal Palace fan, and occasionally dust off the decks to DJ for friends and family.</p>

          <p className="about-p about-p-bottom">
            Thanks for stopping by — feel free to check out my projects or get in touch!
          </p>
        </div>
      </div>
    </section>
  )
}