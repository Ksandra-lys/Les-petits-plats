import { normalise } from "../helpers/normalise.mjs";
import { displayDropdown } from "../widgets/displayDropdown.mjs";
import { displayRecipePage } from "../widgets/displayRecipePage.mjs";
//import { searchRecipeFromTagClic } from "./searchRecipeFromTagClic.mjs";
export function searchRecipe(arrayOfRecipes) {
    const searchInput = document.querySelector(".search_input");
    const recipesContainer = document.querySelector(".recipes_container");
    searchInput.addEventListener("input", (e) => {
        const target = normalise(e.target.value);
        if (target.length < 3)
            return (
                (recipesContainer.innerHTML = ""),
                displayRecipePage(arrayOfRecipes)
            );
        const results = [];
        for (let i = 0; i < arrayOfRecipes.length; i++) {
            const recipe = arrayOfRecipes[i];
            const nameMatch = normalise(recipe.name).includes(target);
            const descMatch = normalise(recipe.description).includes(target);
            const ingMatch = recipe.ingredients.some((item) =>
                normalise(item.ingredient).includes(target),
            );
            recipesContainer.innerHTML = ""
            if (nameMatch || descMatch || ingMatch) {
                results.push(recipe);
            }
        }
        displayRecipePage(results);
        displayDropdown(results);
        //searchRecipeFromTagClic(results);
        
    });
}
