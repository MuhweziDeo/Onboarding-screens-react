import React from "react";
import { Screen1Presenter } from "../presenters";

interface Props {
history: ()=>void
}

export const OnboardingView: React.SFC<Props> = (props) => {
    return (
    <>
        <Screen1Presenter />
    </>
    )
}