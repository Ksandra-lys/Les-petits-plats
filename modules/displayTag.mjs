export function displayTags(state) {
  document.querySelector(".tag_ingredients_container").innerHTML =
    state.ingredients.map(v => tagHTML("ingredients", v, "tag_ingredients")).join("")

  document.querySelector(".tag_appliances_container").innerHTML =
    state.appliances.map(v => tagHTML("appliances", v, "tag_appliances")).join("")

  document.querySelector(".tag_ustensils_container").innerHTML =
    state.ustensils.map(v => tagHTML("ustensils", v, "tag_ustensils")).join("")
}

function tagHTML(type, value, cssClass) {
  return `
    <div class="${cssClass}" data-type="${type}" data-value="${value}">
      <span>${value}</span>
      <img src="/assets/icons/close.svg" alt="close" class="close_selected_tag" />
    </div>
  `
}
