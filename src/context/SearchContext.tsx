import React, { createContext, useState } from "react";
import { useContext } from "react";
interface searchContextType{
    searchQuery: string
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const searchContext = createContext<searchContextType | null>(null)

export const searchProvider = ({children}:{children: React.ReactNode}) => {

    const [searchQuery,setSearchQuery] = useState<string>('')

    return(
        <searchContext.Provider value={{searchQuery,setSearchQuery}}>
            {children}
        </searchContext.Provider>
    )
}

export const useSearch = () => {
    const search = useContext(searchContext)
    if(!search){
        throw new Error ('Error with search provider')
    }
    return search
}