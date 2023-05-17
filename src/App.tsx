import React from 'react';
import {Box, CardMedia, createTheme, Stack, Typography} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#cb1818',
        }
    },
})

function App() {
    return (
        <>
            <CardMedia component="img" sx={{height: '40rem'}}
                       image={require('../src/pexels-adrien-olichon-2387819.jpg')}/>
            <Box sx={{
                scrollbarWidth: 0,
                position: 'absolute',
                color: 'white',
                top: '40%',
                left: '50%',
                transform: 'translateX(-50%)'
            }}>
                <Stack>
                    <Typography variant={'h2'} sx={{}}>
                        Samuel Baltz
                    </Typography>
                    <Typography variant={'h2'} sx={{
                        position: 'absolute',
                        color: 'white',
                        top: '40%',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}>
                        Programmer
                    </Typography>
                </Stack>
            </Box>
        </>
    );
}

export default App;
