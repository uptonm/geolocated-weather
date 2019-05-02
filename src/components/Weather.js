import React from 'react';
import * as _ from 'lodash';
import axios from 'axios';
import spinner from '../assets/Infinity-1s-200px.svg';

class Weather extends React.Component {
  state = {
    unit: 'F',
    weather: {}
  }
  componentDidMount = async () => {
    const { lat, long } = this.props;
    if (lat && long) {
      const {data}  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${this.state.unit === 'F' ? 'imperial' : 'metric'}&APPID=${process.env.REACT_APP_API_KEY}`);
      this.setState({weather: data});
    }
  }
  render() {
    return _.isEmpty(this.state.weather) 
    ? 
    <img className="spinner" src={spinner} alt="loading" />
    :
    (
      <div className="flex-center">
        <div className="icon-container">
          <i className="fal fa-cloud-drizzle"></i>
        </div>
        <div className="temp-container">
          <h1 className="location">Current Weather in <span>{this.state.weather.name}</span></h1>
          <h1 className="temp">{this.state.weather.main.temp} &deg;{this.state.unit} </h1>
        </div>
      </div>
    )
  }
}

export default Weather;