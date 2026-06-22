import { normalise } from "../helpers/normalise.mjs";
export function searchRecipe(arrayOfRecipes, query) {
    const results = arrayOfRecipes.filter((recipe) => {
        const nameMatch = normalise(recipe.name).includes(query);
        const descMatch = normalise(recipe.description).includes(query);
        const ingMatch = recipe.ingredients.some((item) =>
            normalise(item.ingredient).includes(query),
        );
        return nameMatch || descMatch || ingMatch;
    });
    return results
}

