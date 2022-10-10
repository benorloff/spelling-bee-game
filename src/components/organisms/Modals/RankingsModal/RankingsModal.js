import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function RankingsModal({ open, handleClose }) {

    const [ranks, setRanks] = useState({});

    const maxScore = useSelector(state => state.words.maxScore);

    useEffect(() => {
        const ranks = {
          'Beginner': 0,
          'Good Start': Math.floor(maxScore * 0.1),
          'Moving Up': Math.floor(maxScore * 0.2),
          'Good': Math.floor(maxScore * 0.3),
          'Solid': Math.floor(maxScore * 0.4),
          'Nice': Math.floor(maxScore * 0.5),
          'Great': Math.floor(maxScore * 0.6),
          'Amazing': Math.floor(maxScore * 0.7),
          'Genius': Math.floor(maxScore * 0.8),
        }
        setRanks(ranks);
      },[maxScore]);

    return(
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                Rankings
                <IconButton 
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography variant="body1">
                    Ranks are based on a percentage of possible points in a puzzle. The minimum scores to reach each rank for the current puzzle are:
                </Typography>
                <br />
                {Object.keys(ranks).map(rank => {
                    return(
                        <>
                            <span><strong>{rank}</strong> ({ranks[rank]})</span>
                            <br />
                        </>
                    )
                })}
            </DialogContent>
        </Dialog>

    )
}