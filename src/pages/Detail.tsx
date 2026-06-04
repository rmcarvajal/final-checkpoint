import { useEffect, useState } from "react"
import type { Meal } from "../types/meal"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Detail = () => {
    const [meal,setMeal] = useState<Meal | null>(null)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {fetch(`https://dummyjson.com/recipes/${id}`)
        .then((res) => res.json())
        .then((data) => setMeal(data))
}, [])

if (!meal) return <p>meal not found</p>
    return(
        <>
        <button onClick={() => navigate("/")}>Go back</button>
            <h1>{meal.name}</h1>
            <img src={meal.image} alt={meal.name} height={400}/>
            <p>{meal.cuisine} cuisine</p>
            {meal.mealType.map((t) => {
                return(
                    <p>Perfect for {t}</p>
                )
            })}
            <h2>Difficulty: {meal.difficulty}</h2>
            <p>prep time: {meal.prepTimeMinutes}</p>
            <p>cooking time: {meal.cookTimeMinutes}</p>
            <h2>Calories: {meal.caloriesPerServing}</h2>
            <h2>Ingredients</h2>
            {meal.ingredients.map((i) => {
                return(
                    <p>{i}</p>
                )
            })}

            <h2>Instructions</h2>
            {meal.instructions.map((i) => {
                return(
                    <p>{i}</p>
                )
            })}
            
        </>
    )
}