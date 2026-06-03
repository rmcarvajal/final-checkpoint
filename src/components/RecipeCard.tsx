export const RecipeCard = ({recipe, navigate}) => {
    return(
        <div>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} height={200}/>
            <button onClick={() => navigate(`/${recipe.name}`)}>Detail</button>
        </div>
    )
}