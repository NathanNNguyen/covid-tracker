import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import './App.scss';
import { getData } from './api';

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
      <div className='container'>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}
export default App;
