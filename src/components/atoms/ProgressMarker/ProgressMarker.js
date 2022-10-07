import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Grid } from "@mui/material";

export default function ProgressMarker() {

    const score = useSelector(state => state.score);
    const rank = useSelector(state => state.rank);

    const [percent, setPercent] = useState(0);

    const ranks = [
        'Beginner',
        'Good Start',
        'Moving Up',
        'Good',
        'Solid',
        'Nice',
        'Great',
        'Amazing',
        'Genius', 
    ];

    useEffect(() => {
        setPercent(ranks.indexOf(rank) * 12.5);
    },[rank])

    return (
        <Grid item xs className="progress-marker" style={{ left: `${percent}%` }}>
          <span className="progress-value">{score}</span>
        </Grid>
    )

}