import React from 'react';
import { useSelector } from 'react-redux';

export default function Words() {

  const words = useSelector(state => state.words.list);

  return (
    <div style={{border: '1px solid yellow', padding: 20}}>
        <p>Words</p>
        {Object.keys(words).map((word,i) => {
          if ( words[word].isFound ) {
            return (
              <div key={i} style={{fontWeight: words[word].isPangram ? 'bold' : ''}}>{word}</div>
            )
          }
        })}
    </div>
  );
}
