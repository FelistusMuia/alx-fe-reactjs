import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); 
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log({ title, ingredients, steps });

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md md:w-1/2 md:mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add Recipe
      </h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Ingredients:</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border p-2 w-full rounded"
        />
        {errors.ingredients && (
          <p className="text-red-500">{errors.ingredients}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Preparation Steps:</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border p-2 w-full rounded"
        />
        {errors.steps && <p className="text-red-500">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;