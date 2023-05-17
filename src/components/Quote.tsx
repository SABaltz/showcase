import React from "react";
import {Box, Stack, Typography, useTheme} from "@mui/material";

export default function Quote() {
    let theme = useTheme()
    return (
        <Box sx={{
            width: '100vw',
            height: '30rem',
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            color: 'white'
        }}>
            <Stack>
                <Typography variant={'h4'} sx={{marginBottom: '1rem'}}>
                    “Perfection is achieved not when there is nothing more to add,
                </Typography>
                <Typography variant={'h4'} sx={{marginBottom: '1rem'}}>
                    but rather when there is nothing more to take away.”
                </Typography>
                <Typography>– Antoine de Saint-Exupery</Typography>
            </Stack>
        </Box>
    )

}