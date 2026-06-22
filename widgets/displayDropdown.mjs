export function displayDropdown(arrayOfRecipe){
    const dropdownContainer = document.querySelector(".dropdown_container")
    dropdownContainer.innerHTML =`
    <div class="dropdown_ingredients">
        <div class="dropdown_header_ingredients">
            <span>Ingrédients</span>
            <img src="/assets/icons/chevron_down.svg" alt="" class="chevron_down"/>
        </div>
        <ul class="dropdown_menu">
            ${[...new Set(   
           arrayOfRecipe.flatMap(recipe =>
           recipe.ingredients.map(item =>
           item.ingredient.trim().toLowerCase()
           )
           )
          )]
          .map(ingredient =>  
          `<li class="dropdown_option">
            ${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
           </li>`
            )
            .join("")}
        </ul>
    </div>                                         
    <div class="dropdown_appliances">
        <div class="dropdown_header_appliances">
            <span>Appareils</span>
            <img src="/assets/icons/chevron_down.svg" alt="" class="chevron_down"/>
        </div>
        <ul class="dropdown_menu">
           ${[...new Set(arrayOfRecipe.map(item => item.appliance))]
            .map(appliance => `<li class="dropdown_option">${appliance}</li>`)
            .join("")}
        </ul>
    </div>
    <div class="dropdown_ustensils">
        <div class="dropdown_header_ustensils">
            <span>Ustensiles</span>
            <img src="/assets/icons/chevron_down.svg" alt="" class="chevron_down"/>
        </div>
        <ul class="dropdown_menu">
            ${[...new Set(arrayOfRecipe.flatMap(recipe => recipe.ustensils))]
            .map(ustensil => `<li class="dropdown_option">${ustensil.charAt(0).toUpperCase() + ustensil.slice(1)}</li>`)
            .join("")}
        </ul> 
    </div>
    `    
}