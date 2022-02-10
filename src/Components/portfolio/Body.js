import React from 'react';
import Intro from "./Intro";
import Projects from "./Projects";
import Connect from "./Connect";
import About from "./About";
import Achivement from "./Achivement";

import "./styles/Body.css";

function Body() {
  return ( <div className='portfolio-body-wrapper'>
      <Intro />
      <Projects />
      <Connect />
      <Achivement />
      <About />
  </div>
  )
}

export default Body;

// <div id="Intro">
// <Intro />
// </div>