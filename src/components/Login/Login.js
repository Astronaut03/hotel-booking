//import * as firebase from "firebase/app";
//import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";


const Login = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    firebase.initializeApp(firebaseConfig);
    
    const handleGoogleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
        const {displayName, email} = result.user;
        const signedInUser ={name: displayName, email}
        setLoggedInUser(signedInUser);
        storeAuthToken();
    })
        .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage);
    });
    }

    const storeAuthToken =() => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            // Send token to your backend via HTTPS
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          }); 
    }

    return (
        <div>
            <h1>this is login</h1>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login; 