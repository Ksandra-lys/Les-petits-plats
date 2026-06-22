export function displayRecipePage(arrayOfRecipe) {
  const recipesContainer = document.querySelector(".recipes_container")

  if (arrayOfRecipe.length === 0) {
    recipesContainer.innerHTML = `<p>Aucune recette ne correspond à votre critère</p>`
    return
  }

  recipesContainer.innerHTML = arrayOfRecipe.map(recipe => `
    <div class="recipe_container">
      <div class="recipe_picture"></div>
      <div class="recipe_informations">
        <div class="recipe_informations_top">
          <p>${recipe.name}</p>
          <div class="time">
            <img src="/assets/icons/clock.svg" alt="" />
            <span>${recipe.time} min</span>
          </div>
        </div>
        <div class="recipe_informations_end">
          <span class="recipe_ingredients">
            ${recipe.ingredients.map(ing => `
              <span class="recipe_ingredients_info">
                <span class="ingredient">${ing.ingredient} : </span>
                <span class="recipe_quantity">${ing.quantity ?? ""}</span>
                <span class="recipe_unit">${ing.unit ?? ""}</span>
              </span>
            `).join("")}
          </span>
          <span class="recipe_description">${recipe.description}</span>
        </div>
      </div>
    </div>
  `).join("")
}

