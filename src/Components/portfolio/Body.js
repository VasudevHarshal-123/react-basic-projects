import React from 'react';
import Intro from "./Intro";
import Projects from "./Projects";
import Connect from "./Connect";
import Achivement from "./Achivement";

import "./styles/Body.css";

function Body() {
  return ( <div className='portfolio-body-wrapper'>
      <Intro />
      <Projects />
      <Connect />
      <Achivement />
  </div>
  )
}

export default Body;
