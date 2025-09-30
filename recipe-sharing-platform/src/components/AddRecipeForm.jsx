import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // 
  const [errors, setErrors] = useState({});

  // Validation function
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

    // If no errors, you could save the recipe here
    console.log({ title, ingredients, steps });

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Add Recipe</h2>

      <div className="mb-2">
        <label className="block font-medium">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div className="mb-2">
        <label className="block font-medium">Ingredients:</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.ingredients && (
          <p className="text-red-500">{errors.ingredients}</p>
        )}
      </div>

      <div className="mb-2">
        <label className="block font-medium">Preparation Steps:</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.steps && <p className="text-red-500">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
