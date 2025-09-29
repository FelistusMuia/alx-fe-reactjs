import { useState, useEffect } from "react";
import data from "../data.json"; 

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        🍴 Recipe Sharing Platform
      </h1>

      {/* Grid of cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Recipe Details */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{recipe.summary}</p>

              <a
                href="#"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
              >
                View Recipe →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;