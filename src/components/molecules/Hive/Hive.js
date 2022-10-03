import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HiveCell from '../../atoms/HiveCell/HiveCell';

export default function Hive() {

  const letters = useSelector(state => state.letters);

  return (
    <div style={{border: '1px solid yellow', padding: 20}}>
        <p>Hive</p>
        {Object.keys(letters).map((key,i) => {
          return (
            <HiveCell key={i} letter={key} type={letters[key]}></HiveCell>
          )
        })}
    </div>
  );
}
