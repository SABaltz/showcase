import React from "react";
import {Box, CardMedia, Stack, Typography} from "@mui/material";

export default function Name() {
    return (
        <>
            <CardMedia component="img" sx={{height: '50rem'}}
                       image={require('../static/pexels-paul-voie-16771695.jpg')}/>
            <Box sx={{
                scrollbarWidth: 0,
                position: 'absolute',
                color: 'white',
                top: '40%',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <Stack>
                    <Typography variant={'h1'} sx={{marginBottom: '1rem', color: 'black'}}>
                        Samuel (Arthur) Baltz
                    </Typography>
                    <Typography variant={'h5'} sx={{
                        position: 'absolute',
                        width: '30rem',
                        color: 'black',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}>
                        Full Stack Programmer and IT Administrator
                    </Typography>
                </Stack>
            </Box>
        </>
    )
}