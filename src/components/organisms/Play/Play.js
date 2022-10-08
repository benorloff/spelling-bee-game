import React  from 'react';

import { Grid } from '@mui/material';

import Guess from '../../molecules/Guess';
import Hive from '../../molecules/Hive';
import Buttons from '../../molecules/Buttons';

export default function Play() {
    return (
        <Grid className='controls'>
            <p>Play component</p>
            <Guess></Guess>
            <Hive></Hive>
            <Buttons></Buttons>
        </Grid>
    )
}

