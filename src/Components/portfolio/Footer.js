import React from 'react';
import { LinkedinFilled, GithubFilled, FacebookFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

function Footer() {

    const getResumeCTA = () => {
        return (
            <section className="resume-CTA footer-resume-CTA">
                <Link className="resume-link" to="resume">Resume</Link>
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
                    <section className="portfolio-intro-card-social-wrapper">
                        <LinkedinFilled style={{fontSize:"30px", color:"#F9F3F3"}} onClick={() => window.open("https://github.com/", "_blank")} />
                        <GithubFilled style={{fontSize:"30px", color:"#F9F3F3"}}/>
                        <FacebookFilled style={{fontSize:"30px", color:"#F9F3F3"}}/>
                    </section>
            </section>
        )
    }

    return (
        <section className="portfolio-footer-wrapper">
            {getResumeCTA()}
            {getFooterContent()}
        </section>
    )
}

export default Footer;
