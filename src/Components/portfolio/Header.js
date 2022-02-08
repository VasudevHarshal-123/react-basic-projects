import React from 'react';
import profileImage from "../../Resources/Images/dic6.PNG";
import "./styles/Header.css";

function Header() {
  return (
    <section className='portfolio-header-wrapper'>
        <section className='portfolio-header-name-wrapper'>
            <img src={profileImage}/>
            <h1>Vasudev Harshal</h1>
        </section>

        <section className='portfolio-header-nav-wrapper'>
            <a href="#protfolio-projects-wrapper">Projects</a>
            <a href="#portfolio-connect-with-me">Contact</a>
            <a href="#portfolio-about-wrapper">About</a>
            <a href="#portfolio-achivement-wrapper">Achivement</a>
            <a>Resume</a>
        </section>
    </section>
  )
}

export default Header;

/*
<Link to='/crack-coding-interviews#Features' scroll={(el) => this.scrollWithOffset(el)} className="header-nav-link">
						Why Renaissance
					</Link>
*/