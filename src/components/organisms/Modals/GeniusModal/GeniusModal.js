import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Button, Stack, Typography } from "@mui/material";
import { Close, School } from "@mui/icons-material";

export default function GeniusModal({ open, handleClose }) {

    const words = useSelector(state => state.words.list);
    const score = useSelector(state => state.score);

    const [wordsFoundCount, setWordsFoundCount] = useState(0);

    useEffect(() => {
        let count = 0;
        Object.keys(words).forEach((word,i) => {
            if ( words[word].isFound ) {
                count++;
            }
        });
        setWordsFoundCount(count);
    },[])



    return(
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                Genius!
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
                <Stack 
                    direction='column'
                    justifyContent={'center'}
                    alignItems={'center'}
                    spacing={2}
                >
                    <School sx={{ fontSize: '60px' }} />
                    <Typography>
                        You've reached the highest rank, with <strong>{wordsFoundCount}</strong> words and <strong>{score}</strong> points.
                    </Typography>
                </Stack>
            </DialogContent>
            <DialogActions sx={{ mb: 4 }} >
                <Button sx={{ width: '120px', m: 'auto' }} onClick={handleClose} >Keep Playing</Button>
            </DialogActions>
        </Dialog>
    )
}