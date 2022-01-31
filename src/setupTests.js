// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import React, { Component } from 'react';
import "./styles/Clock.css";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            intervalID: null
        }
        this.updateClock = this.updateClock.bind(this);
    }

    componentDidMount() {
        this.setState({intervalID : setInterval(() =>
            this.updateClock(),
            1000
        )});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID)
    }

    updateClock() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <div className="time">
                <p> {this.state.time}</p>
            </div>
        );
    }
}
export default Clock;