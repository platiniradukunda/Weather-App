import React, { Component } from 'react';

class WeatherCall extends Component {
    constructor(props){
        super(props);
        this.state={
            city: this.props.city,
        }
    }

    // function to grab data from a weather api

    getWeather = async (event) => {
        event.preventDefault();
        console.log("getting data");
        // variable for the url that will make our api call
        const url= `/`

        try{
            const response = await fetch(url);
            const weather = await response.json();
            console.log(weather);
            this.setState({

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
                
            </div>
        );
    }
}

export default WeatherCall;