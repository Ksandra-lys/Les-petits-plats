export function closeTag(tagContainer) {
    tagContainer.addEventListener("click", (e) => {
        console.log(tagContainer)
        const target = e.target;
        if (target.classList.contains("close_selected_tag")) {
            target.parentElement.remove();
        }
    });
}


