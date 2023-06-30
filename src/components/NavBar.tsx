import React from "react";
import {AppBar, Grid, Toolbar, Typography} from "@mui/material";

export default function NavBar() {

    let navOptions = ['About', 'Work', 'Code.tsx']

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item xs={9}>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Samuel Baltz
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container direction="row-reverse">
                            {navOptions.map((option, index) => {
                                return (
                                    <Grid item xs={4} key={index}>
                                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                            {option}
                                        </Typography>
                                    </Grid>)
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
