import React, {useRef} from 'react'
import {Box, Divider, Grid, ImageList, ImageListItem, keyframes, Link, Typography, useMediaQuery} from "@mui/material";
import {darkTheme} from "./Theme";
import NavBar from "./nav/NavBar";
import NavButton from "./nav/NavButton";
import {useIsVisible} from "react-is-visible"

let ImageTile = ({imageLocation, smallScreen}) => {
    return (
        <>
            <Grid item xs={12} md={4}
                  sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '3rem'}}>
                <Box
                    sx={{
                        borderRadius: '2rem',
                        backgroundImage: 'url(' + imageLocation + ')',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: smallScreen ? '30vw' : '100vw',
                        height: smallScreen ? '50vh' : '50vh'
                    }}/>
            </Grid>
        </>
    )
}

let TextTile = ({text}) => {
    return (
        <>
            <Grid item xs={12} md={4} sx={{...centerGrid, paddingLeft: '1rem'}}>
                <Typography variant={'h6'}>{text}</Typography>
            </Grid>
        </>
    )
}

const zoomAnimation = keyframes`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export let centerGrid = {display: 'flex', justifyContent: 'center', alignItems: 'center'}

export default function About() {
    const nodeRef = useRef();
    const isVisible = useIsVisible(nodeRef);
    const smallScreen = useMediaQuery(darkTheme.breakpoints.up('sm'));

    let linearStart = '#232526'
    return (
        <>
            {/*--------------------------Nav---------------------------------*/}
            {smallScreen ?
                <Box sx={{backgroundColor: linearStart}}>
                    <NavBar textColor={'#dcdcdc'}/>
                </Box>
                :
                <Box sx={{backgroundColor: linearStart}}>
                    <NavButton buttonColor={'#dcdcdc'}/>
                </Box>
            }

            {/*--------------------------Backgrouund---------------------------------*/}
            <Box sx={{
                background: `linear-gradient(to bottom, ${linearStart}, #414345 );`,
            }}>
                <Divider sx={{fontSize: '5rem', paddingBottom: '2rem'}}>
                    <Typography sx={{
                        opacity: 0,
                        transform: 'translateX(-100%)',
                        animation: `${zoomAnimation} 1.5s forwards`
                    }} variant={'h1'}>About</Typography>
                </Divider>

                <Grid container>


                    {/*--------------------------Row 1---------------------------------*/}
                    <TextTile
                        text={'Born and raised in Montana outside of Glacier National Park I spent my youth exploring the vast wilderness areas around my home.'}/>

                    <ImageTile smallScreen={smallScreen} imageLocation={require('../static/HungryHorse.jpg')}/>
                    {smallScreen ? <ImageTile smallScreen={smallScreen}
                                              imageLocation={require('../static/ManyGlacier.jpg')}/> : <></>}

                    {/*--------------------------Row 2---------------------------------*/}

                    {smallScreen ?
                        <ImageTile smallScreen={smallScreen}
                                   imageLocation={require('../static/Rowing.jpg')}/> : <></>}

                    <Grid item xs={12} md={4} sx={{...centerGrid}}>
                        <Typography variant={'h6'}>I attended <Link sx={{color: '#919191'}}
                                                                    href={'https://www.conncoll.edu/'}>Connecticut
                            College</Link> in New London, CT and
                            graduated with a Bachelors in Economics, Finance, and Applied Statistics. I was a
                            member
                            of
                            the <Link sx={{color: '#919191'}}
                                      href={'https://camelathletics.com/sports/mens-rowing'}>Varsity
                                Rowing</Link> team
                            for
                            four years, and served my final year as
                            captain.</Typography>
                    </Grid>


                    {!smallScreen ?
                        <ImageTile smallScreen={smallScreen}
                                   imageLocation={require('../static/Rowing.jpg')}/> : <></>}

                    {smallScreen ?
                        <ImageTile smallScreen={smallScreen}
                                   imageLocation={require('../static/Rowing2.jpg')}/> : <></>}

                    {/*--------------------------Row 3---------------------------------*/}
                    {smallScreen ?
                        <ImageTile smallScreen={smallScreen} imageLocation={require('../static/AK1.JPG')}/> : <></>}
                    {smallScreen ?
                        <ImageTile smallScreen={smallScreen} imageLocation={require('../static/AK2.jpg')}/> : <></>}
                    <TextTile
                        text={'These Days you can find me kayaking, climbing, and skiing in Anchorage, Alaska, where I currently reside.'}/>
                    {!smallScreen ?
                        <ImageTile smallScreen={smallScreen} imageLocation={require('../static/AK1.JPG')}/> : <></>}

                </Grid>


                {/*--------------------------Travels---------------------------------*/}


                <Divider ref={nodeRef} sx={{fontSize: '5rem'}}>
                    <Typography sx={{
                        opacity: 0,
                        transform: 'translateX(-100%)',
                        animation: `${isVisible ? zoomAnimation : ''} 1.5s forwards`
                    }} variant={'h1'}>
                        Travels
                    </Typography>
                </Divider>

                <ImageList sx={{marginTop: '3rem', width: '100vw', height: '100vh'}} cols={smallScreen ? 3 : 1}
                           rowHeight={900}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=1000&h=1000&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=1000&h=1000&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </>
    )
}


const itemData = [
    {
        img: require('../static/glacier.jpg'),
        title: 'Glacier National Park',
    },
    {
        img: require('../static/ousel.jpg'),
        title: 'Ousel Peak',
    },
    {
        img: require('../static/vets.jpg'),
        title: 'Sam in Hat',
    },
    {
        img: require('../static/yellowstone.JPG'),
        title: 'Yellow Stone National Park',
    },
    {
        img: require('../static/FisherHike.JPG'),
        title: 'Fisher Towers',
    },
    {
        img: require('../static/FisherTowers.jpg'),
        title: 'Fisher Towers',
    },

    {
        img: require('../static/arches.JPG'),
        title: 'Arches National Park ',
    },
    {
        img: require('../static/Docks.jpg'),
        title: 'Rowing Docks',
    },
    {
        img: require('../static/cave.JPG'),
        title: 'Columbia Mountain Cave',
    },
];
