/* eslint-disable react/prefer-stateless-function */
// == Import : npm
import React from 'react';
import axios from 'axios';

// == Import : local
import Weather from 'src/components/Weather';
import Form from 'src/components/Form';

import './app.scss';
// import 'weather-icons/css/weather-icons.css';

const APIkey = '1f9774d5d727bce8ea5d98a3fbde5c26';

class App extends React.Component {
  state = {
    city: '',
    weatherNow: '',
    tempMin: null,
    tempMax: null,
    temp_current: null,
    humidity: null,
    error: false,
  }

  // componentDidMount() {
  //   axios.get('  ')
  //     .then((res) => console.log(res));
  // }
  componentDidMount() {
    setTimeout(() => {
      console.log('Our data is fetched');
      this.fetchCurrentWeather();
    }, 2000);
  }

  componentDidUpdate() {
    console.log('toto'); // rendu OK
  }

  fetchCurrentWeather = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${APIkey}`)
      .then((response) => {
        console.log(response);
        this.setState({
          city: response.data.name,
          tempMin: response.data.main.temp_min,
          tempMax: response.data.main.temp_max,
          temp_current: response.data.main.temp,
          weatherNow: response.data.weather[0].description,
        });
      });
  }


  render() {
    console.log('STATE', this.state);

    const {
      city, tempMin, temp_current, tempMax, humidity, error, weatherNow,
    } = this.state;

    // const { city } = this.state;
    return (
      <div id="app" className="container">
        {city.length
          && (
            <>
              <Form />
              <Weather
                city={city}
                weatherNow={weatherNow}
                tempMin={tempMin}
                tempMax={tempMax}
                humidity={humidity}
                error={error}
              />
            </>
          )}
        {city.length < 0
          && <div className="loading">loading</div>}
      </div>
    );
  }
}

// == Export
export default App;
