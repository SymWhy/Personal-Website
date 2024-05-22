var e = document.getElementById("filter-div-container");

respond()

window.addEventListener("resize", respond());

function respond() {
    if (window.innerWidth > 1200) {
        e.style.setProperty("grid-template-columns", "repeat(3, 1fr)");
    }

    else if (window.innerWidth > 800) {
        e.style.setProperty("grid-template-columns", "repeat(2, 1fr)");
    }

    else {
        e.style.setProperty("grid-template-columns", "repeat(1, 1fr)");
    }
}