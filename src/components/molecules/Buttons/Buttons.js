import React from 'react';
import SingleButton from '../../atoms/SingleButton';

import { Grid, Stack } from '@mui/material';

export default function Buttons() {

  return (
    <Grid item xs >
        <Stack direction="row" spacing={2} justifyContent="center">
          <SingleButton action="Delete" />
          <SingleButton action="Shuffle" />
          <SingleButton action="Enter" />
        </Stack>
    </Grid>
  );
}
