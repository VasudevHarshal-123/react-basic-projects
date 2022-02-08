import React from 'react';
import { LinkedinFilled, GithubFilled, FacebookFilled } from "@ant-design/icons";
import "./styles/Footer.css";

function Footer() {

    const getResumeCTA = () => {
        return (
            <section className="resume-CTA footer-resume-CTA">
                Resume
            </section>
        )
    }

    const getFooterContent = () => {
        return (
            <section className="portfolio-footer-content-wrapper">
                <section className="portfolio-footer-message-wrapper">
                    <h1>Let's Talk</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<a href="tel:+91-7004813287">Contact me</a></p>
                </section>
                <section className="portfolio-footer-Navigation-wrapper">
                    <section className='portfolio-header-nav-wrapper portfolio-footer-Navigation-links-wrapper'>
                        <a href="#protfolio-projects-wrapper">Projects</a>
                        <a href="#portfolio-connect-with-me">Contact</a>
                        <a href="#portfolio-about-wrapper">About</a>
                        <a href="#portfolio-achivement-wrapper">Achivement</a>
                    </section>
                    <section className="portfolio-intro-card-social-wrapper">
                        <LinkedinFilled onClick={() => window.open("https://github.com/", "_blank")} />
                        <GithubFilled />
                        <FacebookFilled />
                    </section>
                </section>
            </section>
        )
    }

    const getScrollToTop = () => {
        return (
            <section className="portfolio-footer-scroll-top">
                Scroll To Top
            </section>
        )
    }

    return (
        <section className="portfolio-footer-wrapper">
            {getResumeCTA()}
            {getFooterContent()}
            {getScrollToTop()}
        </section>
    )
}

export default Footer;
