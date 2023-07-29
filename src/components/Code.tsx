import React from 'react';
import {Box, Divider, Grid, Typography, useMediaQuery} from "@mui/material";
import {FaAngular, FaCss3, FaHtml5, FaLinux, FaNpm, FaPython, FaReact, FaYarn} from "react-icons/fa";
import JavascriptIcon from '@mui/icons-material/Javascript';
import NavBar from "./nav/NavBar";
import NavButton from "./nav/NavButton";
import {darkTheme} from "./Theme";

const textColor = '#dcdcdc';
const linearStart = '#232526';

const DividerWithTitle = ({text}) => {
    return (
        <Divider>
            <Typography variant="h2">{text}</Typography>
        </Divider>
    );
};

const TechItem = ({text, icon}) => {
    return (
        <Typography variant="h6">
            {icon}&nbsp;&nbsp;&nbsp;{text}
        </Typography>
    );
};

const technologies = [
    {text: 'Python', icon: <FaPython color={textColor}/>},
    {text: 'R Statistics', icon: <FaReact color={textColor}/>},
    {text: 'JavaScript', icon: <JavascriptIcon/>},
    {text: 'Typescript', icon: ''},
    {text: 'CSS', icon: <FaCss3 color={textColor}/>},
    {text: 'HTML', icon: <FaHtml5 color={textColor}/>},
    {text: 'Bash', icon: ''},
];

const frontEndTechnologies = [
    {text: 'React', icon: <FaReact color={textColor}/>},
    {text: 'Angular', icon: <FaAngular color={textColor}/>},
    {text: 'NPM', icon: <FaNpm color={textColor}/>},
    {text: 'Yarn', icon: <FaYarn color={textColor}/>},
    {text: 'Material Ui', icon: ''},
    {text: 'Semantic Css', icon: ''},
];

const backEndTechnologies = [
    {text: 'NodeJS', icon: <FaReact color={textColor}/>},
    {text: 'Express', icon: ''},
];

const databaseTechnologies = [
    {text: 'MongoDB', icon: ''},
    {text: 'PostGres', icon: ''},
    {text: 'MySQL', icon: ''},
];

const operatingSystems = [
    {text: 'Linux', icon: <FaLinux color={textColor}/>},
    {text: 'Debian', icon: ''},
    {text: 'Ubuntu', icon: ''},
    {text: 'Tails', icon: ''},
    {text: 'Kali', icon: ''},
];

export default function Code() {
    const smallScreen = useMediaQuery(darkTheme.breakpoints.up('sm'));

    return (
        <>
            <Box sx={{backgroundColor: linearStart}}>
                {smallScreen ? <NavBar textColor={textColor}/> : <NavButton buttonColor={textColor}/>}
            </Box>
            <Box sx={{background: `linear-gradient(to bottom, ${linearStart}, #414345 );`}}>
                <DividerWithTitle text={'Languages'}/>
                <Grid container>
                    {technologies.map(({text, icon}, index) => (
                        <Grid key={index} item xs={6} md={4}>
                            <TechItem text={text} icon={icon}/>
                        </Grid>
                    ))}
                </Grid>

                <DividerWithTitle text={'Front End'}/>
                <Grid container>
                    {frontEndTechnologies.map(({text, icon}, index) => (
                        <Grid key={index} item xs={6} md={4}>
                            <TechItem key={index} text={text} icon={icon}/>
                        </Grid>
                    ))}
                </Grid>

                <DividerWithTitle text={'Back End'}/>
                <Grid container>
                    {backEndTechnologies.map(({text, icon}, index) => (
                        <Grid key={index} item xs={6} md={4}>
                            <TechItem key={index} text={text} icon={icon}/>
                        </Grid>
                    ))}
                </Grid>

                <DividerWithTitle text={'Databases'}/>
                <Grid container>
                    {databaseTechnologies.map(({text, icon}, index) => (
                        <Grid key={index} item xs={6} md={4}>
                            <TechItem key={index} text={text} icon={icon}/>
                        </Grid>
                    ))}
                </Grid>


                <DividerWithTitle text={'Operating Systems'}/>
                <Grid container>
                    {operatingSystems.map(({text, icon}, index) => (
                        <Grid key={index} item xs={6} md={4}>
                            <TechItem key={index} text={text} icon={icon}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
