import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import HiveCell from '../../atoms/HiveCell/HiveCell';
import HiveCellSVG from '../../atoms/HiveCellSVG';

export default function Hive() {

  const letters = useSelector(state => state.letters);

  let cPos = 0;

  const getCellPosition = (type) => {
    if ( type === 'isSecondary' ) {
      cPos++;
      return `pos${cPos}`;
    }
  }

  return (
      <Grid item className='hive-box'>
        <div className='hive'>
          {Object.keys(letters).map((key,i) => {
            return (
              <HiveCellSVG key={i} letter={key} type={letters[key]} position={getCellPosition(letters[key])}/>
            )
          })}
        </div>
      </Grid>
  );
}
