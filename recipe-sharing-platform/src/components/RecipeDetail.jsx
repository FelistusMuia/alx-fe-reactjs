import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json"; 

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-xl font-semibold text-red-600">
          Recipe not found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      {/* Title & Image */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        {recipe.title}
      </h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg mb-10"
      />

      {/* Ingredients Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Ingredients
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="leading-relaxed">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Instructions
        </h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {recipe.instructions}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;