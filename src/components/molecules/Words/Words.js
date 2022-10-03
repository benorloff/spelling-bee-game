import React from 'react';
import { useSelector } from 'react-redux';

export default function Words() {

  const words = useSelector(state => state.words);

  return (
    <div style={{border: '1px solid yellow', padding: 20}}>
        <p>Words</p>
        {Object.keys(words).map(word => {
          if ( words[word].isFound === true ) {
            return (
              <span>{word}</span>
            )
          }
        })}
    </div>
  );
}
