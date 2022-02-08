import React from "react";
import './App.css';
import "./Fonts.css";
import PortfolioWrapper from "./Components/portfolio/PortfolioWrapper";
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom";
import DiceGame from "./Components/scarne/DiceGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PortfolioWrapper />
          </Route>
          <Route exact path="/dice">
            <DiceGame />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default withRouter(App);


//React - library or framework ? create react app ? 

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