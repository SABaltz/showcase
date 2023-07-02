import React from "react";
import {AppBar, Grid, Link, Toolbar, Typography} from "@mui/material";
import {FaGithub, FaNpm} from 'react-icons/fa';

export default function Footer() {

    let navOptions = ['Home', 'About', 'Work', 'Code', 'Contact']

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    {navOptions.map((option) => (
                        <Grid item xs={1}>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                <Link href={option === 'Home' ? '/' : `/${option.toLowerCase()}`} sx={{color: 'white'}}>
                                    {option}
                                </Link>
                            </Typography>
                        </Grid>
                    ))}
                    <Grid item xs={3}>
                        <FaGithub></FaGithub>
                    </Grid>
                    <Grid item xs={3}>
                        <FaNpm/>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>
    )
}
