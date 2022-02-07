import React, { Component } from "react";
import "./styles/Clock.css";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state={
            time: new Date().toLocaleTimeString(),
            intervalId: null
        }
        this.updateTime = this.updateTime.bind(this);
    }

    componentDidMount(){
        this.setState({
            intervalId : setInterval(()=> this.updateTime(),1000)
        }) 
    }

    updateTime() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    render() {
        return(
            <div className="time">
                <p>{this.state.time}</p>
            </div>
        )
    }
}

export default Clock;