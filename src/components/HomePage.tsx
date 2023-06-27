import React from "react";
import {Box} from "@mui/material";

export default function HomePage() {
    return (
        <Box sx={{backgroundColor: 'red', width: '100vw', height: '100vh'}}>
            <svg width="100vw" height="100vh">
                <polyline strokeLinejoin="round" stroke="black" strokeWidth="12" fill="none"
                          points="120,150 150,50 180,150"/>
            </svg>
        </Box>
    )
}
