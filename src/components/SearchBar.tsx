import { useSearch } from "../context/SearchContext";

export const SearchBar = () => {
    const {searchQuery, setSearchQuery} = useSearch()
    return(
        <>
        <input type="text" 
        value= {searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search recipe......"
        />
        </>
    )
}