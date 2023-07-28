import {Button, Grid, Link, Typography} from "@mui/material";
import React from "react";
import {navOptions} from "./home/HomePage";

export default function NavBar({textColor}) {
    return (
        <Grid container sx={{paddingTop: '.5rem'}}>
            <Grid item xs={9}>
            </Grid>
            <Grid item xs={3}>
                <Grid container direction="row-reverse">
                    {navOptions.map((option, index) => {
                        return (
                            <Grid item xs={3} key={index}>
                                <Button>
                                    <Link href={`/${option.toLowerCase()}`}>
                                        <Typography variant="h6" component="div"
                                                    sx={{flexGrow: 1, color: textColor}}>
                                            {option}
                                        </Typography>
                                    </Link>
                                </Button>
                            </Grid>)
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
}

