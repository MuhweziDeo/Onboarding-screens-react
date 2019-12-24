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
    apiKey: "AIzaSyAwhZeKlwO1a06HbWRFR2EDEALXLGlfSkc",
    authDomain: "the-future-school.firebaseapp.com",
    databaseURL: "https://the-future-school.firebaseio.com",
    projectId: "the-future-school",
    storageBucket: "the-future-school.appspot.com",
    messagingSenderId: "238112416573",
    appId: "1:238112416573:web:918df745b370691d68db54",
    measurementId: "G-2WZ0VP0Q90"
});

export const config = Object.freeze({
    firebase: firebaseConfig
});


