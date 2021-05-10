import React, { Component } from 'react';
import WeatherCall from './WeatherCall';
import WeatherCity from './WeatherCity';

class Title extends Component {
    constructor () {
        super()
        this.state = {
            weatherData: '',
            weatherCity: '',
            cloud: '',
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
        const url= `//api.openweathermap.org/data/2.5/weather?q=${query}&appid=1f571e6ea89f4384e58484fa23c91070`

        try{
            // fetching the data from the api url
            const response = await fetch(url);
            // converting the data to json
            const weather = await response.json();
            console.log(weather);
            // API gives the temperature in kelvin so it has to be converted to fahrenheit
            let tempK = weather.main.temp;
            // converting the tempK to F. Equation is (K − 273.15) × 9/5 + 32 = °F
            let tempF = (tempK - 273.15) * 9/5 + 32
            //  changing the data in state to update it with the fetched data
            this.setState({
                weatherData: tempF.toFixed(0),
                weatherCity: weather.name,
                cloud: '',

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
                {/* component that shows the city we searched */}
                <WeatherCity city={this.state.weatherCity}/>
                {/* component that renders the city's weather */}
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