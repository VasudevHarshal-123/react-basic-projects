import './App.css';
import "./Font.css";
import Clock from "./Components/clock/Clock";
import Todo from "./Components/toDo/Todo";
import Rough from "./Components/rough/Rough";
import Quote from "./Components/quote/Quote";


function App() {
  return (
    <div className="App">
      {/* <div className="clock">
        <Clock />
      </div> */}
      {/* <div className="todo-wrapper">
        <Todo />
      </div> */}
      <Rough />
      <Quote />
    </div>
  );
}

export default App;


//React - library or framework ? create react app ? 





//Why react ? - 
/*
1) Easy to learn : Good amount of resources and materials. Lower learning curve.
2) Resusable components : DRY - Less lines of code.
3) High Performance : Virtual dom in react wich make it fast. DOM - change updates(render) everything.
4) SEO - Search engine optimisation : SEO friendly.
5) JEST - React si easy to test.






Disadvantages : 
1) The high pace of development : Class based, es6, Hooks.
2) Poor documentation : 
3) View(of MVC) : React work in view part and nothing else.

npm install
npm start

*/