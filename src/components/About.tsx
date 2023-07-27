import React from 'react'
import {ImageList, ImageListItem} from "@mui/material";

export default function About() {

    return (
        <ImageList sx={{width: '100vw', height: '100vh'}} cols={3} rowHeight={1000}>
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
        rows: 2,
        cols: 2,
    },
    {
        img: require('../static/cave.JPG'),
        title: 'Columbia Mountain Cave',
    },
    {
        img: require('../static/fisher.JPG'),
        title: 'Fisher Towers',
    },
    {
        img: require('../static/glacier.jpg'),
        title: 'Glacier National Park',
        cols: 2,
        rows: 2,
    },
    {
        img: require('../static/kayak.jpg'),
        title: 'Sea Kayaking',
        cols: 2,
        rows: 6,
    },
    {
        img: require('../static/ousel.jpg'),
        title: 'Ousel Peak',
        rows: 3,
        cols: 2,
    },
    {
        img: require('../static/vets.jpg'),
        title: 'Sam in Hat',
        rows: 2,
    },
    {
        img: require('../static/yellowstone.JPG'),
        title: 'Yellow Stone National Park',
        rows: 2,
    }
];
