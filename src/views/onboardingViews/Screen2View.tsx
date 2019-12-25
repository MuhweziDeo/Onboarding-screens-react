import React, { useState, useEffect } from "react";
import { Screen2Presenter } from "../../presenters";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase";
import firebase from "firebase";
import { message } from "antd";


export const Screen2View:React.SFC = () => {

    const history = useHistory();

    const [company, setCompany] = useState<string>("");

    const [experience, setExperience] = useState<number>(0);

    const [college, setCollege] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);

    const [userId, setUserId] = useState<string>("");
    
    useEffect(() => {
        const id = (history.location.state && history.location.state.userId) ? 
            history.location.state.userId : history.location.search.split("user_id=")[1];
        setUserId(id);
    })
    

    const submit = async() => {
        try {
            setLoading(true);
            const data = { user_id: userId, company, experience, college };
            const registration = await db.collection("registration").add({...data});
            message.success("Thanks 1 more step");
            setLoading(false);
            return history.push({pathname: "/onboarding/3", 
                state: {regId: registration.id}, 
                search: `?reg_id=${registration.id}`})
        } catch (error) {
            
        }
        
    }
    return (
        <Screen2Presenter 
            college={college}
            experience={experience}
            company={company}
            onChangeCollege={(value:string) => setCollege(value)}
            onChangeCompany={(value:string) => setCompany(value)}
            onChangeExperience={(value: number) => setExperience(value)}
            disabled={loading}
            submit={submit}
            
        />
    )
}