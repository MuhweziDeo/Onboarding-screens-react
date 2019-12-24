import React from "react";
import * as Router from 'react-router-dom';
import { OnboardingView, LandingView  } from "./views";

const Routes: React.SFC = () => {
    return(
        <>
        <Router.BrowserRouter>
            <div>
            <Router.Route path="/" exact component={LandingView} />
            <Router.Route path="/onboarding" exact component={OnboardingView} />
            </div>
        </Router.BrowserRouter>
        </>
    )
}

export default Routes;