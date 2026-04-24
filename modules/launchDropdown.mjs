export function launchDropdown() {
  document.addEventListener("click", (e) => {
    const target = e.target
    if (target.closest(".dropdown_header_ingredients")) {
      const dropdownIng = document.querySelector(".dropdown_ingredients")
      const dropdownHeaderIngSpan = target.closest(".dropdown_header_ingredients").querySelector("span")
      const isActive = dropdownIng.classList.toggle("active")
      if (isActive) {
        dropdownHeaderIngSpan.innerHTML = `<input type="search" id="ingSearch" placeholder="Rechercher un ingrédient" class="dropdown_input">`
        document.getElementById("ingSearch").focus()
      } else {
        dropdownHeaderIngSpan.innerText = "Ingrédients"
      }
    }

    if (target.closest(".dropdown_header_appliances")) {
      const dropdownAppl = document.querySelector(".dropdown_appliances")
      const isActive = dropdownAppl.classList.toggle("active")
      const dropdownHeaderApplSpan = target.closest(".dropdown_header_appliances").querySelector("span")
      if (isActive) {
        dropdownHeaderApplSpan.innerHTML = `<input type="search" id="applSearch" placeholder="Rechercher un appareil" class="dropdown_input">`
      } else {
        dropdownHeaderApplSpan.innerText = "Appareils"
      }
    }

    if (target.closest(".dropdown_header_ustensils")) {
      const dropdownUst = document.querySelector(".dropdown_ustensils")
      const dropdownHeaderUstSpan = target.closest(".dropdown_header_ustensils").querySelector("span")
      const isActive = dropdownUst.classList.toggle("active")
      if (isActive) {
        dropdownHeaderUstSpan.innerHTML = `<input type="search" id="ustSearch" placeholder="Rechercher un ustensile" class="dropdown_input">`
        document.getElementById("ustSearch").focus()
      } else {
        dropdownHeaderUstSpan.innerText = "Ustensiles"
      }
    }
  })
}
