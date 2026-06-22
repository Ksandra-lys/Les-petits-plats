import { normalise } from "../helpers/normalise.mjs"

const DROPDOWNS = [
  {
    header: ".dropdown_header_ingredients",
    dropdown: ".dropdown_ingredients",
    label: "Ingrédients",
    searchId: "ingSearch",
    placeholder: "Rechercher un ingrédient",
    stateKey: "ingredients",
    getItems: (r) => [...new Set(r.flatMap(x => x.ingredients.map(i => i.ingredient.toLowerCase().trim())))]
  },
  {
    header: ".dropdown_header_appliances",
    dropdown: ".dropdown_appliances",
    label: "Appareils",
    searchId: "applSearch",
    placeholder: "Rechercher un appareil",
    stateKey: "appliances",
    getItems: (r) => [...new Set(r.map(x => x.appliance.toLowerCase().trim()))]
  },
  {
    header: ".dropdown_header_ustensils",
    dropdown: ".dropdown_ustensils",
    label: "Ustensiles",
    searchId: "ustSearch",
    placeholder: "Rechercher un ustensile",
    stateKey: "ustensils",
    getItems: (r) => [...new Set(r.flatMap(x => x.ustensils.map(u => u.toLowerCase().trim())))]
  }
]

export function handleDropdownToggle(currentFiltered) {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".dropdown_input")) return

    const config = DROPDOWNS.find(c => e.target.closest(c.header))
    if (!config) return

    const dropdown = document.querySelector(config.dropdown)
    const isActive = dropdown.classList.toggle("active")

    // Fermer les autres
    DROPDOWNS.filter(c => c !== config).forEach(c => {
      document.querySelector(c.dropdown).classList.remove("active")
      document.querySelector(`${c.header} span`).innerText = c.label
    })

    const span = document.querySelector(`${config.header} span`)

    if (isActive) {
      span.innerHTML = `<input type="search" id="${config.searchId}" placeholder="${config.placeholder}" class="dropdown_input" />`
      const input = document.getElementById(config.searchId)
      input.focus()

      // Recherche dans le dropdown
      input.addEventListener("input", (e) => {
        filterInDropdown(config, normalise(e.target.value), currentFiltered)
      })
    } else {
      span.innerText = config.label
    }
  })

}

function filterInDropdown(config, query, currentFiltered) {
  const items = config.getItems(currentFiltered)
  const filtered = query ? items.filter(item => normalise(item).includes(query)) : items
  const menu = document.querySelector(`${config.dropdown} .dropdown_menu`)
  menu.innerHTML = filtered
    .map(v => `<li class="dropdown_option">${v.charAt(0).toUpperCase() + v.slice(1)}</li>`)
    .join("")
}



