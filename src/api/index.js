import axios from 'axios';

const url = 'http://covid19.mathdro.id/api';

export const getData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

    const neededData = {
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate
    }
    return neededData;
  }
  catch (err) {

  }
}