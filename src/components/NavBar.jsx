import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/img/logo.svg';
import linkedin from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github-mark-white.svg';
import email from '../assets/img/email.svg';
import resume from '../assets/img/resume.svg';
import Pdf from '../assets/Resume.pdf';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll); //will make sure to deactivate the onScroll event so that any further scrolling doesn't fire the function
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        < Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home" style={{color: '#fff'}}>Ali Jafri</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://github.com/AliAbdullah0314"><img src={github} alt="Github" /></a>
                            <a href="https://www.linkedin.com/in/ali-abdullah-jafri/"><img src={linkedin} alt="LinkedIn" /></a>
                            <a href="mailto:jafris12345@gmail.com"><img src={email} alt="Email" /></a>
                            <a href={Pdf} target='_blank'><img src={resume} alt="Resume" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}