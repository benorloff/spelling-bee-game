import React from 'react';
import SingleButton from '../../atoms/SingleButton';

import { Stack } from '@mui/material';

export default function Buttons() {

  return (
    <div style={{border: '1px solid yellow', padding: 20}}>
        <p>Buttons</p>
        <Stack direction="row" spacing={2} justifyContent="center">
          <SingleButton action="Delete" />
          <SingleButton action="Shuffle" />
          <SingleButton action="Enter" />
        </Stack>
    </div>
  );
}
