import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { getData } from './api';

import covid from './images/covid.png'

import styles from './App.module.scss';

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await getData();

    this.setState({ data: fetchedData });
  }

  handleCountry = async (country) => {
    const fetchedData = await getData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} alt='Covid-19' src={covid} />
        <Cards data={data} />
        <CountryPicker handleCountry={this.handleCountry} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}
export default App;
