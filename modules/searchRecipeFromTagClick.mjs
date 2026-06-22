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

export function handleTagAdd(addTag) {
  document.addEventListener("click",(e)=>{
    const li = e.target.closest(".dropdown_menu li")
  if (!li) return
  const config = DROPDOWNS.find(c => li.closest(c.dropdown))
  if (!config) return
  addTag(config.stateKey, li.innerText.trim())
  })
  
}

