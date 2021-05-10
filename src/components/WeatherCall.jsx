import React, { Component } from 'react';

class WeatherCall extends Component {

    render() {
        return (
            <div>
                {/* Rendering the data to the DOM */}
                <h1>{this.props.data} &deg;</h1>     
            </div> 
        );
    }
}

export default WeatherCall;