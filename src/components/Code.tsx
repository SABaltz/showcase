import React from 'react'
import {Box, Divider, Typography, useMediaQuery} from "@mui/material";
import {darkTheme} from "./Theme";
import NavBar from "./nav/NavBar";
import NavButton from "./nav/NavButton";
import {FaAngular, FaNode, FaNpm, FaPython, FaReact} from "react-icons/fa";
import {FaR} from "react-icons/fa6";
import JavascriptIcon from '@mui/icons-material/Javascript';

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
                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>Languages</Typography></Divider>
                <FaPython/>
                <FaR/>
                <JavascriptIcon/>
                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>FrontEnd</Typography></Divider>
                <FaReact/>
                <FaAngular/>
                <FaNpm/>
                {/*Material Ui*/}
                {/*SemanticCss*/}

                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>BackEnd</Typography></Divider>
                <FaNode/>
                {/*Express*/}
                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>Database</Typography></Divider>
                
                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>Linux</Typography></Divider>
                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>Hardware</Typography></Divider>
            </Box>
        </>
    )
}
