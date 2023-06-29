import React, {useEffect, useState} from "react";
import {Box, Button, Grid, keyframes, Typography} from "@mui/material";

let image = require('../static/background3.jpg')
export default function HomePage() {

    const [animationPlayState, setAnimationPlayState] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => setAnimationPlayState((prevState) => !prevState), 1500)
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

            <Grid container sx={{paddingTop: '.5rem'}}>
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
            </Grid>

            <Typography
                variant="h1"
                sx={{
                    marginTop: '14rem',
                    transform: 'rotate(-5deg)',
                    paddingLeft: '32rem',
                    backgroundImage: `linear-gradient(to right, #ee7337, #ee7337,#ee7337,#ee7337,#ee7337,#ee7337,#ee7337,#ee7337,#ffffff,#ee7337 ,#ee7337);`,
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
