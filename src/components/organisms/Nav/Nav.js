import React, { useState } from "react";

import RankingsModal from "../Modals/RankingsModal";
import HowToPlayModal from "../Modals/HowToPlayModal";

import { Container, AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Hive } from "@mui/icons-material";

export default function Nav() {

    const [modal, setModal] = useState({
        type: '',
        open: false,
    })

    const handleOpen = (type) => {
        setModal({
            type: type,
            open: true,
        })
    };

    const handleClose = () => {
        setModal({
            type: '',
            open: false,
        })
    };

    return(
        <>
            <AppBar position="sticky">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Hive></Hive>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                            Spelling Bee
                        </Typography>
                        <Button 
                            sx={{ mr: 2, textTransform: 'none' }}
                            onClick={() => {handleOpen('rankings')}}
                        >
                            Rankings
                        </Button>
                        <Button
                            onClick={() => {handleOpen('how-to-play')}}
                            sx={{ textTransform: 'none' }}
                        >
                            How To Play
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
            { ( modal.open && modal.type === 'rankings' ) && 
                <RankingsModal open={modal.open} handleClose={handleClose} />
            }
            { ( modal.open && modal.type === 'how-to-play' ) && 
                <HowToPlayModal open={modal.open} handleClose={handleClose} />
            }
        </>
    )

};