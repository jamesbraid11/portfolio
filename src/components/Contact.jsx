
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact-screen">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="link-container">
          <MdOutlineEmail fill="white" />
          <a href="mailto:james_braid@hotmail.co.uk">james_braid@hotmail.co.uk</a>
        </div>
        <div className="link-container">
          <FaLinkedin fill="white" />
          <a href="https://linkedin.com/in/jamesbraid11" target="_blank">linkedin.com/in/jamesbraid11</a>
        </div>
        <div className="link-container">
          <FaGithub fill="white" />
          <a href="https://github.com/jamesbraid11" target="_blank">github.com/jamesbraid11</a>
        </div>
      </div>
    </section>
  )
}