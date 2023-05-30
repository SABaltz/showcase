import React from 'react';
import {ThemeProvider,} from "@mui/material";
import {darkTheme} from "./components/Theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MotherBoard from "./components/MotherBoard";

function App() {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <>
                                {/*<NavBar></NavBar>*/}
                                <MotherBoard></MotherBoard>
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
