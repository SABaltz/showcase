import React from 'react';
import {Box, Divider, Grid, Link, Typography, useMediaQuery} from "@mui/material";
import {FaAngular, FaCss3, FaHtml5, FaNpm, FaPython, FaReact, FaYarn} from "react-icons/fa";
import JavascriptIcon from '@mui/icons-material/Javascript';
import NavBar from "./nav/NavBar";
import NavButton from "./nav/NavButton";
import {darkTheme} from "./Theme";
import {centerGrid} from "./About";

const textColor = '#dcdcdc';
const linearStart = '#232526';

const DividerWithTitle = ({text}) => {
    return (
        <Divider>
            <Typography variant="h2">{text}</Typography>
        </Divider>
    );
};

const TechItem = ({text, icon, href}) => {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <Typography variant="h6" sx={{...centerGrid, padding: '1.5rem 1.5rem'}}>
                {icon}&nbsp;&nbsp;&nbsp;{text}
            </Typography>
        </Link>
    );
};

const technologies = [
    {text: 'Python', icon: <FaPython color={textColor}/>, link: 'https://www.python.org/'},
    {text: 'R Statistics', icon: '', link: 'https://www.r-project.org/'},
    {
        text: 'JavaScript',
        icon: <JavascriptIcon sx={{fontSize: '2.5rem'}}/>,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {text: 'Typescript', icon: '', link: 'https://www.typescriptlang.org/'},
    {text: 'CSS', icon: <FaCss3 color={textColor}/>, link: 'https://www.w3.org/Style/CSS/'},
    {text: 'HTML', icon: <FaHtml5 color={textColor}/>, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
    // {text: 'Bash', icon: '', link: 'https://www.gnu.org/software/bash/'},
];

const frontEndTechnologies = [
    {text: 'React', icon: <FaReact color={textColor}/>, link: 'https://reactjs.org/'},
    {text: 'Angular', icon: <FaAngular color={textColor}/>, link: 'https://angular.io/'},
    {text: 'NPM', icon: <FaNpm color={textColor}/>, link: 'https://www.npmjs.com/'},
    {text: 'Yarn', icon: <FaYarn color={textColor}/>, link: 'https://yarnpkg.com/'},
    {text: 'Material Ui', icon: '', link: 'https://material-ui.com/'},
    {text: 'Semantic Ui', icon: '', link: 'https://semantic-ui.com/'},
];

const backEndTechnologies = [
    {text: 'NodeJS', icon: <FaReact color={textColor}/>, link: 'https://nodejs.org/'},
    {text: 'Express', icon: '', link: 'https://expressjs.com/'},
    {text: 'Flask', icon: '', link: 'https://flask.palletsprojects.com/en/2.3.x/'},
];

const databaseTechnologies = [
    {text: 'MongoDB', icon: '', link: 'https://www.mongodb.com/'},
    {text: 'PostgreSQL', icon: '', link: 'https://www.postgresql.org/'},
    {text: 'MySQL', icon: '', link: 'https://www.mysql.com/'},
];

const operatingSystems = [
    {text: 'Ubuntu', icon: '', link: 'https://ubuntu.com/'},
    {text: 'Tails', icon: '', link: 'https://tails.boum.org/'},
    {text: 'Kali Linux', icon: '', link: 'https://www.kali.org/'},
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
                    {technologies.map(({text, icon, link}, index) => (
                        <Grid key={index} item xs={6} md={4}>
                            <TechItem text={text} icon={icon} href={link}/>
                        </Grid>
                    ))}
                </Grid>

                <DividerWithTitle text={'Front End'}/>
                <Grid container>
                    {frontEndTechnologies.map(({text, icon, link}, index) => (
                        <Grid key={index} item xs={6} md={4}>
                            <TechItem key={index} text={text} icon={icon} href={link}/>
                        </Grid>
                    ))}
                </Grid>

                <DividerWithTitle text={'Back End'}/>
                <Grid container>
                    {backEndTechnologies.map(({text, icon, link}, index) => (
                        <Grid key={index} item xs={6} md={4}>
                            <TechItem key={index} text={text} icon={icon} href={link}/>
                        </Grid>
                    ))}
                </Grid>

                <DividerWithTitle text={'Databases'}/>
                <Grid container>
                    {databaseTechnologies.map(({text, icon, link}, index) => (
                        <Grid key={index} item xs={6} md={4}>
                            <TechItem key={index} text={text} icon={icon} href={link}/>
                        </Grid>
                    ))}
                </Grid>


                <DividerWithTitle text={'Operating Systems'}/>
                <Grid container>
                    {operatingSystems.map(({text, icon, link}, index) => (
                        <Grid key={index} item xs={6} md={4}>
                            <TechItem key={index} text={text} icon={icon} href={link}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
