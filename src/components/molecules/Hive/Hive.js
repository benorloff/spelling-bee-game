import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import HiveCell from '../../atoms/HiveCell';

export default function Hive() {

  const letters = useSelector(state => state.letters);
  const order = useSelector(state => state.order);

  const [primaryLetter, setPrimaryLetter] = useState('');
  const [secondaryLetters, setSecondaryLetters] = useState([]);

  useEffect(() => {
     
    let currLetters = {
      primary: '',
      secondary: [],
    }

    let orderedSecondaryLetters = [];
  
    Object.keys(letters).forEach((key,i) => {
      if ( letters[key] === 'isPrimary' ) {
        currLetters.primary = key;
      } else {
        currLetters.secondary.push(key);
      }
    })
  
    order.forEach(num => {
      orderedSecondaryLetters.push(currLetters.secondary[num-1])
    })

    setPrimaryLetter(currLetters.primary);
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
