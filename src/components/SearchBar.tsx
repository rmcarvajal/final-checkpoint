import { useSearch } from "../context/SearchContext";

export const SearchBar = () => {
    const search = useSearch()
   
    return(
        <input type="text"
        value={search?.searchQuery}
        onChange={(e) => search?.setSearchQuery(e.target.value)}
        placeholder="search recipe...."
        />
    )
}