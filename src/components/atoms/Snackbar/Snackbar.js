import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearSnackbar } from "../../../store/actions/gameActions";

import { Snackbar } from "@mui/material";

export default function GameSnackbar() {

    const dispatch = useDispatch();

    const snackbarOpen = useSelector(state => state.snackbar.open);
    const snackbarMessage = useSelector(state => state.snackbar.message);

    const handleClose = () => {
        dispatch(clearSnackbar());
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={snackbarOpen}
            autoHideDuration={2000}
            onClose={handleClose}
            aria-describedby='game-snackbar'
            message={snackbarMessage}
        />
    )

}