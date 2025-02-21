import { Link, animateScroll as scroll } from 'react-scroll'

export default function Nav() {

  return (
    <header>
      <div className="container header-container">
        <div className='scroll-buttons'>
          <Link to='hero' offset={-60} spy={true} smooth={true} duration={500} className='scroll-link' id='home-link'>James Braid</Link>
        </div>

        <div className='scroll-buttons' id='nav-right'>
          <Link to='about' offset={-60} spy={true} smooth={true} duration={300} className='scroll-link'>About</Link>
          <Link to='skills' offset={-60} spy={true} smooth={true} duration={300} className='scroll-link'>Skills</Link>
          <Link to='projects' offset={-60} spy={true} smooth={true} duration={300} className='scroll-link'>Projects</Link>
          <Link to='contact' offset={-60} spy={true} smooth={true} duration={300} className='scroll-link'>Contact</Link>
        </div>
      </div>
    </header>
  )
}