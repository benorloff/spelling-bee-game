import React from "react";

import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function HowToPlayModal({ open, handleClose }) {
    return(
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                How To Play
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
                <strong>Create words using letters from the hive.</strong>
                <ul>
                    <li>Words must contain at least 4 letters.</li>
                    <li>Words must include the center letter.</li>
                    <li>Our word list does not include words that are hyphenated or proper nouns.</li>
                    <li>No cussing either, sorry.</li>
                    <li>Letters can be used more than once.</li>
                </ul>
                <strong>Score points to increase your rating.</strong>
                <ul>
                    <li>4-letter words are worth 1 point each.</li>
                    <li>Longer words earn 1 point per letter.</li>
                    <li>Some puzzles include at least one “pangram” which uses every letter. These are worth 7 extra points!</li>
                </ul>
            </DialogContent>
        </Dialog>

    )
}