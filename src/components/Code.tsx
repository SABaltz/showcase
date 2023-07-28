import React from 'react'
import {Box, Divider, Typography, useMediaQuery} from "@mui/material";
import {darkTheme} from "./Theme";
import NavBar from "./nav/NavBar";
import NavButton from "./nav/NavButton";
import {FaAngular, FaCss3, FaHtml5, FaLinux, FaNode, FaNpm, FaPython, FaReact, FaYarn} from "react-icons/fa";
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
                <FaCss3/>
                <FaHtml5/>
                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>FrontEnd</Typography></Divider>
                <FaReact/>
                <FaAngular/>
                <FaNpm/>
                <FaYarn/>
                {/*Material Ui*/}
                {/*SemanticCss*/}

                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>BackEnd</Typography></Divider>
                <FaNode/>
                {/*Express*/}
                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>Database</Typography></Divider>

                <Divider sx={{fontSize: '5rem'}}><Typography variant={'h1'}>Linux</Typography></Divider>
                <FaLinux/>
                {/*Debian*/}
                {/*Tails*/}
                {/*Ubuntu*/}
                {/*Kali*/}
            </Box>
        </>
    )
}
