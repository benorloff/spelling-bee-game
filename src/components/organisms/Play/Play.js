import React  from 'react';

import Guess from '../../molecules/Guess';
import Hive from '../../molecules/Hive';
import Buttons from '../../molecules/Buttons';

export default function Play() {
    return (
        <div style={{border: '1px solid green', padding: 20}}>
            <p>Play component</p>
            <Guess></Guess>
            <Hive></Hive>
            <Buttons></Buttons>
        </div>
    )
}

