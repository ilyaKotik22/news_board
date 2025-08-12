// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getDatabase } from 'firebase/database';



// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyCGU3CDGDGqwT8dTgq8Vsv7LchCqXfnvX4",

    authDomain: "polog-51f4a.firebaseapp.com",
    databaseURL: 'https://polog-51f4a-default-rtdb.firebaseio.com/',
    projectId: "polog-51f4a",

    storageBucket: "polog-51f4a.firebasestorage.app",

    messagingSenderId: "855955657790",

    appId: "1:855955657790:web:b5c693089917e59e102d6f",

    measurementId: "G-VPMTQX7SVQ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

