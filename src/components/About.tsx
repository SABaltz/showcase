import React from 'react'
import {ImageList, ImageListItem, useMediaQuery} from "@mui/material";
import {darkTheme} from "./Theme";

export default function About() {
    const smallScreen = useMediaQuery(darkTheme.breakpoints.up('sm'));
    return (
        <ImageList sx={{width: '100vw', height: '100vh'}} cols={smallScreen ? 3 : 1} rowHeight={1000}>
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
