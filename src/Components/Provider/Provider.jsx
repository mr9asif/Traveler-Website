import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebse/Firebase.config";


 export const AuthContext = createContext(null);
const Provider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const auth=getAuth(app)

        // social media provider
        const GoogleProvider = new GoogleAuthProvider();
        const GithubProvider= new GithubAuthProvider();
    

 //  creat user
 const creatUser = (email, password,)=>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password);
  }

     // update user
     const updateUser=(name,image)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
          displayName:name, 
          photoURL: image
        })
      }

     // Google sign in
     const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
      }

       // Github sign in
    const GithibSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, GithubProvider)
      }

   // sign in
   const login = ( email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   
  }

    // Sign out
    const signout=()=>{
      
        setUser(null)
        return signOut(auth)
       }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        if(user){
          setUser(user)
         
        }
        setLoading(false)
      })
      return ()=> unsubscribe()
     
    },[])

    const info = {
         user,
         creatUser,
         login,
         googleSignIn,
         GithibSignIn,
         updateUser,
         signout,
         loading,
         setLoading
         
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;