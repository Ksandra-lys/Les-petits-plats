export function displayRecipePage(arrayOfRecipe) {
    const recipesContainer = document.querySelector(".recipes_container")
    arrayOfRecipe.forEach((recipes) => {
    recipesContainer.innerHTML += `
    <div class="recipe_container">
        <div class="recipe_picture"></div>
            <div class="recipe_informations">
                <div class="recipe_informations_top">
                    <p>${recipes.name}</p>
                    <div class="time">
                        <img src="/assets/icons/clock.svg" alt="" />
                        <span>${recipes.time} min</span>
                    </div>
                </div>
                <div class="recipe_informations_end">
                    <span class="recipe_ingredients">
                            ${recipes.ingredients.map((ingredient) => {  
                            return `<span class="recipe_ingredients_info">
                                    <span class="ingredient">${ingredient.ingredient ?? ""} : </span>
                                    <span class="recipe_quantity">${ingredient.quantity ?? ""}</span>
                                    <span class="recipe_unit">${ingredient.unit ?? ""}</span>
                                    </span>
                            `;  
                            }).join("")
                        }
                    </span>
                    <span class="recipe_description">
                        ${recipes.description}
                    </span>
                </div>    
            </div>
        </div>
    </div>
    `
    })
}
