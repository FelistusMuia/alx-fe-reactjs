import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import Router components
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <Router>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          {/* Main page with AddRecipeForm and RecipeList */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          {/* Route for individual recipe details */}
          <Route
            path="/recipes/:id"
            element={<RecipeDetailsWrapper />}
          />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper to extract ID from URL params and pass to RecipeDetails
import { useParams } from "react-router-dom";
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App;