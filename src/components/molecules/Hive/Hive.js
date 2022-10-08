import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import HiveCell from '../../atoms/HiveCell/HiveCell';

export default function Hive() {

  const letters = useSelector(state => state.letters);

  return (
    <>
      <div className='hive'>
          {Object.keys(letters).map((key,i) => {
            return (
              <HiveCell key={i} letter={key} type={letters[key]}></HiveCell>
            )
          })}
      </div>
      <span style={{ color: '#e6e6e6', fontSize: '135px', marginTop: '100px'}}>&#x2B22;</span>
    </>
  );
}
