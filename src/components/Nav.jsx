import { Link, animateScroll as scroll } from 'react-scroll'

export default function Nav() {

  // function handleSidebarLink() {
  //   // When burger menu link is clicked also click the sidebar close button
  //   document.getElementById('react-burger-cross-btn').click()
  // }

  return (
    <header>
      <div className='scroll-buttons'>
        <Link to='hero' offset={-60} spy={true} smooth={true} duration={500} className='scroll-link' id='home-link'>James Braid</Link>
        {/* <Link to='hero' offset={-150} spy={true} smooth={true} duration={500} id='home-icon'><img src={logo} alt={`A picture of the sites logo (A stylised Osprey head)`} /></Link> */}
      </div>

      <div className='scroll-buttons' id='nav-right'>
        <Link to='about' offset={-60} spy={true} smooth={true} duration={300} className='scroll-link'>About</Link>
        <Link to='skills' offset={-60} spy={true} smooth={true} duration={300} className='scroll-link'>Skills</Link>
        <Link to='projects' offset={-60} spy={true} smooth={true} duration={300} className='scroll-link'>Projects</Link>
        <Link to='contact' offset={-60} spy={true} smooth={true} duration={300} className='scroll-link'>Contact</Link>
      </div>
      {/* <Menu right>
        <Link to='about-me' onClick={handleSidebarLink} offset={-150} spy={true} smooth={true} duration={300} className='menu-link'>About Me</Link>
        <Link to='projects' onClick={handleSidebarLink} offset={-150} spy={true} smooth={true} duration={300} className='menu-link'>Projects</Link>
        <Link to='contact' onClick={handleSidebarLink} offset={-150} spy={true} smooth={true} duration={300} className='menu-link'>Contact</Link>
      </Menu> */}
    </header>
  )
}