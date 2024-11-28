import { recipeNames } from "./App";
import { RecipeOptions } from "./RecipeOptions";

export function Settings({
  selectedRecipe,
  onSetSelectedRecipe,
  numOfServings,
  onSetNumOfServings,
}) {
  const recipes = recipeNames;
  return (
    <div className=" settings">
      <h2 className="margin">Settings</h2>
      <div className=" margin flex">
        <div>
          <h3>Recipe</h3>
          <select
            value={selectedRecipe}
            onChange={(e) => onSetSelectedRecipe(e.target.value)}
          >
            {recipes.map((recipe) => (
              <RecipeOptions recipeObj={recipe} key={recipe.title} />
            ))}
          </select>
        </div>
        <div className="setting">
          <h3>Number Of Servings</h3>
          <select
            value={numOfServings}
            onChange={(e) => onSetNumOfServings(e.target.value)}
          >
            {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
