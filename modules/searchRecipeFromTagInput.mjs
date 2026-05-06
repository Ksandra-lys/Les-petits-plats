import { normalise } from "../helpers/normalise.mjs";
export function searchRecipeFromTagInput(arrayOfRecipe) {
    const tagIng = [
        ...new Set(
            arrayOfRecipe.flatMap((recipe) =>
                recipe.ingredients.map((item) => item.ingredient.toLowerCase()),
            ), 
        ),
    ];
    const tagAppl = [
        ...new Set(arrayOfRecipe.map((recipe) => recipe.appliance.toLowerCase()))
    ]

    const tagUst = [
        ...new Set(arrayOfRecipe.flatMap((recipe) => recipe.ustensils))
    ]
   

    const ingInput = document.querySelector(".dropdown_header_ingredients span");
    const applInput = document.querySelector(".dropdown_header_appliances span");
    const ustInput = document.querySelector(".dropdown_header_ustensils span");
    const dropdownMenuIng = document.querySelector(".dropdown_ingredients .dropdown_menu");
    
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

    const dropdownMenuAppl = document.querySelector(".dropdown_appliances .dropdown_menu");
    applInput.addEventListener("input", (e) => {
        const target = normalise(e.target.value);
        if (target.length < 1) {
            dropdownMenuAppl.innerHTML = [
            ...new Set(
                arrayOfRecipe.map((recipe) =>
                        recipe.appliance.trim().toLowerCase(),
                    ),
                ),
            ]
            .map(
                (appliance) =>
                    `<li class="dropdown_option">
            ${appliance.charAt(0).toUpperCase() + appliance.slice(1)}
           </li>`,
                )
                .join("");
        } else {
            const matchTagAppl = tagAppl.filter((item) =>
                normalise(item).includes(target),
            );
            console.log(matchTagAppl);
            dropdownMenuAppl.innerHTML = "";
            dropdownMenuAppl.innerHTML = matchTagAppl
                .map(
                    (item) =>
                        `<li class="dropdown_option">${item.charAt(0).toUpperCase() + item.slice(1)}</li>`,
                )
                .join("");
        }
    });
     
    const dropdownMenuUst = document.querySelector(".dropdown_ustensils .dropdown_menu");
    ustInput.addEventListener("input", (e) => {
        const target = normalise(e.target.value);
        if (target.length < 1) {
            dropdownMenuAppl.innerHTML = [
            ...new Set(
                arrayOfRecipe.flatMap((recipe) =>
                        recipe.ustensils
                    ),
                ),
            ]                                        
            .map(
                (ustensil) => 
                    `<li class="dropdown_option">
            ${ustensil.charAt(0).toUpperCase() + ustensil.slice(1)}
           </li>`,
                )
                .join("");
        } else {
            const matchTagUst = tagUst.filter((item) =>
                normalise(item).includes(target),
            );
            console.log(matchTagUst);
            dropdownMenuUst.innerHTML = "";
            dropdownMenuUst.innerHTML = matchTagUst
                .map(
                    (item) =>
                        `<li class="dropdown_option">${item.charAt(0).toUpperCase() + item.slice(1)}</li>`,
                )
                .join("");
        }
    });
}