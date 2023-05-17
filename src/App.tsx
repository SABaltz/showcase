import React from 'react';
import {createTheme, ThemeProvider,} from "@mui/material";
import NavBar from "./components/NavBar";
import Name from "./components/Name";

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
            <ThemeProvider theme={darkTheme}>

                <NavBar></NavBar>
                <Name></Name>

            </ThemeProvider>
        </>
    );
}

export default App;
