import React from 'react';
import {ThemeProvider,} from "@mui/material";
import {darkTheme} from "./components/Theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <NavBar></NavBar>
                                <HomePage></HomePage>
                            </>
                        }>
                        </Route>
                    </Routes>
                </BrowserRouter>

            </ThemeProvider>
        </>
    );
}

export default App;
