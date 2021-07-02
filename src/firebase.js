// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDUzF8JhUbDEgbcAJ98BKbn54jR5Vcr0EI",
	authDomain: "clone-146c9.firebaseapp.com",
	projectId: "clone-146c9",
	storageBucket: "clone-146c9.appspot.com",
	messagingSenderId: "934838458909",
	appId: "1:934838458909:web:657cd02421944d182144f4",
	measurementId: "G-8CTV890RXP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); //realtime firebase database
const auth = firebase.auth();

export { db, auth };
