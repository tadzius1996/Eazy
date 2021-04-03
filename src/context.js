import React, { useContext, useState, useEffect } from "react"
import { auth } from "./firebase"

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
      return auth.signInWithEmailAndPassword(email, password) 
    }

    function logout() {
      return auth.signOut()
    }

    function updatePassword(password) {
      return currentUser.updatePassword(password)
    }

    function updateEmail(email) {
      return currentUser.updateEmail(email)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
        })
    
        return unsubscribe
      }, []);

    
    return (<AppContext.Provider value={{signup, login, logout, currentUser, updatePassword, updateEmail}}>{!loading && children}</AppContext.Provider>)
}

export default function useGlobalProvider() {
    return useContext(AppContext)
}