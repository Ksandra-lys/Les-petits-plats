import { normalise } from "../helpers/normalise.mjs"

export function filterRecipes(recipes, state) {
  return recipes.filter(recipe => {
    const ingOk = state.ingredients.every(tag =>
      recipe.ingredients.some(i => normalise(i.ingredient) === normalise(tag))
    )

    const applOk = state.appliances.every(tag =>
      normalise(recipe.appliance) === normalise(tag)
    )

    const ustOk = state.ustensils.every(tag =>
      recipe.ustensils.some(u => normalise(u) === normalise(tag))
    )

    return ingOk && applOk && ustOk
  })
}
