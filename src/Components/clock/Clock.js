import React, {useState, useEffect, useLayoutEffect} from "react";
import "./styles/Clock.css";

function Clock() {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         time: ,
    //         intervalId : null
    //     };
    //     // this.updateTime = this.updateTime.bind(this);
    // }

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        setIntervalId(setInterval(()=>updateTime(),1000));
    }, []);
    

    // componentDidMount() {
    //     // To update the values in state
    //     this.setState({
    //         intervalId: setInterval(()=>this.updateTime(),1000)
    //     })
    // }

    // componentWillUnmount() {
    //     clearInterval(this.state.intervalID)
    // }

    useLayoutEffect(() => {
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const updateTime = () => {
            setTime(new Date().toLocaleTimeString())
    }        

       return(
            <div className="time">
                <p>{time}</p>
            </div>
        )
}

export default Clock;
