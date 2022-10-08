import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import HiveCell from '../../atoms/HiveCell/HiveCell';
import HiveCellSVG from '../../atoms/HiveCellSVG';

export default function Hive() {

  const letters = useSelector(state => state.letters);

  return (
      <Grid item className='hive-box'>
        <div className='hive'>
          {Object.keys(letters).map((key,i) => {
            return (
              <HiveCellSVG key={i} letter={key} type={letters[key]} />
            )
          })}
        </div>
      </Grid>
  );
}
