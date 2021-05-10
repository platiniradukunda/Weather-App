import React, { Component } from 'react';

class WeatherCity extends Component {
    render() {
        return (
            <div>
                {/* Rendering the city to the DOM */}
                <h1>{this.props.city}</h1>
            </div>
        );
    }
}

export default WeatherCity;