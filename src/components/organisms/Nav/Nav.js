import React from "react";

import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import { Hive } from "@mui/icons-material";

export default function Nav() {
    return(
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar>
                    <Hive></Hive>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                        Spelling Bee
                    </Typography>
                    <Typography sx={{ mr: 2 }}>
                        Rankings
                    </Typography>
                    <Typography>
                        How To Play
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )

};