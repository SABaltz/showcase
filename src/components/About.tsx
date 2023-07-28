import React from 'react'
import {Box, Grid, ImageList, ImageListItem, Link, Typography, useMediaQuery} from "@mui/material";
import {darkTheme} from "./Theme";
import NavBar from "./nav/NavBar";
import NavButton from "./nav/NavButton";

let ImageTile = ({imageLocation}) => {
    return (
        <>
            <Grid item xs={6} md={4}
                  sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '3rem'}}>
                <Box
                    sx={{
                        borderRadius: '2rem',
                        backgroundImage: 'url(' + imageLocation + ')',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '30vw',
                        height: '50vh'
                    }}/>
            </Grid>
        </>
    )
}

export let centerGrid = {display: 'flex', justifyContent: 'center', alignItems: 'center'}

export default function About() {
    const smallScreen = useMediaQuery(darkTheme.breakpoints.up('sm'));

    let linearStart = '#1f4037'
    return (
        <>
            {smallScreen ?
                <Box sx={{backgroundColor: linearStart}}>
                    <NavBar textColor={'black'}/>
                </Box>
                :
                <Box sx={{backgroundColor: linearStart}}>
                    <NavButton/>
                </Box>
            }

            <Box sx={{
                background: `linear-gradient(to bottom, ${linearStart}, #99f2c8 );`,
            }}>

                <Typography
                    sx={{padding: '2rem 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    variant={'h1'}>About</Typography>

                <Grid container>

                    <Grid item xs={6} md={4} sx={{...centerGrid, paddingLeft: '1rem'}}>
                        <Typography variant={'h6'}>Born and raised in Montana outside of Glacier National Park I
                            spent
                            my
                            youth exploring
                            the vast wilderness areas around my home.</Typography>
                    </Grid>

                    <ImageTile imageLocation={require('../static/HungryHorse.jpg')}/>
                    {smallScreen ? <ImageTile imageLocation={require('../static/ManyGlacier.jpg')}/> : <></>}


                    <ImageTile imageLocation={require('../static/Rowing.jpg')}/>

                    <Grid item xs={6} md={4} sx={{...centerGrid}}>
                        <Typography variant={'h6'}>I attended <Link href={'https://www.conncoll.edu/'}>Connecticut
                            College</Link> in New London, CT and
                            graduated with a Bachelors in Economics, Finance, and Applied Statistics. I was a
                            member
                            of
                            the <Link href={'https://camelathletics.com/sports/mens-rowing'}>Varsity
                                Rowing</Link> team
                            for
                            four years, and served my final year as
                            captain.</Typography>
                    </Grid>
                    {smallScreen ? <ImageTile imageLocation={require('../static/Rowing2.jpg')}/> : <></>}


                    {smallScreen ? <ImageTile imageLocation={require('../static/AK1.JPG')}/> : <></>}
                    {smallScreen ? <ImageTile imageLocation={require('../static/AK2.jpg')}/> : <></>}
                    <Grid item xs={6} md={4} sx={{...centerGrid, paddingRight: '1rem'}}>
                        <Typography variant={'h6'}>These Days you can find me kayaking, climbing, and skiing in
                            Anchorage,
                            Alaska, where I currently reside.</Typography>
                    </Grid>
                    {!smallScreen ? <ImageTile imageLocation={require('../static/AK1.JPG')}/> : <></>}

                </Grid>

                <Typography
                    sx={{margin: '2rem 2rem', ...centerGrid}}
                    variant={'h1'}>Travels</Typography>


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
