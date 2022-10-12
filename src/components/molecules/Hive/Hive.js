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
    let pLet = '';
    let sLets = [];
  
    Object.keys(letters).forEach((key,i) => {
      if ( letters[key] === 'isPrimary' ) {
        pLet = key;
      } else {
        sLets.push(key);
      }
    })
  
    setPrimaryLetter(pLet);
    setSecondaryLetters(sLets);
  },[letters])

  useEffect(() => {
    let sLets = [];
    for ( let num of order ) {
      sLets.push(secondaryLetters[num]);
    }
    setSecondaryLetters(sLets);
  },[order])

  console.log(order, '<-- order from Hive')
  console.log(primaryLetter, '<-- primaryLetter from Hive');
  console.log(secondaryLetters, '<-- secondaryLetters from Hive');


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
