import React  from 'react';

import { Grid } from '@mui/material';

import Guess from '../../molecules/Guess';
import Hive from '../../molecules/Hive';
import Buttons from '../../molecules/Buttons';

export default function Play() {
    return (
        <Grid container className='controls-box' sx={{ mt: 4 }}>
            <Grid container item className='controls'>
                <Guess></Guess>
                <Hive></Hive>
                <Buttons></Buttons>
            </Grid>
        </Grid>
    )
}

