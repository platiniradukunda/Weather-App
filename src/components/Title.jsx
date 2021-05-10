import React, { Component } from 'react';
import WeatherCall from './WeatherCall';
import WeatherCity from './WeatherCity';

class Title extends Component {
    constructor () {
        super()
        this.state = {
            weatherData: '',
            weatherCity: '',
            date: '',
            cityInput: '',
        }
    }
    // function to push the city names into state so that I can do an api call
    changeCityInput=(input)=>{
        this.setState({
            cityInput: input,
        })
    }

    // function to grab data from a weather api

    getWeather = async (event) => {
        // event.preventDefault();

        // variable for what I typed in search box
        const query = this.state.cityInput;

        console.log("getting data");
        // variable for the url that will make our api call
        const url= `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1f571e6ea89f4384e58484fa23c91070`

        try{
            const response = await fetch(url);
            const weather = await response.json();
            console.log(weather);
            // (K − 273.15) × 9/5 + 32 = °F
            let tempK = weather.main.temp;
            // converting the tempK to F
            let tempF = (tempK - 273.15) * 9/5 + 32
            
            this.setState({
                weatherData: tempF.toFixed(0),
                weatherCity: weather.name,
                date: '',

            })
        }
        // else show an error that their was an error
        catch(err) {
            console.log(err);
        }
    }


    render() {
        return (
            <div>
                <h1>Weather App</h1>
                {/* this is to keep track of every value that I type in the city box and push it to state */}
                <input className="searchBox" type="text" placeholder="Enter city here..." onChange={(event)=>{this.changeCityInput(event.target.value)}}/>
                {/* button that has a function to call on the weather api */}
                <button className="searchButton" onClick={()=>this.getWeather()}>Search</button>
                <WeatherCity city={this.state.weatherCity}/>
                <WeatherCall data={this.state.weatherData}/>
            </div>
        );
    }
}

export default Title;


// Pseudo code
// make a search box
// connect the search box user input to the api url
// connect search button to the api fetch call
// populate the data from the api to the DOM