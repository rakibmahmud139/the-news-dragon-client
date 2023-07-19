import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);



    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // SignI
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Logout
    const logout = () => {
        return signOut(auth);
    }


    // On auth change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
        })

        return () => {
            unSubscribe();
        }

    }, [])


    // Contest Info
    const AuthInfo = {
        user,
        createUser,
        signIn,
        logout
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;