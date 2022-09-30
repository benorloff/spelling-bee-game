import React  from 'react';

import Guess from '../../molecules/Guess';
import Hive from '../../molecules/Hive';
import Buttons from '../../molecules/Buttons';

export default function Play() {
    return (
        <div>
            <h1>This is the Play component.</h1>
            <Guess></Guess>
            <Hive></Hive>
            <Buttons></Buttons>
        </div>
    )
}

