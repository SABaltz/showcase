import React from "react";
import {AppBar, Grid, Link, Toolbar, Typography} from "@mui/material";
import {FaGithub, FaNpm} from 'react-icons/fa';
import {navOptions} from "./home/HomePage";

export default function Footer() {
    let navOptionsFooter = ['Contact', ...navOptions].reverse()

    const recipientEmail = 'samuelabaltz@gmail.com';
    const subject = '';
    const body = '';
    const mailToLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const handleEmailClick = () => {
        window.location.href = mailToLink;
    };


    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    {navOptionsFooter.map((option) => (
                        <Grid item xs={4} md={2}>
                            {option === 'Contact' ? <Typography variant='h6' component="div" sx={{flexGrow: 1}}
                                                                onClick={handleEmailClick}>{option}</Typography> :

                                <Typography variant='h6' component="div" sx={{flexGrow: 1}}>
                                    <Link href={option === 'Home' ? '/' : `/${option.toLowerCase()}`}
                                          sx={{color: 'white'}}>
                                        {option}
                                    </Link>
                                </Typography>
                            }

                        </Grid>
                    ))}
                    <Grid item xs={2} md={1}>
                        <Link color={'inherit'} href={`https://github.com/SABaltz`}>
                            <FaGithub/>
                        </Link>
                    </Grid>
                    <Grid item xs={2} md={1}>
                        <Link color={'inherit'} href={`https://www.npmjs.com/~sabaltz`}>
                            <FaNpm/>
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
