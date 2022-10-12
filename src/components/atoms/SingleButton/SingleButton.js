import React from 'react';

import { Button } from '@mui/material';
import { Autorenew } from '@mui/icons-material';

export default function SingleButton({ action, handleClick }) {

  if ( action === 'Delete' ) {
    return (
      <Button
        variant="outlined"
        onClick={handleClick}
      >
        Delete
      </Button>
    )
  }

  if ( action === 'Shuffle' ) {
    return (
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{ width: '50px', padding: '0', minWidth: '50px' }}
      >
        <Autorenew />
      </Button>
    )
  }

  if ( action === 'Enter' ) {
    return (
      <Button
        variant="outlined"
        onClick={handleClick}
      >
        Enter
      </Button>
    )
  }

}