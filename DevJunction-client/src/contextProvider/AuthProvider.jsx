/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Swal from 'sweetalert2'
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    //Sign in with user email pass
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //Sign in with gmail pass
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("Obeserve crnt use: ", currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])
    const authInfo = { user, createUser, signInUser, logOut, loading, signInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;