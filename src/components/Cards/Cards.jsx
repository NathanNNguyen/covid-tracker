import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import './Cards.scss';

const Cards = ({ data }) => {

  const { confirmed, recovered, deaths, lastUpdate } = data;
  if (!confirmed) {
    return 'Loading data...'
  }

  return (
    <div className='container'>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={10} className={cx('card', 'infected')}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom >Infected</Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={4}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2' >Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={10} className={cx('card', 'recovered')}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom >Recovered</Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={recovered.value}
                duration={4}
                separator=','
              /></Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2' >Number of recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={10} className={cx('card', 'deaths')}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom >Deaths</Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={deaths.value}
                duration={4}
                separator=','
              /></Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2' >Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>

    </div >
  )
}

export default Cards