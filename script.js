const chevronIcons = Array.from(document.querySelectorAll(".icon"));
const accordionItems = Array.from(document.querySelectorAll(".item"));

const toggleAccordion = (index) => {
    accordionItems.forEach((accordion, idx) => {
        if (idx === index) {
            accordion.classList.toggle("open");
            if (accordion.classList.contains("open")) {
                accordion.children[2].innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
            } else {
                accordion.children[2].innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
            }
        } else {
            accordion.classList.remove("open");
        }
    });
};

chevronIcons.forEach((chevron, idx) => {
    chevron.addEventListener("click", () => {
        toggleAccordion(idx);
    });
});
