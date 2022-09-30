import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useKeyPress from '../../../hooks/useKeyPress';

export default function Guess() {

  const guess = useSelector(state => state.guess);

  return (
    <div style={{border: '1px solid yellow'}}>
        <p>Guess</p>
        {guess.map((letter,i) => {
          return (
            <span key={i}>{letter}</span>
          )
        })}
    </div>
  );
}
