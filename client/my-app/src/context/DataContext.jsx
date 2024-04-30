import { createContext, useEffect, useState } from "react";

export const userContext = createContext([]) 

const UserProvider = ({children}) => {

    const [users , setUsers] = useState([]) ; 

    useEffect(()=>{
             fetch('https://coffee-server-pink.vercel.app/user' )
             .then((res)=> res.json())
             .then((data)=> setUsers(data)) 
    },[])

  

    const obj = {
        users,
        setUsers
    }

    return (
        <userContext.Provider value={obj}>
            {children}
        </userContext.Provider>
    )
}
export default UserProvider