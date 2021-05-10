import React, { Component } from 'react';
import WeatherCall from './WeatherCall';

class Title extends Component {
    constructor () {
        super()
        this.state = {
            cityInput: '',
        }
    }
    // function to push the city names into state so that I can do an api call
    changeCityInput=(input)=>{
        this.setState({
            cityInput: input,
        })
    }

    render() {
        return (
            <div>
                <h1>Weather App</h1>
                {/* this is to keep track of every value that I type in the city box and push it to state */}
                <input type="text" placeholder="Enter city here..." onChange={(event)=>{this.changeCityInput(event.target.value)}}/>
                {/* button that has a function to call on the weather api */}
                <button>Search</button>
                <WeatherCall city={this.state.cityInput}/>
            </div>
        );
    }
}

export default Title;