import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvidor({ children }) {
  const [currntUser, setCurrentUser] = React.useState(null);
  const [UserLoggedIn, setUserLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
      return unsubscribe;
    }, [])

    async function initializeUser(user) {
        if ( user) {
            setCurrentUser({...user});
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}