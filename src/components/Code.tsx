import React from 'react'
import {Box, Divider, Typography, useMediaQuery} from "@mui/material";
import {darkTheme} from "./Theme";
import NavBar from "./nav/NavBar";
import NavButton from "./nav/NavButton";
import {FaAngular, FaCss3, FaHtml5, FaLinux, FaNode, FaNpm, FaPython, FaReact, FaYarn} from "react-icons/fa";
import {FaR} from "react-icons/fa6";
import JavascriptIcon from '@mui/icons-material/Javascript';


let textColor = '#dcdcdc'

let DividerTitle = ({text}) => {
    return (
        <Divider><Typography variant={'h1'}>{text}</Typography></Divider>
    )
}

let TechName = ({text, icon}) => {
    return (
        <Typography variant={'h6'}>{icon}{text}</Typography>
    )
}

export default function Code() {
    let linearStart = '#232526'

    const smallScreen = useMediaQuery(darkTheme.breakpoints.up('sm'));
    return (
        <>
            {smallScreen ?
                <Box sx={{backgroundColor: linearStart}}>
                    <NavBar textColor={textColor}/>
                </Box>
                :
                <Box sx={{backgroundColor: linearStart}}>
                    <NavButton buttonColor={textColor}/>
                </Box>
            }
            <Box sx={{
                background: `linear-gradient(to bottom, ${linearStart}, #414345 );`,
            }}>

                <DividerTitle text={'Languages'}/>

                <TechName text={'Python'} icon={<FaPython color={textColor}/>}/>
                <TechName text={'R Statistics'} icon={<FaR color={textColor}/>}/>
                <TechName text={'JavaScript'} icon={<JavascriptIcon/>}/>
                <TechName text={'Typescript'} icon={''}/>
                <TechName text={'CSS'} icon={<FaCss3 color={textColor}/>}/>
                <TechName text={'HTML'} icon={<FaHtml5 color={textColor}/>}/>

                <DividerTitle text={'Front End'}/>
                <TechName text={'React'} icon={<FaReact color={textColor}/>}/>
                <TechName text={'Angular'} icon={<FaAngular color={textColor}/>}/>
                <TechName text={'NPM'} icon={<FaNpm color={textColor}/>}/>
                <TechName text={'Yarn'} icon={<FaYarn color={textColor}/>}/>
                <TechName text={'Material Ui'} icon={''}/>
                <TechName text={'Semantic Css'} icon={''}/>

                <DividerTitle text={'Back End'}/>
                <TechName text={'NodeJS'} icon={<FaNode color={textColor}/>}/>
                <TechName text={'Express'} icon={''}/>

                <DividerTitle text={'Databases'}/>
                <TechName text={'MongoDB'} icon={''}/>
                <TechName text={'PostGres'} icon={''}/>
                <TechName text={'MySQL'} icon={''}/>

                <DividerTitle text={'Operating Systems'}/>
                <TechName text={'Linux'} icon={<FaLinux color={textColor}/>}/>
                <TechName text={'Debian'} icon={''}/>
                <TechName text={'Ubuntu'} icon={''}/>
                <TechName text={'Tails'} icon={''}/>
                <TechName text={'Kali'} icon={''}/>
            </Box>
        </>
    )
}
