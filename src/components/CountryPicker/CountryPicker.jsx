import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { getCountries } from '../../api';

import styles from './CountryPicker.module.scss';

const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    const getCountries = async () => {
      setFetchedCountries(await getCountries())
    }
    getCountries();
  }, [setFetchedCountries]);

  return (
    <FormControl className='styles.form'>
      <NativeSelect>
        <option value='global'>Global</option>
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker