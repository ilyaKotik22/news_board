"use strict";
// Import the functions you need from the SDKs you need
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var app_1 = require("firebase/app");
var database_1 = require("firebase/database");
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
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
var app = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, database_1.getDatabase)(app);
