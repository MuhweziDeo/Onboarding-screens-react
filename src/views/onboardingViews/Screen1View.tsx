import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import { Screen1Presenter } from "../../presenters";
import {message} from "antd";
import { db } from "../../firebase";

type State = {
    name?: string;
    email?: string;
    lastName?: string;
    firstName?: string;
    phoneNumber?: string;
    isLoading?: boolean;
}

type Action =
 | { type: 'firstName', payload: string }
 | { type: 'phoneNumber', payload: string }
 | { type: 'lastName', payload: string }
 | { type: 'email', payload: string }
 | { type: 'loading', payload: boolean }
 | { type: 'firstName', payload: string };


const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'firstName':
        return {...state, firstName: action.payload}
    case 'lastName':
        return {...state, lastName: action.payload}
    case 'email':
        return {...state, email: action.payload}
    case 'phoneNumber':
        return {...state, phoneNumber: action.payload}
    case "loading":
        return {...state, isLoading: action.payload};   
    default:
      return state;
  }
}

export const Screen1View = () => {
    const history = useHistory();
    const {location: {state: locationState}} = history;
    const initialState = { 
        email:(locationState &&  locationState.email) || "", 
        lastName: (locationState && locationState.lastName )|| "", 
        firstName: (locationState && locationState.firstName) || ""
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const submit = async() => {
        dispatch({type: "loading", payload: true});
        try {
            const user = await db.collection("users").add({
                ...state
            });
            dispatch({type: "loading", payload: false});
            message.success("Great Now Some Basic Questions ");
            return history.push({pathname: `/onboarding/2`, state: {userId: user.id}});
        } catch (error) {
            dispatch({type: "loading", payload: false});
        }
    }
    return (
        <Screen1Presenter 
            disabled={state.isLoading}
            email={state.email || ""}
            phoneNumber={state.phoneNumber || ""}
            lastName={state.lastName || ""}
            firstName={state.firstName || ""} 
            submit={submit}
            onChange={(name, value) => dispatch({type: name, payload: value})}
        />
    )
}