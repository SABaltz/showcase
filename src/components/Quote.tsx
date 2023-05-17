import React from "react";
import {Box, Typography, useTheme} from "@mui/material";

export default function Quote() {
    let theme = useTheme()
    return (
        <Box sx={{width: '100vw', height: '30rem', backgroundColor: theme.palette.primary.main}}>
            <Typography>
                “Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to
                take
                away.” – Antoine de Saint-Exupery
            </Typography>
        </Box>
    )
}