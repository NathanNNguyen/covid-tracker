import React, { useState, useEffect } from 'react';
import { getDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.scss';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      setDailyData(await getDailyData());
    }

    getAPI();
  }, []);

  const lineChart = (
    dailyData.length
      ?
      (<Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Infected',
            borderColor: 'red',
            backgroundColor: 'rgba(2500, 0, 0, 0.5',
            fill: true,
          }],
        }}
      />) : null
  );



  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart