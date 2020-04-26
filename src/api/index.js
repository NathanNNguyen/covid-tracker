import axios from 'axios';

const url = 'http://covid19.mathdro.id/api';

export const getData = async (country) => {
  let changeableURL = url;

  if (country) {
    changeableURL = `${url}/countries/${country}`
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);

    const neededData = {
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate
    }
    return neededData;
  }
  catch (err) {
    console.log(err)
  }
}

export const getDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))
    return modifiedData;
  }
  catch (err) {
    console.log(err)
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`)

    return countries.map((country) => country.name)
  }
  catch (err) {
    console.log(err)
  }
}