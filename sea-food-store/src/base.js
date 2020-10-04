import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyDl-_XuFI6bD6tKyF5dkAJxNzSzFaJatg0",
    authDomain: "bids-of-the-week-baba-tee-1.firebaseapp.com",
    databaseURL: "https://bids-of-the-week-baba-tee-1.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export {firebaseApp};

// this is a default export
export default base;