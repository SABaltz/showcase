import React from "react";
import {Box, CardMedia, Stack, Typography} from "@mui/material";

export default function Name() {
    return (
        <>
            <CardMedia component="img" sx={{height: '50rem'}}
                       image={require('../pexels-adrien-olichon-2387819.jpg')}/>
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
                    <Typography variant={'h2'} sx={{marginBottom: '1rem'}}>
                        Samuel (Arthur) Baltz
                    </Typography>
                    <Typography variant={'h5'} sx={{
                        position: 'absolute',
                        width: '30rem',
                        color: 'white',
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