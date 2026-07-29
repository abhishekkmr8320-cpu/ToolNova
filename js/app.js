// ToolNova

const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        cards.forEach(card => {

            let text = card.textContent.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

cards.forEach(card => {

    card.addEventListener("click", () => {

        alert(card.innerText + " - Coming Soon");

    });

});
