import './App.css';
import React, { useState, useMemo } from "react";
import LandingToolbar from "../src/Components/Toolbar/LandingToolbar";
import Landing from "../src/Components/Landing/Landing";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CustomerRegistration from "./Components/Regstration/CustomerRegistration";
import TechnicianRegistration from "./Components/Regstration/TechnicianRegistration";
import TechnicianLanding from "./Components/Landing/TechnicianLanding";
import Home from "./Components/Home/Home";
import Otp from './Components/Login/Otp';
import ForgotPassword from './Components/Login/ForgotPassword';
import FOtp from './Components/Login/FOtp';
import ChangePassword from './Components/Login/ChangePassword';
import Techwall from './Components/TechnicianProfile/Techwall'
import { UserContext } from './UserContext';


const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: "column",
        height: "100vh"
    },
}));

function App() {
    // changes made here----------------------------------------------------------------
    const [user, setUser] = useState("varun");

    const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    const classes = useStyles();
    return (
        <div className="App">
            <Grid container className={classes.root}>
                <BrowserRouter>
                    <LandingToolbar />
                    <Switch>
                        <UserContext.Provider value={providerValue}>
                            <Route exact path={"/"}>
                                <Landing />
                            </Route>

                            <Route path={"/technician-login"}>
                                <TechnicianLanding />
                            </Route>
                            <Route path={"/customer-registration"}>
                                <CustomerRegistration />
                            </Route>
                            <Route path={"/change-password"}>
                                <ChangePassword />
                            </Route>
                            <Route path={"/technician-registration"}>
                                <TechnicianRegistration />
                            </Route>
                            <Route path={"/forgot-password"}>
                                <ForgotPassword />
                            </Route>
                            <Route path={"/home"}>
                                <Home />
                            </Route>
                            <Route path={"/otp"}>
                                <Otp />
                            </Route>
                            <Route path={"/fotp"}>
                                <FOtp />
                            </Route>
                            {/* Edited part */}
                            <Route path={"/techwall"}>
                                <Techwall />
                            </Route>
                        </UserContext.Provider>
                    </Switch>
                </BrowserRouter>
            </Grid>
        </div>
    );
}

export default App;
