import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { RecipeCard } from "../components/RecipeCard"
import { SearchBar } from "../components/SearchBar"
import { useSearch } from "../context/SearchContext"

export const Home = () => {
    const [Recipes,setRecipes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {fetch('https://dummyjson.com/recipes')
        .then((res) => res.json())
        .then((data) => setRecipes(data.recipes))
    },[])

    if(!Recipes) return <p>error finding recipes</p>

    const search = useSearch()
    const matchQuery = Recipes.filter(recipe => recipe.name.toLowerCase().includes(search?.searchQuery))
    return(
    <>
     <h1>home</h1>
     <SearchBar/>
     {matchQuery.map((recipe,index) => {
        return(
            <div key={index}>
                <RecipeCard recipe={recipe} navigate={navigate}/>
            </div>
        )
     })}
    </>
    )
}