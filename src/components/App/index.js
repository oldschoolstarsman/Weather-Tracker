// == Import : npm
import React from 'react';
import axios from 'axios';

// == Import : local
import Weather from 'src/components/Weather';
import SearchBar from 'src/components/SearchBar';

import './app.scss';

const APIkey = '1f9774d5d727bce8ea5d98a3fbde5c26';

class App extends React.Component {
  state = {
    city: '',
    weatherNow: '',
    tempMin: null,
    tempMax: null,
    tempCurrent: null,
    humidity: null,
    error: false,
    isLoading: false,
    inputValue: '',
  }

  componentDidMount() {
    this.fetchCurrentWeather();
  }

  changeValue = (name, newValue) => {
    this.setState({
      [name]: newValue,
    });
  }

  /* Show the minimum value from the recorded tracker values */
  showMin = (array) => Math.min.apply(null, array);

  /* Show the maximum value from the recorded tracker values */
  showMax = (array) => Math.max.apply(null, array);

  /* Show the mean value from the recorded tracker values */
  showMean = (...numbers) => numbers.reduce((acc, val) => acc + val, 0) / numbers.length;


  /* FECTH data from API on page load show London data as default*/
  fetchCurrentWeather = () => {
    const { inputValue } = this.state;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${APIkey}`)
      .then((response) => {

        this.setState({
          city: response.data.name,
          tempMin: Math.round(response.data.main.temp_min),
          tempMax: Math.round(response.data.main.temp_max),
          tempCurrent: Math.round(response.data.main.temp),
          weatherNow: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
          errorMessage: error.message,
        });
      });
  }

  /* FECTH data from API on form submit */
  fetchStats = (e) => {

    e.preventDefault();

    const { inputValue } = this.state;

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${APIkey}`)
      .then((response) => {

        this.setState({
          city: response.data.name,
          tempMin: Math.round(response.data.main.temp_min),
          tempMax: Math.round(response.data.main.temp_max),
          tempCurrent: Math.round(response.data.main.temp),
          weatherNow: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          isLoading: false,
        });
      }).catch((error) => {
        this.setState({
          error: true,
          errorMessage: error.message,
        });
      });
  }


  render() {

    const {
      city, tempMin, tempCurrent, tempMax, humidity, error, weatherNow, isLoading, inputValue,
    } = this.state;

    return (
      <div id="app" className="container">
        {!isLoading
          && (
            <>
              <SearchBar loadStats={this.fetchStats} inputValue={inputValue} changeValue={this.changeValue} />
              <Weather
                city={city}
                tempCurrent={tempCurrent}
                weatherNow={weatherNow}
                tempMin={tempMin}
                tempMax={tempMax}
                humidity={humidity}
                error={error}
              />
            </>
          )}
        {isLoading
          && <div className="loading">LOADING</div>}
      </div>
    );
  }
}

export default App;





