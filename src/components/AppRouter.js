import React from 'react';
import "../css/index.css";
import App from "./App";
import {Login} from "./Login";
import {Box, Typography} from "@material-ui/core";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import SignUp from "./SignUp";


const Copyright = () => {
    return (
      <Typography variant={"body2"} color={"textSecondary"} align={"center"}>
          {"Copyright ⓒ "}
          nahwasa, {new Date().getFullYear()}
          {"."}
      </Typography>
    );
}

export const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path={"/login"} element={<Login />} />
                        <Route path={"/"} element={<App />} />
                        <Route path={"/signup"} element={<SignUp />} />
                    </Routes>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </BrowserRouter>
        </div>
    );
}