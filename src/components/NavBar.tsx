import React from "react";
import {AppBar, Grid, Toolbar, Typography} from "@mui/material";

export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Samuel
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Grid container direction="row-reverse">
                            <Grid item>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    Work
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
