import React from 'react';
import Clock from "../clock/Clock";
import Todo from "../toDo/Todo";
import DiceGame from "../scarne/DiceGame";
import Quote from '../quote/Quote';
import "./styles/Projects.css";

function Projects() {

        const getClock = () => {
            return (
                <section  className='protfolio-projects-clock-wrapper'>
                    <Clock />
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Digital Clock</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <ul>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    </ul>
                    </section>
                </section>
            )
        }

        const getTodoApp = () => {
            return (
                <section  className='protfolio-projects-todo-wrapper'>
                   <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Todo App</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <ul>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    </ul>
                    </section>
                    <Todo />
                </section>
            )
        }

        const getDiceGame = () => {
            if(window.innerWidth<661) {
                return (
                <section  className='protfolio-projects-dicegame-wrapper'>
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Dice Game</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <ul>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    </ul>
                    </section>
                    <DiceGame />
                </section>
            )
            }
            return (
                <section  className='protfolio-projects-dicegame-wrapper'>
                    <DiceGame />
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Dice Game</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <ul>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    </ul>
                    </section>
                </section>
            )
        }

        const getQuote = () => {
            return (
                <section  className='protfolio-projects-quote-wrapper'>
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Quote Generator</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <ul>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    </ul>
                    </section>
                    <Quote />
                </section>
            )
        }

        
    const getAllProjects = () => {
        return (
            <section  className='protfolio-projects-together-wrapper'>
                {getClock()}
                {getTodoApp()}
                {getDiceGame()}
                {getQuote()}
            </section>
        )
    }

  return ( 
    <section id='protfolio-projects-wrapper'>
        <h1>Projects</h1>
        {getAllProjects()}
    </section>
  )
}

export default Projects;
