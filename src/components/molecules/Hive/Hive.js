import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import HiveCell from '../../atoms/HiveCell';
import getPrimaryLetter from '../../../utils/getPrimaryLetter';

export default function Hive() {

  const letters = useSelector(state => state.letters);
  const order = useSelector(state => state.order);
  const primaryLetter = getPrimaryLetter(letters);
  const [secondaryLetters, setSecondaryLetters] = useState([]);

  useEffect(() => {
     
    let currentSecondaryLetters = [];
    let orderedSecondaryLetters = [];
  
    Object.keys(letters).forEach((key,i) => {
      if ( letters[key] === 'isSecondary' ) {
        currentSecondaryLetters.push(key);
      }
    })
  
    order.forEach(num => {
      orderedSecondaryLetters.push(currentSecondaryLetters[num-1])
    })

    setSecondaryLetters(orderedSecondaryLetters);

  },[letters,order])

  return (
      <Grid item className='hive-box'>
        <div className='hive'>
          <HiveCell letter={primaryLetter} type='isPrimary' />
          {secondaryLetters.map((letter,i) => {
            return (
              <HiveCell key={i} letter={letter} type='isSecondary' position={`pos${i+1}`} />
            )
          })}
        </div>
      </Grid>
  );
}
