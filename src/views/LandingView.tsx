import React, {useState, SFC} from "react";
import { LandingPresenter } from "../presenters";
import app from "../firebase";
import firebase from "firebase";
import { message } from "antd";
import { useHistory } from "react-router";

export const LandingView: SFC = () => {
    const history = useHistory();
    const [isLoading, setLoadin] = useState<boolean>(false);
    const loginWithGoogle = async() => {
        setLoadin(true);
        try {
            const googleProvider  = new firebase.auth.GoogleAuthProvider();
            const {additionalUserInfo} = await app.auth().signInWithPopup(googleProvider);
            setLoadin(false);
            if(additionalUserInfo && additionalUserInfo.profile ) {
                const {email, given_name: lastName, family_name: firstName} = additionalUserInfo.profile as any;
                message.success(`Thansk we are using ${email} as your email`);
                return history.push({pathname: "/onboarding/1", state: {firstName, lastName, email}});
            }
            } catch (error) {
                setLoadin(false);
                message.error(error.message)
            }
        
    }
    return (
        <LandingPresenter disabled={isLoading} loginWithGoogle={loginWithGoogle}/>
    )
}
