import React from 'react'
import {ImageList, ImageListItem} from "@mui/material";


function srcset(image: string, size: number, rows = 1, cols = 1) {
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
            sx={{width: '100vw', height: 450}}
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
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: require('../static/cave.JPG'),
        title: 'Burger',
    },
    {
        img: require('../static/fisher.JPG'),
        title: 'Camera',
    },
    {
        img: require('../static/glacier.jpg'),
        title: 'Coffee',
        cols: 2,
    },
    {
        img: require('../static/kayak.jpg'),
        title: 'Hats',
        cols: 2,
    },
    {
        img: require('../static/ousel.jpg'),
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: require('../static/vets.jpg'),
        title: 'Basketball',
    },
    {
        img: require('../static/yellowstone.JPG'),
        title: 'Fern',
    }
];
