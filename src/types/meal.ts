export type Meal = {
    id: number,
    name: string,
    image: string,
    ingredients: Array<object>,
    instructions: Array<object>,
    difficulty: string,
    cuisine: string,
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    caloriesPerServing: number,
    mealType: Array<object>
}