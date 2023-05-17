import React from 'react';
import {ThemeProvider,} from "@mui/material";
import NavBar from "./components/NavBar";
import Name from "./components/Name";
import {darkTheme} from "./components/Theme";
import Quote from "./components/Quote";

function App() {
    return (
        <>
            <ThemeProvider theme={darkTheme}>

                <NavBar></NavBar>
                <Name></Name>
                <Quote></Quote>
                
            </ThemeProvider>
        </>
    );
}

export default App;
