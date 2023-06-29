import React from 'react';
import {ThemeProvider,} from "@mui/material";
import {darkTheme} from "./components/Theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <>
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
