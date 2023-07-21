import React from 'react'
import {ImageList, ImageListItem} from "@mui/material";


function srcset(image: string, size: number, rows = 4, cols = 4) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}


export default function About() {

    return (
        <ImageList
            sx={{width: '50vw', height: 500}}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
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
