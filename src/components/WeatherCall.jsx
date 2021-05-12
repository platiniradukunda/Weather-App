import React, { Component } from 'react';

class WeatherCall extends Component {

    render() {
        return (
            <div>
                {/* Rendering the data to the DOM */}
                <h3 className="clouds">{this.props.clouds}</h3> 
                <h1 className="temp">{this.props.data} </h1>
                {/* &deg;     */}
            </div> 
        );
    }
}

export default WeatherCall;