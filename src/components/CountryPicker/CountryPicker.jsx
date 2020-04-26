import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.scss';

const CountryPicker = ({ handleCountry }) => {
  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    const getCountries = async () => {
      setFetchedCountries(await fetchCountries())
    }
    getCountries();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.form}>
      <NativeSelect defaultValue='' onChange={(e) => handleCountry(e.target.value)} >
        <option value=''>Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country} >{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker