import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.scss';

const Cards = ({ data, activeCases }) => {

  const { confirmed, recovered, deaths, lastUpdate } = data;
  if (!confirmed) {
    return 'Loading data...'
  }

  const { active } = activeCases;

  return (
    <div className={styles.container}>
      <Grid container spacing={2} justify='center'>

        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>
          <CardContent className={styles.cardContent}>
            <Typography color='textSecondary' gutterBottom className={styles.infect}>Infected</Typography>
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

        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom className={styles.recover}>Recovered</Typography>
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

        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom className={styles.dead}>Deaths</Typography>
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

        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.activate)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom className={styles.active}>Active</Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={active}
                duration={4}
                separator=','
              /></Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2' >Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>

        {/* <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom className={styles.dead}>Deaths</Typography>
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
        </Grid> */}

      </Grid>
    </div >
  )
}

export default Cards