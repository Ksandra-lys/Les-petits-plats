export function handleTagRemove(update, state) {
    document.addEventListener("click", (e) => {
        const closeBtn = e.target.closest(".close_selected_tag")
        if (!closeBtn) return
        const chip = closeBtn.closest("[data-type][data-value]")
        const { type, value } = chip.dataset
        state[type] = state[type].filter(v => v !== value)
        update()
    })
}
