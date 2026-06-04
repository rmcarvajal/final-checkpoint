import type React from "react";
import { createContext, useContext, useState } from "react";

interface searchContextType {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

export const searchContext = createContext<searchContextType | null>(null)

export const SearchProvider = ({children}:{children:React.ReactNode}) => {
    const [searchQuery,setSearchQuery] = useState<string>('')

    return (<searchContext.Provider value = {{searchQuery,setSearchQuery}}>
        {children}
    </searchContext.Provider>)
}

export const useSearch = () => {
    const search = useContext(searchContext)

    return search
}