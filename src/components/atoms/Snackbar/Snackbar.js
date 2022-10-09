import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearSnackbar } from "../../../store/actions/gameActions";

import { Snackbar, Alert } from "@mui/material";

export default function GameSnackbar() {

    const dispatch = useDispatch();

    const snackbarOpen = useSelector(state => state.snackbar.open);
    const snackbarMessage = useSelector(state => state.snackbar.message);
    const snackbarSeverity = useSelector(state => state.snackbar.severity);

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
            transitionDuration={0}
            aria-describedby='game-snackbar'
        >
            <Alert className="snackbar" onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                {snackbarMessage}
            </Alert>
        </Snackbar>
    )

}