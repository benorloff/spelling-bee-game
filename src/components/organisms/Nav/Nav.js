import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import RankingsModal from "../Modals/RankingsModal";
import HowToPlayModal from "../Modals/HowToPlayModal";
import GeniusModal from "../Modals/GeniusModal";

import styled from "@emotion/styled";
import { Container, AppBar, Toolbar, Typography, Switch, IconButton, Menu, MenuItem } from "@mui/material";

import { Menu as MenuIcon } from "@mui/icons-material";

export default function Nav({ theme, toggleTheme }) {

    const rank = useSelector(state => state.rank);

    const [modal, setModal] = useState({
        type: '',
        open: false,
    });
    
    const [checked, setChecked] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

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

    const handleChange = (event) => {
        setChecked(event.target.checked);
        toggleTheme();
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if ( rank === 'Genius' ) {
            handleOpen('genius')
        }
    },[rank])

    const ThemeSwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
          margin: 1,
          padding: 0,
          transform: 'translateX(6px)',
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
              )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
          width: 32,
          height: 32,
          '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
          },
        },
        '& .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          borderRadius: 20 / 2,
        },
      }));

    return(
        <>
            <AppBar position="sticky">
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                            Spelling Bee
                        </Typography>
                        <ThemeSwitch 
                            aria-label="Switch Theme" 
                            checked={checked} 
                            onChange={handleChange}
                            sx={{ mr: 2 }}
                        />
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="nav-menu"
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="nav-menu"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={() => {handleOpen('rankings')}}>Rankings</MenuItem>
                            <MenuItem onClick={() => {handleOpen('how-to-play')}}>How To Play</MenuItem>
                        </Menu>
                    </Toolbar>
                </Container>
            </AppBar>
            { ( modal.open && modal.type === 'rankings' ) && 
                <RankingsModal open={modal.open} handleClose={handleClose} />
            }
            { ( modal.open && modal.type === 'how-to-play' ) && 
                <HowToPlayModal open={modal.open} handleClose={handleClose} />
            }
            { ( modal.open && modal.type === 'genius' ) &&
                <GeniusModal open={modal.open} handleClose={handleClose} />
            }
        </>
    )

};