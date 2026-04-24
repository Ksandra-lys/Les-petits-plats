import { normalise } from "../helpers/normalise.mjs"
import { displayDropdown } from "../widgets/displayDropdown.mjs"
import { displayRecipePage } from "../widgets/displayRecipePage.mjs"
import { closeTag } from "./closeTag.mjs"
import { searchRecipeFromTagInput } from "./searchRecipeFromTagInput.mjs"
export function searchRecipeFromTagClic(arrayOfRecipe) {
    const recipesContainer = document.querySelector(".recipes_container")
    const tagIngredientsContainer = document.querySelector(".tag_ingredients_container")
    const tagAppliancesContainer = document.querySelector(".tag_appliances_container")
    const tagUstensilsContainer = document.querySelector(".tag_ustensils_container")
    const selectedIngredients = []
    document.addEventListener("click", (e) => {
        const targetItemIng = e.target.closest(".dropdown_ingredients .dropdown_menu li")
            if (targetItemIng) {
            const ingredientValue = targetItemIng.innerText
            if (!selectedIngredients.includes(ingredientValue)) {
                selectedIngredients.push(ingredientValue)
                tagIngredientsContainer.innerHTML += `
                    <div class="tag_ingredients">
                        <span>${ingredientValue}</span> 
                        <img src="/assets/icons/close.svg" alt="close" class="close_selected_tag close_tagIng">
                    </div>
                `
                const results = arrayOfRecipe.filter((recipe) => {
                    const ingClicked = recipe.ingredients.some((item) =>
                        normalise(item.ingredient).includes(normalise(ingredientValue))
                    )
                    return ingClicked
                })
                recipesContainer.innerHTML = ""
                displayRecipePage(results)
                displayDropdown(results);
            }
        }

        const targetItemAppl = e.target.closest(".dropdown_appliances .dropdown_menu li")
        const selectedAppliances = []
        if (targetItemAppl) {
            const applianceValue = targetItemAppl.innerText
            if (!selectedAppliances.includes(applianceValue)) {
                selectedAppliances.push(applianceValue)
                tagAppliancesContainer.innerHTML += `
                    <div class="tag_appliances">
                        <span>${applianceValue}</span>
                        <img src="/assets/icons/close.svg" alt="close" class="close_selected_tag close_tagAppl">
                    </div>
                `
                const results = arrayOfRecipe.filter((recipe) => {
                    const applClic = normalise(recipe.appliance).includes(normalise(applianceValue))
                    return applClic
                })
                recipesContainer.innerHTML = ""
                displayRecipePage(results)
                displayDropdown(results);
            }
        }

        const targetItemUst = e.target.closest(".dropdown_ustensils .dropdown_menu li")
        const selectedUstensils = []
        if (targetItemUst) {
            const ustensilValue = targetItemUst.innerText
            console.log(ustensilValue)
            if (!selectedUstensils.includes(ustensilValue)) {
                selectedUstensils.push(ustensilValue)
                tagUstensilsContainer.innerHTML += `
                    <div class="tag_ustensils">
                        <span>${ustensilValue}</span>
                        <img src="/assets/icons/close.svg" alt="" class="close_selected_tag" id="close_tagUst">
                    </div>
                `
                const results = arrayOfRecipe.filter((recipe) => {
                    return recipe.ustensils.includes(normalise(ustensilValue))
                })
                
                console.log(results)
                recipesContainer.innerHTML = ""
                displayRecipePage(results)
                displayDropdown(results);
            }
        }
    });

    searchRecipeFromTagInput(arrayOfRecipe)
    closeTag(tagIngredientsContainer);
    closeTag(tagAppliancesContainer)
    closeTag(tagUstensilsContainer)
}