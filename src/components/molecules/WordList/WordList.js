import React from 'react';
import { useSelector } from 'react-redux';

import { Accordion, AccordionSummary, AccordionDetails, Grid, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export default function WordList() {

  const words = useSelector(state => state.words.list);

  let foundWordCount = 0;

  Object.keys(words).forEach((word,i) => {
    if ( words[word].isFound ) {
      foundWordCount++;
    }
  })

  return (
    <div style={{border: '1px solid yellow', padding: 20}}>
        <p>Words</p>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="wordlist-content"
            id="wordlist-header"
          >
            <Typography>You have found {foundWordCount} words.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container columns={4} rowSpacing={2} >
              {Object.keys(words).map((word,i) => {
                if ( words[word].isFound ) {
                  return (
                    <Grid key={i} item xs={1} className="wordlist-word">{word}</Grid>
                  )
                }
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
    </div>
  )
}
