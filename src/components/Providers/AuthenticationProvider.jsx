import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import {jsPDF} from 'jspdf';

export const AuthenticationContext = createContext(null);

export const auth = getAuth(app);

const AuthenticationProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function convertToPDF() {
        
        const doc = new jsPDF("l", "px", "a1");
        const xCoordinate = 20; 
        const yCoordinate = -2000;
      
       
        const page = document.getElementById('page');
        doc.html(page,{
            x: xCoordinate,
            y: yCoordinate,
          callback: function (pdf) {
            pdf.save('blog.pdf');
          }
        });
      }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn=()=>{
        
       return signInWithPopup(auth, provider)
 
    }
    const githubSignIn=()=>{
        return signInWithPopup(auth, githubprovider)
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
          
            setUser(loggedUser);
            
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authenticationInfo = {
        user,
        setLoading,
        loading,
        registerUser,
        logIn,
        logOut,
        googleSignIn,
        githubSignIn,
        convertToPDF
    }

    return (
        <AuthenticationContext.Provider value={authenticationInfo}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationProvider;