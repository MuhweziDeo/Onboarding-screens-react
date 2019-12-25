import React from "react";
import { Screen1View } from "./onboardingViews/Screen1View";
import { Screen2View } from "./onboardingViews/Screen2View";
import { Screen3View } from "./onboardingViews/Screen3View";

export interface Props {
    match: {
        params: {
            screen: string;
            userId?: string;
        }
    },
}

export const OnboardingView: React.SFC<Props> = (props) => {
    const screen: number = Number(props.match.params.screen)
    const renderComponent = () => {
        switch(screen) {
            case 1:
                return <Screen1View />
            case 2:
                return <Screen2View />
            
            case 3:
                return <Screen3View />
            default:
                return <Screen1View/>    
        }
    }
    return (
    <>
       {renderComponent()}
    </>
    )
}