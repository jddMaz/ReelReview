import {auth} from "../firebase"

import { createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return auth.createUserWithEmailAndPassword(auth, email, password)
};

export const doSignInWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(auth, email, password)
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    //result.user;
    return result;
}

export const doSignOut = () => {
    return auth.signOut(auth)
};

export const doPasswordReset = (email) => {
    return auth.sendPasswordResetEmail(auth, email)
}

//export const doSendEmailVerification = () => {
//    return auth.sendEmailVerification(auth.currentUser, {
//        url: 'http://localhost:3000'
//    });
//};