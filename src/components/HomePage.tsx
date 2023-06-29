import React from "react";
import {Box, Button, Grid, Typography} from "@mui/material";

let image = require('../static/background3.jpg')
export default function HomePage() {
    let navOptions = ['About', 'Work', 'Code'].reverse()

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
                    {/*<Typography variant="h5" component="div" sx={{flexGrow: 1, paddingLeft: '1rem', color: '#1849a8'}}>*/}
                    {/*    Samuel Baltz*/}
                    {/*</Typography>*/}
                </Grid>
                <Grid item xs={3}>
                    <Grid container direction="row-reverse">
                        {navOptions.map((option, index) => {
                            return (
                                <Grid item xs={4} key={index}>
                                    <Button>
                                        <Typography variant="h6" component="div" sx={{flexGrow: 1, color: '#dc9b23'}}>
                                            {option}
                                        </Typography>
                                    </Button>
                                </Grid>)
                        })}
                    </Grid>
                </Grid>
            </Grid>

            {/*<Typography variant={'h1'} sx={{textColor: 'linear-gradient(to right, #4880EC, #019CAD)'}}>Test</Typography>*/}
            <Typography variant={'h1'} sx={{
                backgroundImage: `-webkit-linear-gradient(0deg, #4880EC, #019CAD)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>Test</Typography>
        </Box>
    )
}
