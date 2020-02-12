import dotenv from "dotenv";
dotenv.config();
export interface IFirebaseConfig {
    apiKey: string,
    authDomain: string,
    databaseURL: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string

}

export const firebaseConfig: IFirebaseConfig = Object.freeze({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
});

export const config = Object.freeze({
    firebase: firebaseConfig
});


