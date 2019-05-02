import React from 'react';
import {geolocated} from 'react-geolocated';
import Weather from './Weather';
import './index.css';
import spinner from '../assets/Infinity-1s-200px.svg';
 
class GeoLocated extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? 
          <Weather lat={this.props.coords.latitude} long={this.props.coords.longitude} />
          : <img className="spinner" src={spinner} alt="loading"/>
  }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(GeoLocated);