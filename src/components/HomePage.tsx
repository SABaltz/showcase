import React, {useEffect, useState} from "react";
import {Box, Button, Grid, keyframes, MenuItem, Typography, useMediaQuery} from "@mui/material";
import './HomePage.css'
import {darkTheme} from "./Theme";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';

let image = require('../static/background3.jpg')
export default function HomePage() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const smallScreen = useMediaQuery(darkTheme.breakpoints.up('sm'));
    const [animationPlayState, setAnimationPlayState] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => setAnimationPlayState((prevState) => !prevState), 2000)
        return () => clearInterval(interval);
    }, []);

    let navOptions = ['About', 'Work', 'Code'].reverse()
    let rainbowAnimation = keyframes`
      to {
        background-position: 4500vh;
      }
    `;
    return (
        <Box
            sx={{
                backgroundImage: 'url(' + image + ')',
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100vw',
                height: '100vh'
            }}>

            {smallScreen ? <Grid container sx={{paddingTop: '.5rem'}}>
                    <Grid item xs={9}>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container direction="row-reverse">
                            {navOptions.map((option, index) => {
                                return (
                                    <Grid item xs={4} key={index}>
                                        <Button>
                                            <Typography variant="h6" component="div" sx={{flexGrow: 1, color: '#ee7337'}}>
                                                {option}
                                            </Typography>
                                        </Button>
                                    </Grid>)
                            })}
                        </Grid>
                    </Grid>
                </Grid> :
                <>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon></MenuIcon>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>About</MenuItem>
                        <MenuItem onClick={handleClose}>Work</MenuItem>
                        <MenuItem onClick={handleClose}>Code</MenuItem>
                    </Menu>
                </>
            }


            <Typography
                variant="h1"
                sx={{
                    marginTop: smallScreen ? '12%' : '30%',
                    marginLeft: smallScreen ? '30%' : '8%',
                    transform: 'rotate(-5deg)',
                    fontFamily: 'Circuit2',
                    backgroundImage: `linear-gradient(to right, #ee7337, #ee7337, #ee7337, #ee7337, #ee7337, #ee7337, #ee7337, #ee7337, #ee7337, #ffffff ,#ee7337);`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: `${animationPlayState ? rainbowAnimation : ''} 35s linear infinite`
                }}
            >
                Samuel Baltz
            </Typography>
        </Box>
    )
}
