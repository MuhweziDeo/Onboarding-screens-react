import React from "react";
import { Screen3Presenter } from "../../presenters";
import { db } from "../../firebase";
import { useHistory } from "react-router";
import { message } from "antd";

export const Screen3View = () => {
    const history = useHistory();
    const [interest, setInterest] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);

    const submit = async(): Promise<void> => {
        setLoading(true)
        const regId = (history.location.state && history.location.state.regId) ?
                    history.location.state.regId : history.location.search.split("reg_id=")[1];           
        try {
            const doc = await db.collection('registration').doc(regId).get()
            if(doc.exists) {
                setLoading(false);
                await doc.ref.update({interest});
                message.success("Thank You for completing the on boarding");
                setInterest("");
                return history.push("/");
            }
            message.error("Error It seems Session was lost");
        } catch (error) {
            setLoading(false);
            message.error("Error Something went wrong");
        }
    }
    return (
        <Screen3Presenter
            interest={interest}
            disabled={loading}
            onChangeIntrest={setInterest}
            submit={submit}
        />
    )
}