import React from "react";
import {Box, Grid, Typography, useTheme} from "@mui/material";

export default function Portrait() {
    let theme = useTheme()
    return (
        <Box sx={{
            backgroundColor: theme.palette.secondary.main,
            width: '100vw',
            height: '50rem',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <Grid container>
                <Grid item xs={6}>
                    <Box
                        component="img"
                        sx={{
                            height: '40rem',
                            width: '30rem',
                        }}
                        alt="Portrait"
                        src={require('../../src/static/IMG_3764.png')}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography>Born in Bash</Typography>
                </Grid>
            </Grid>

        </Box>
    )
}