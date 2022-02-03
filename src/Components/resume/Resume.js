import React from 'react';
import ResumeContent from "./ResumeContent";
import ResumeBasicDetails from "./ResumeBasicDetails";
import "./styles/Resume.css";

function Resume() {
  return( 
  <div className="resume-wrapper">
      <ResumeBasicDetails />
      <ResumeContent />
  </div>
  )
}

export default Resume;
