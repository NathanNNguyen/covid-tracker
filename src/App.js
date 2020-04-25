import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { getData } from './api';

import styles from './App.module.scss';

class App extends Component {
  state = {
    data: {},

  }

  async componentDidMount() {
    const fetchedData = await getData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}
export default App;
