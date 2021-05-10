import React, { Component } from 'react';

class WeatherCity extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.city}</h1>
            </div>
        );
    }
}

export default WeatherCity;