import React, {useEffect, useState} from "react";
import {Box, Button, Grid, keyframes, Link, Typography, useMediaQuery} from "@mui/material";
import './HomePage.css'
import {darkTheme} from "../Theme";
import NavButton from "../NavButton";

let image = require('../../static/background3.jpg')
export default function HomePage() {
    const smallScreen = useMediaQuery(darkTheme.breakpoints.up('sm'));
    const [animationPlayState, setAnimationPlayState] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    let navOptions = ['About', 'Work', 'Code'].reverse()
    let rainbowAnimation = keyframes`
      to {
        background-position: 4500vh;
      }
    `;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const interval = setInterval(() => setAnimationPlayState((prevState) => !prevState), 2000)
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <Box
                sx={{
                    backgroundImage: 'url(' + image + ')',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh'
                }}>

                {smallScreen ?
                    <Grid container sx={{paddingTop: '.5rem'}}>
                        <Grid item xs={9}>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid container direction="row-reverse">
                                {navOptions.map((option, index) => {
                                    return (
                                        <Grid item xs={4} key={index}>
                                            <Button>
                                                <Link href={`/${option.toLowerCase()}`}>
                                                    <Typography variant="h6" component="div"
                                                                sx={{flexGrow: 1, color: '#ee7337'}}>
                                                        {option}
                                                    </Typography>
                                                </Link>
                                            </Button>
                                        </Grid>)
                                })}
                            </Grid>
                        </Grid>
                    </Grid> :
                    <NavButton/>
                }


                <Typography
                    variant="h1"
                    sx={{
                        marginTop: smallScreen ? '12%' : '30%',
                        marginLeft: smallScreen ? '30%' : '8%',
                        transform: 'rotate(-5deg)',
                        fontFamily: 'Circuit2',
                        backgroundImage: `linear-gradient(to right, #ee7337 99%, #ffffff 1%);`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: `${animationPlayState ? rainbowAnimation : ''} ${smallScreen ? '120s' : '140s'} linear infinite`
                    }}
                >
                    Samuel Baltz
                </Typography>
            </Box>
        </>
    )
}
