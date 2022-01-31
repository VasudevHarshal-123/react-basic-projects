import React, {Component} from "react";
import "./styles/Clock.css";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state={
            time: new Date().toLocaleTimeString(),
            intervalId : null
        };
        // this.updateTime = this.updateTime.bind(this);
    }

    componentDidMount() {
        // To update the values in state
        this.setState({
            intervalId: setInterval(()=>this.updateTime(),1000)
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID)
    }

    updateTime = () => {
        this.setState({
            time:new Date().toLocaleTimeString()
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
