import React from "react";
import {Box} from "@mui/material";

let image = require('../static/background3.jpg')
export default function HomePage() {
    return (
        <Box
            sx={{
                backgroundImage: 'url(' + image + ')',
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100vw',
                height: '100vh'
            }}>

        </Box>
    )
}
