import React from 'react';
import Resume from "./Resume";
import ResumeDownload from "./ResumeDownload";
import "./styles/ResumeContainer.css";

function ResumeContainer() {
  return (
  <div className="resume-container-wrapper">
        <Resume />
        <ResumeDownload />
  </div>
  )
}

export default ResumeContainer;
