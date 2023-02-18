import { createContext,useEffect,useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({children})=>{
    const [currentUser,setCurrentUser]=useState(
        JSON.parse(localStorage.getItem("user"))||null
    );

    const login = ()=>{
        setCurrentUser({
            id:1,
            name:"Asutosh sidhya",
            profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjlCIxWaSMDVruKZJSTF4UHjhCmtCpzqtFh4AZ2905Q&s"
        })
    };

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser]);


    return (
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    )
}