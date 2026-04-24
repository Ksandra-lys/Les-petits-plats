import { normalise } from "../helpers/normalise.mjs";
import { displayDropdown } from "../widgets/displayDropdown.mjs";
import { displayRecipePage } from "../widgets/displayRecipePage.mjs";
//import { launchDropdown } from "./launchDropdown.mjs"
import { searchRecipeFromTagClic } from "./searchRecipeFromTagClic.mjs";
//import { searchRecipeFromTagInput } from "./searchRecipeFromTagInput.mjs";
/*export function searchRecipe(arrayOfRecipes) {
    const searchInput = document.querySelector(".search_input");
    const recipesContainer = document.querySelector(".recipes_container");
    searchInput.addEventListener("input", (e) => {
        const target = normalise(e.target.value);
        if (target.length < 3) {
            recipesContainer.innerHTML = "";
            displayRecipePage(arrayOfRecipes);
        }
        const results = arrayOfRecipes.filter((recipe) => {
            const nameMatch = normalise(recipe.name).includes(target);
            const descMatch = normalise(recipe.description).includes(target);
            const ingMatch = recipe.ingredients.some((item) =>
                normalise(item.ingredient).includes(target),
            );
            return nameMatch || descMatch || ingMatch;
        }); 
        recipesContainer.innerHTML = "";
        if (results.length > 0) {
            displayRecipePage(results);
            displayDropdown(results);
            searchRecipeFromTagClic(results)
            
            //searchRecipeFromTagClic(arrayOfRecipes)
            
            console.log(results);
        } else {
            recipesContainer.innerHTML = `<p>Aucune recette ne correspond à votre critère</p>`;
        }
    });
    //searchRecipeFromTagInput(results)
} */


export function searchRecipe(arrayOfRecipes) {
    const searchInput = document.querySelector(".search_input");
    const recipesContainer = document.querySelector(".recipes_container");

    searchInput.addEventListener("input", (e) => {
        const target = normalise(e.target.value);

        if (target.length < 3) {
            recipesContainer.innerHTML = "";
            displayRecipePage(arrayOfRecipes);
        }

        const results = [];
        // 🔁 Boucle principale (remplace filter)
        for (let i = 0; i < arrayOfRecipes.length; i++) {
            const recipe = arrayOfRecipes[i];
            const nameMatch = normalise(recipe.name).includes(target);
            const descMatch = normalise(recipe.description).includes(target);
            let ingMatch = false;

           
            for (let j = 0; j < recipe.ingredients.length; j++) {
                const item = recipe.ingredients[j];

                if (normalise(item.ingredient).includes(target)) {
                    ingMatch = true;
                    break;
                }
            }

            if (nameMatch || descMatch || ingMatch) {
                results.push(recipe);
            }
        }

        recipesContainer.innerHTML = "";

        if (results.length > 0) {
            displayRecipePage(results);
            displayDropdown(results);
            searchRecipeFromTagClic(results);

            console.log(results);
        } else {
            recipesContainer.innerHTML = `<p>Aucune recette ne correspond à votre critère</p>`;
        }
    });
}

