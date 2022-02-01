import React, { Component } from 'react';
import Composition from "./Composition";
import CompositionAgain from "./CompositionAgain";

export class Rough extends Component {

    common = (title, subtitle, text) => {
        return (<div>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{text}</p>
        </div>)
    }

    render() {
        return(
        <div>
            <Composition>
                {this.common("composition", "composition sub", "composition text")}
            </Composition>
            <CompositionAgain>
                {this.common("compositionAgain","compositionAgain sub","compositionAgain text")}
            </CompositionAgain>
        </div>
        )
    }
}

export default Rough;
