import { displayDropdown } from "../widgets/displayDropdown.mjs";
import { displayRecipePage } from "../widgets/displayRecipePage.mjs";
import { recipes } from "../data/recipes.js";
import { normalise } from "../helpers/normalise.mjs"
import { searchRecipe } from "../modules/searchRecipe.mjs";
import { filterRecipes } from "../modules/filterRecipes.mjs";
import { handleDropdownToggle } from "../modules/launchDropdown.mjs";
import { handleTagAdd } from "../modules/searchRecipeFromTagClick.mjs";
import { displayTags } from "../modules/displayTag.mjs";
import { handleTagRemove } from "../modules/closeTag.mjs";
document.addEventListener("DOMContentLoaded", () => {
  const state = { ingredients: [], appliances: [], ustensils: [] }
  let currentFiltered = [...recipes]
 
  displayDropdown(recipes)
  displayRecipePage(recipes)

  document.querySelector(".search_input").addEventListener("input", update)

  function update() {
    const query = normalise(document.querySelector(".search_input").value)
    const textFiltered = query.length >= 3 ? searchRecipe(recipes, query) : recipes
    currentFiltered = filterRecipes(textFiltered, state)

    displayRecipePage(currentFiltered)
    displayDropdown(currentFiltered)
    displayTags(state)
  }

  handleDropdownToggle(currentFiltered)

  function addTag(stateKey, value) {
    if (state[stateKey].includes(value)) return
    state[stateKey].push(value)
    update()
  }

  handleTagAdd(addTag)
  handleTagRemove(update, state)
})