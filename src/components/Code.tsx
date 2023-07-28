import React from 'react'
import {Box, Divider, Typography, useMediaQuery} from "@mui/material";
import {darkTheme} from "./Theme";
import NavBar from "./nav/NavBar";
import NavButton from "./nav/NavButton";

export default function Code() {
    let linearStart = '#232526'
    const smallScreen = useMediaQuery(darkTheme.breakpoints.up('sm'));
    return (
        <>
            {smallScreen ?
                <Box sx={{backgroundColor: linearStart}}>
                    <NavBar textColor={'#dcdcdc'}/>
                </Box>
                :
                <Box sx={{backgroundColor: linearStart}}>
                    <NavButton buttonColor={'#dcdcdc'}/>
                </Box>
            }
            <Box sx={{
                background: `linear-gradient(to bottom, ${linearStart}, #414345 );`,
            }}>
                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>FrontEnd</Typography></Divider>
                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>BackEnd</Typography></Divider>
                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>Database</Typography></Divider>
                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>Linux</Typography></Divider>
                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>Hardware</Typography></Divider>
            </Box>
        </>
    )
}
