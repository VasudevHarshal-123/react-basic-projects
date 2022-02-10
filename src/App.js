import React from "react";
import './App.css';
import "./Fonts.css";
import ResumeContainer from "./Components/resume/ResumeContainer.js";
import PortfolioWrapper from "./Components/portfolio/PortfolioWrapper";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<PortfolioWrapper />}/>
        <Route path="/resume" element={<ResumeContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


//React - library or framework ? create react app ? 

// import { createBrowserHistory } from 'history';
// import React from 'react';
// const history = createBrowserHistory();


// export default function MyApp() {
//     return (
//         <Router history={history}></Router>
//     );

//Why react ? - 
/*
1) Easy to learn : Good amount of resources and materials. Lower learning curve.
2) Resusable components : DRY - Less lines of code.
3) High Performance : Virtual dom in react wich make it fast. DOM - change updates(render) everything.
4) SEO - Search engine optimisation : SEO friendly.
5) JEST - React si easy to test.

Disadvantages : 
1)The high pace of development : Class based, es6, Hooks.
2) Poor documentation : 
3) View(of MVC) : React work in view part and nothing else.

npm install
npm start

<BrowserRouter>
				<Switch>
					<Route path='/book-interaction'>
						<BookSession />
					</Route>

        

*/