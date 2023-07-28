import React, {useEffect, useState} from "react";
import {Box, keyframes, Typography, useMediaQuery} from "@mui/material";
import './HomePage.css'
import {darkTheme} from "../Theme";
import NavBar from "../nav/NavBar";
import NavButton from "../nav/NavButton";

let image = require('../../static/background3.jpg')

export const navOptions = ['Home', 'About', 'Code',].reverse()

export default function HomePage() {
    const smallScreen = useMediaQuery(darkTheme.breakpoints.up('sm'));
    const [animationPlayState, setAnimationPlayState] = useState(true);


    let rainbowAnimation = keyframes`
      to {
        background-position: 4500vh;
      }
    `;


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
                    <NavBar textColor={'#ee7337'}/> :
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
