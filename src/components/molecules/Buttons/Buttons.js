import React from 'react';

import { Stack, Button, IconButton } from '@mui/material';
import { Autorenew } from '@mui/icons-material';

export default function Buttons() {

  return (
    <div style={{border: '1px solid yellow'}}>
        <p>Buttons</p>
        <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="outlined">Delete</Button>
            <IconButton aria-label="shuffle letters" variant="outlined">
                <Autorenew />
            </IconButton>
            <Button variant="outlined">Enter</Button>
        </Stack>
    </div>
  );
}
