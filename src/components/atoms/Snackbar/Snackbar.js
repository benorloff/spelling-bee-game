import React from "react";
import { useSelector } from "react-redux";

import { Snackbar } from "@mui/material";

export default function Snackbar() {

    const snackbarOpen = useSelector(state => state.snackbar.open);


    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >

        </Snackbar>
    )

}