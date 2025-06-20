
import Tilt from 'react-parallax-tilt'

import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaSass } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";
import { SiJsonwebtokens } from "react-icons/si";
import { FaElementor } from "react-icons/fa6";
import { SiHeroku } from "react-icons/si";
import { FaCloud } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiInsomnia } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";


export default function Skills() {
  return (
    <section id="skills-screen">
      <h1>Skills</h1>
      <div id='skills-container'>
        <div>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35}>
            <div className='skills-card-inner'>
              <FaHtml5 className='skills-icon' />
              <p className='skills-name'>HTML</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up" data-aos-delay='500'>
            <div className='skills-card-inner'>
              <FaCss3Alt className='skills-icon' />
              <p className='skills-name'>CSS</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <SiTypescript className='skills-icon' />
              <p className='skills-name'>TypeScript</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up" data-aos-delay='500'>
            <div className='skills-card-inner'>
              <SiJavascript className='skills-icon' />
              <p className='skills-name'>JavaScript</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <FaReact className='skills-icon' />
              <p className='skills-name'>React</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <FaPython className='skills-icon' />
              <p className='skills-name'>Python</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <SiDjango className='skills-icon' />
              <p className='skills-name'>Django</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <FaWordpress className='skills-icon' />
              <p className='skills-name'>WordPress</p>
            </div>
          </Tilt>
        </div >
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <FaElementor className='skills-icon' />
              <p className='skills-name'>Elementor</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <FaNode className='skills-icon' />
              <p className='skills-name'>Node.js</p>
            </div>
          </Tilt>
        </div >
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <FaSass className='skills-icon' />
              <p className='skills-name'>Sass</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <FaBootstrap className='skills-icon' />
              <p className='skills-name'>Bootstrap</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <TbApi className='skills-icon' />
              <p className='skills-name'>ExpressAPI</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <SiMongodb className='skills-icon' />
              <p className='skills-name'>MongoDB</p>
            </div>
          </Tilt>
        </div >
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <SiMongoose className='skills-icon' />
              <p className='skills-name'>Mongoose</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <SiJsonwebtokens className='skills-icon' />
              <p className='skills-name'>JWT</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <SiVite className='skills-icon' />
              <p className='skills-name'>Vite</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <SiAxios className='skills-icon' />
              <p className='skills-name'>Axios</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <BiLogoPostgresql className='skills-icon' />
              <p className='skills-name'>PostgreSQL</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <SiHeroku className='skills-icon' />
              <p className='skills-name'>Heroku</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <FaCloud className='skills-icon' />
              <p className='skills-name'>Cloudinary</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <FaGithub className='skills-icon' />
              <p className='skills-name'>GitHub</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <SiInsomnia className='skills-icon' />
              <p className='skills-name'>Insomnia</p>
            </div>
          </Tilt>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay='200'>
          <Tilt className='skills-card parallax-effect-glare-scale' perspective={500} glareEnable={true} glareMaxOpacity={0.2} scale={1.35} data-aos="zoom-in-up">
            <div className='skills-card-inner'>
              <TbBrandVscode className='skills-icon' />
              <p className='skills-name'>VS Code</p>
            </div>
          </Tilt>
        </div>
      </div >
    </section>
  )
}