import React from "react";
import {AppBar, Grid, Toolbar, Typography} from "@mui/material";

export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item xs={9}>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Samuel
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container direction="row-reverse">
                            <Grid item xs={6}>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    Work
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    About
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
