import React, {Fragment} from 'react'
import {Box, Grid, ImageList, ImageListItem, Link, Typography, useMediaQuery} from "@mui/material";
import {darkTheme} from "./Theme";
import NavButton from "./NavButton";
import NavBar from "./NavBar";


export default function About() {
    const smallScreen = useMediaQuery(darkTheme.breakpoints.up('sm'));
    return (
        <>
            {smallScreen ?
                <Box sx={{backgroundColor: '#1f4037'}}>
                    <NavBar textColor={'black'}/>
                </Box>
                : <NavButton/>}

            <Box sx={{
                background: `linear-gradient(to bottom, #1f4037, #99f2c8 );`,
            }}>

                <Typography
                    sx={{padding: '2rem 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    variant={'h1'}>About
                    Me</Typography>

                <Grid container>

                    <Fragment>
                        <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Typography variant={'h6'}>Born and raised in Montana outside of Glacier National Park I
                                spent
                                my
                                youth exploring
                                the vast wilderness areas around my home.</Typography>
                        </Grid>

                        <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box
                                sx={{
                                    borderRadius: '5rem',
                                    backgroundImage: 'url(' + require('../static/ManyGlacier.jpg') + ')',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    width: '30vw',
                                    height: '50vh'
                                }}/>
                        </Grid>

                        <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box
                                sx={{
                                    borderRadius: '5rem',
                                    backgroundImage: 'url(' + require('../static/ManyGlacier.jpg') + ')',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    width: '30vw',
                                    height: '50vh'
                                }}/>
                        </Grid>


                    </Fragment>

                    <Fragment>
                        <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box
                                sx={{
                                    borderRadius: '5rem',
                                    backgroundImage: 'url(' + require('../static/Rowing.jpg') + ')',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    width: '30vw',
                                    height: '50vh'
                                }}/>
                        </Grid>

                        <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Typography variant={'h6'}>I attended <Link href={'https://www.conncoll.edu/'}>Connecticut
                                College</Link> in New London, CT and
                                graduated with a Bachelors in Economics, Finance, and Applied Statistics. I was a member
                                of
                                the <Link href={'https://camelathletics.com/sports/mens-rowing'}>Varsity
                                    Rowing</Link> team
                                for
                                four years, and served my final year as
                                captain.</Typography>
                        </Grid>

                        <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box
                                sx={{
                                    borderRadius: '5rem',
                                    backgroundImage: 'url(' + require('../static/Rowing.jpg') + ')',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    width: '30vw',
                                    height: '50vh'
                                }}/>
                        </Grid>
                    </Fragment>

                    <Fragment>
                        <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box
                                sx={{
                                    borderRadius: '5rem',
                                    backgroundImage: 'url(' + require('../static/montana.jpg') + ')',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    width: '30vw',
                                    height: '40vh'
                                }}/>
                        </Grid>

                        <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box
                                sx={{
                                    borderRadius: '5rem',
                                    backgroundImage: 'url(' + require('../static/montana.jpg') + ')',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    width: '30vw',
                                    height: '40vh'
                                }}/>
                        </Grid>

                        <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Typography variant={'h6'}>These Days you can find me kayaking, climbing, and skiing in
                                Anchorage,
                                Alaska, where I currently reside.</Typography>
                        </Grid>

                    </Fragment>
                </Grid>

                <Typography sx={{margin: '2rem 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            variant={'h1'}>My Travels</Typography>


                <ImageList sx={{marginTop: '3rem', width: '100vw', height: '100vh'}} cols={smallScreen ? 3 : 1}
                           rowHeight={1000}>
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
        img: require('../static/arches.JPG'),
        title: 'Arches National Park ',
    },
    {
        img: require('../static/cave.JPG'),
        title: 'Columbia Mountain Cave',
    },
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
    }
];
