import React from 'react';

import { Button } from '@mui/material';

export default function HiveCell({ letter, type }) {

  return (
    <Button variant="outlined">
      {letter}{ type === 'isPrimary' ? '*' : ''}
    </Button>
  );
}