import React from "react";
import { Link } from "react-router-dom"; // import Link
import useRecipeStore from "../components/recipeStore"; // adjust path if needed

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes yet. Add one!</p>;
  }

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} style={{ marginBottom: "10px" }}>
            {/* Link to RecipeDetails page */}
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: "none", color: "blue" }}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;