import React, {useEffect, useState} from "react";
import {Box, keyframes, Typography, useMediaQuery} from "@mui/material";
import {darkTheme} from "../Theme";
import NavBar from "../nav/NavBar";
import NavButton from "../nav/NavButton";
import background3 from "../../static/background3.jpg";
import './HomePage.css'

const rainbowAnimation = keyframes`
  to {
    background-position: 4500vh;
  }
`;

const useRainbowAnimation = (interval) => {
    const [animationPlayState, setAnimationPlayState] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimationPlayState((prevState) => !prevState);
        }, interval);
        return () => clearInterval(intervalId);
    }, [interval]);

    return animationPlayState;
};

export const navOptions = ['Home', 'About', 'Code'].reverse();

export default function HomePage() {
    const smallScreen = useMediaQuery(darkTheme.breakpoints.up('sm'));
    const animationPlayState = useRainbowAnimation(smallScreen ? 2000 : 2200);

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${background3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh'
                }}
            >
                {smallScreen ? <NavBar textColor="#ee7337"/> : <NavButton buttonColor="#ee7337"/>}

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
    );
}
