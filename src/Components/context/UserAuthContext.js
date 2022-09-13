import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        GoogleAuthProvider, 
        signInWithPopup,
        sendPasswordResetEmail} from 'firebase/auth';
import { auth } from "../LoginComponents/Firebase"


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }){
    
    const [user, setUser]= useState("")

    function signUp(email,password) {
        return createUserWithEmailAndPassword( auth, email, password);
    }

    function logIn(email,password) {
        console.log("Email", email)
        return signInWithEmailAndPassword( auth, email, password);
    }

    function logOut(){
        return signOut(auth)
    }
    function googleSingIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }
   





    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser); });
        return () => {
            unsubscribe();
        }

    
    }, [])



    return (
        <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSingIn}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext)
   
}