import './Recipe.css';
const Recipe = ({recipes}) => {
    return (
        <div className="App">
            {recipes.map((recipe,id)=>(
                <div className="card"key={id} >
                    <h2 style={{textAlign:"center"}}>{recipe.recipe.label}</h2>
                    <img src={recipe.recipe.image} alt=''/>
                    <div><strong>Calories</strong> {recipe.recipe.calories}</div>
                    <div>When is it eaten? {recipe.recipe.mealType?recipe.recipe.mealType:"Anytime"}</div>
                    <ul>Ingredients {recipe.recipe.ingredients.map((ingredient,id)=><li key={id}>{ingredient.text}</li>)}</ul>
                    <div></div>
                </div>
            ))}
        </div>
    )
}

export default Recipe;