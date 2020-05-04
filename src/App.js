import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { getData, fetchedActive, fetchActive } from './api';

import covid from './images/covid.png'

import styles from './App.module.scss';

class App extends Component {
  state = {
    data: {},
    country: '',
    activeCases: null
  }

  async componentDidMount() {
    const fetchedData = await getData();
    const fetchedActive = await fetchActive();

    this.setState({ activeCases: fetchedActive });
    this.setState({ data: fetchedData });
  }


  handleCountry = async (country) => {
    const fetchedData = await getData(country);

    this.setState({ data: fetchedData, country: country });
  }


  render() {
    const { data, country, activeCases } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} alt='Covid-19' src={covid} />
        <Cards data={data} activeCases={activeCases} />
        <CountryPicker handleCountry={this.handleCountry} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}
export default App;
