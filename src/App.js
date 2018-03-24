import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const apiKey = "76816bf8d71dd7753206e4dea8f0a91f";


class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    fun: undefined,
    rng: undefined
  }

  // getWeather fetches info from database with values of inputs and apiKey
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
    const data = await apiCall.json();

    // Invalid input
    if (data.cod === "404") {

      this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Invalid entry.",
      fun: undefined,
      chance: undefined
      })

      // Valid input
    } else if (city && country) {

            const funs = ["Chance to get hit by a car: ", "Chances of raining cats and dogs: ", "Chances of Half-Life 3 being released: ",
                          "Chances of finding a penny on the ground: ", "Number of frogs procreating today: ", "Chances of winning a free coffee: "];
            const size = funs.length;
            const selector = Math.floor(Math.random() * Math.floor(size));
            const rng = Math.floor(Math.random() * Math.floor(100));

            this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: "",
            fun: funs[selector],
            chance: rng
            })

      // No input
    } else {

      this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter values.",
      fun: undefined,
      chance: undefined
      })

    }
    
  }

  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">

                <div className="col-xs-5 title-container">
                  <Titles />
                </div>

                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                    temperature = {this.state.temperature} 
                    city = {this.state.city}
                    country = {this.state.country} 
                    humidity = {this.state.humidity} 
                    description = {this.state.description} 
                    error = {this.state.error} 
                    fun = {this.state.fun}
                    chance = {this.state.chance}
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;