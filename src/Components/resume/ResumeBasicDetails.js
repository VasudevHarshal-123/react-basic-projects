import React from 'react';
import profilePic from "./puppy.jif";
import emailIcon from "../../Resources/Images/emailIcon.svg";
import phoneIcon from "../../Resources/Images/phoneIcon.svg";
import linkedInIcon from "../../Resources/Images/linkedInIcon.svg";
import githubIcon from "../../Resources/Images/githubIcon.svg";
import "./styles/ResumeBasicDetails.css";


function ResumeBasicDetails() {
    const getIdentity = () => {
        return(
            <section className="resume-basic-details-identity-wrapper">
                <img src={profilePic} alt="my photo" />
                <h2>John Doe</h2>
            </section>
        )
    }

    const getAbout = () => {
        return(
            <section className="resume-basic-details-about-wrapper">
                <h3>About:</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </section>
        )
    }

    const getContact = () => {
        return(
            <section className="resume-basic-details-contact-wrapper">
                <h3>Connect with me:</h3>
                <section className="resume-basic-details-connect-wrapper">
                    <img src={emailIcon} alt="email"/>
                    <p>abc@gmail.com</p>
                    {/* <img /> */}
                </section>
                <section className="resume-basic-details-connect-wrapper">
                <img src={phoneIcon} alt="phone"/>
                    <p>+91-1234567890</p>
                </section>
                <section className="resume-basic-details-connect-wrapper">
                    <img src={linkedInIcon} alt="linkedIn"/>
                    <p>LinkedIn</p>
                </section>
                <section className="resume-basic-details-connect-wrapper">
                    <img src={githubIcon} alt="github"/>
                    <p>Github</p>
                </section>
            </section>
        )
    }

    const getSkills = () => {
        return(
            <section className="resume-basic-details">
                
            </section>
        )
    }

  return (
  <div className="resume-basic-details-wrapper">
      {getIdentity()}
      {getAbout()}
      {getContact()}
      {getSkills()}
  </div>
  )
}

export default ResumeBasicDetails;
