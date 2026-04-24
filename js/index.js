import { recipes } from "../data/recipes.js";
import { displayRecipePage } from "../widgets/displayRecipePage.mjs";
import { searchRecipe } from "../modules/searchRecipe.mjs";
import { launchDropdown } from "../modules/launchDropdown.mjs";
import { displayDropdown } from "../widgets/displayDropdown.mjs";
import { searchRecipeFromTagInput } from "../modules/searchRecipeFromTagInput.mjs";
import { searchRecipeFromTagClic } from "../modules/searchRecipeFromTagClic.mjs";

document.addEventListener("DOMContentLoaded", async () => {
    displayRecipePage(recipes);
    displayDropdown(recipes)
    searchRecipe(recipes)
    
    launchDropdown()
    searchRecipeFromTagInput(recipes)
    searchRecipeFromTagClic(recipes)
   
})

