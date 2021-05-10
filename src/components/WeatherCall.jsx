import React, { Component } from 'react';

class WeatherCall extends Component {
    constructor(props){
        super(props);
        this.state={
            weatherData: null,
            cityInput: '',
        }
    }

    

    render() {
        return (
            <div>
                <h1>{this.props.data} &deg;</h1>     
                     
            </div> 
        );
    }
}

export default WeatherCall;