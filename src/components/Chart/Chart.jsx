import React, { useState, useEffect } from 'react';
import { getDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.scss';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
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
            borderColor: 'rgba(240, 210, 0, 0.7)',
            fill: true,
          }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(250, 0, 0, .2)',
            fill: true,
          }],
        }}
      />) : null
  );

  const barChart = (
    confirmed
      ? (
        <Bar
          data={{
            labels: ['Infected', 'Recover', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: [
                'rgba(240, 210, 0, 0.7)',
                'rgba(0, 255, 0, 0.7)',
                'rgba(255, 0, 0, 0.7)',
              ],
              data: [confirmed.value, recovered.value, deaths.value]
            }]
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current cases in ${country}` }
          }}
        />
      ) : null
  )

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart