import React from 'react';
import Resume from "./Resume";
import ResumeDownload from "./ResumeDownload";
import "./styles/ResumeContainer.css";

function ResumeContainer() {
  return (
  <div className="resume-container-wrapper">
        <ResumeDownload />
        <Resume />
  </div>
  )
}

export default ResumeContainer;
