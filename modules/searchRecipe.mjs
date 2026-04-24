import { normalise } from "../helpers/normalise.mjs";
import { displayDropdown } from "../widgets/displayDropdown.mjs";
import { displayRecipePage } from "../widgets/displayRecipePage.mjs";
//import { launchDropdown } from "./launchDropdown.mjs"
import { searchRecipeFromTagClic } from "./searchRecipeFromTagClic.mjs";
//import { searchRecipeFromTagInput } from "./searchRecipeFromTagInput.mjs";
export function searchRecipe(arrayOfRecipes) {
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
}

/*export function searchIngredientsFromTag(arrayOfRecipe) {
    const tagIng = [
        ...new Set(
            arrayOfRecipe.flatMap((recipe) =>
                recipe.ingredients.map((item) => item.ingredient.toLowerCase()),
            ),
        ),
    ];
    const ingInput = document.querySelector(".dropdown_header_ingredients span");
    const dropdownMenuIng = document.querySelector(
        ".dropdown_ingredients .dropdown_menu",
    );
    const recipesContainer = document.querySelector(".recipes_container");
    ingInput.addEventListener("input", (e) => {
        const target = normalise(e.target.value);
        if (target.length < 1) {
            dropdownMenuIng.innerHTML = [
                ...new Set(
                    arrayOfRecipe.flatMap((recipe) =>
                        recipe.ingredients.map((item) =>
                            item.ingredient.trim().toLowerCase(),
                        ),
                    ),
                ),
            ]
                .map(
                    (ingredient) =>
                        `<li class="dropdown_option">
            ${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
           </li>`,
                )
                .join("");
        } else {
            const matchTagIng = tagIng.filter((item) =>
                normalise(item).includes(target),
            );
            console.log(matchTagIng);
            dropdownMenuIng.innerHTML = "";
            dropdownMenuIng.innerHTML = matchTagIng
                .map(
                    (item) =>
                        `<li class="dropdown_option">${item.charAt(0).toUpperCase() + item.slice(1)}</li>`,
                )
                .join("");
        }
    });

    const tagIngredientsContainer = document.querySelector(
        ".tag_ingredients_container",
    );
    const selectedIngredients = [];
    dropdownMenuIng.addEventListener("click", (e) => {
        const targetItem = e.target;
        if (targetItem && !selectedIngredients.includes(targetItem.innerText)) {
            selectedIngredients.push(targetItem.innerText);
            tagIngredientsContainer.innerHTML += `
           <div class="tag_ingredients">
           <span>${targetItem.innerText}</span> 
           <img src="/assets/icons/close.svg" alt="" class="close_selected_tag close_tagIng" >
           </div>
           `;

            const results = arrayOfRecipe.filter((recipe) => {
                const ingMatch = recipe.ingredients.some((item) =>
                    normalise(item.ingredient).includes(normalise(targetItem.innerText))
                ) 
                return ingMatch
            })
             
            console.log(results)
            recipesContainer.innerHTML = "";
            displayRecipePage(results);
           
        }
    });

    tagIngredientsContainer.addEventListener("click", (e) => {
        console.log(tagIngredientsContainer);
        const target = e.target;
        if (target.classList.contains("close_tagIng")) {
            target.parentElement.remove();
        }
    });
}*/

/*export function searchAppliancesFromTag(arrayOfRecipe) {
    const tagAppl = [
        ...new Set(arrayOfRecipe.map((item) => normalise(item.appliance))),
    ];
    const ApplInput = document.querySelector(".dropdown_header_appliances span");
    const dropdownMenuAppl = document.querySelector(
        ".dropdown_appliances .dropdown_menu"
    );
    ApplInput.addEventListener("input", (e) => {
        const target = normalise(e.target.value);
        if (target.length < 1) {
            dropdownMenuAppl.innerHTML = [
                ...new Set(arrayOfRecipe.map((recipe) => recipe.appliance)),
            ]
                .map((appliance) => `<li class="dropdown_option">${appliance}</li>`)
                .join("");
        } else {
            const matchTagAppl = tagAppl.filter((item) =>
                normalise(item).includes(target),
            );
            dropdownMenuAppl.innerHTML = "";
            dropdownMenuAppl.innerHTML = matchTagAppl
                .map((appliance) => `<li class="dropdown_option">${appliance}</li>`)
                .join("");
        }
    });

    const tagAppliances = document.querySelector(".tag_appliances");
    const tagAppliancesSpan = document.querySelector(".tag_appliances span");
    dropdownMenuAppl.addEventListener("click", (e) => {
        const target = e.target;
        const targetItem = target.innerText;
        if (targetItem) {
            tagAppliances.style.display = "flex";
            tagAppliancesSpan.innerText = targetItem;
            console.log(tagIngredients);
        }
    });
    const closeTag = document.getElementById("close_tagAppl");
    closeTag.addEventListener("click", () => {
        tagAppliances.style.display = "none";
    });
}

export function searchUstensilsFromTag(arrayOfRecipe) {
    const tagUst = [...new Set(arrayOfRecipe.flatMap((item) => item.ustensils))];
    const UstInput = document.querySelector(".dropdown_header_ustensils span");
    const dropdownMenuUst = document.querySelector(
        ".dropdown_ustensils .dropdown_menu",
    );
    UstInput.addEventListener("input", (e) => {
        const target = normalise(e.target.value);
        if (target.length < 1) {
            dropdownMenuUst.innerHTML = [
                ...new Set(arrayOfRecipe.flatMap((recipe) => recipe.ustensils)),
            ]
                .map(
                    (ustensil) =>
                        `<li class="dropdown_option">${ustensil.charAt(0).toUpperCase() + ustensil.slice(1)}</li>`,
                )
                .join("");
        } else {
            const matchTagUst = tagUst.filter((item) =>
                normalise(item).includes(target),
            );
            dropdownMenuUst.innerHTML = "";
            dropdownMenuUst.innerHTML = matchTagUst
                .map((ustensil) => `<li class="dropdown_option">${ustensil}</li>`)
                .join("");
        }
    });

    const tagUstensils = document.querySelector(".tag_ustensils");
    const tagUstensilsSpan = document.querySelector(".tag_ustensils span");
    dropdownMenuUst.addEventListener("click", (e) => {
        const target = e.target;
        console.log(target);
        const targetItem = target.innerText;
        if (targetItem) {
            tagUstensils.style.display = "flex";
            tagUstensilsSpan.innerText = targetItem;
            console.log(tagUstensils);
        }
    });
    const closeTag = document.getElementById("close_tagUst");
    closeTag.addEventListener("click", () => {
        tagUstensils.style.display = "none";
    });
}*/
