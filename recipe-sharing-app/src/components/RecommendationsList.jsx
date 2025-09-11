import { useEffect } from "react";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const getRecommendations = useRecipeStore((state) => state.getRecommendations);

  // Run once when component mounts (or whenever recipes/favorites change)
  useEffect(() => {
    getRecommendations();
  }, [getRecommendations]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>✨ Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add more recipes or update favorites!</p>
      ) : (
        recommendations.map((recipe) => (
          <div
            key={recipe.id}
            style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;