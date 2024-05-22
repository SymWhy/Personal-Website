var f = document.getElementById("filter-div-container");
var about = document.getElementById("about-container");

window.onload = respond();
window.addEventListener("resize", () => {
    
    if (window.innerWidth > 1550) {
        f.style.setProperty("grid-template-columns", "repeat(3, 1fr)");
    }

    else if (window.innerWidth > 1070) {
        f.style.setProperty("grid-template-columns", "repeat(2, 1fr)");
    }

    else {
        f.style.setProperty("grid-template-columns", "repeat(1, 1fr)");
    }
    console.log("responded!")
});

function respond() {
    
    if (window.innerWidth > 1550) {
        f.style.setProperty("grid-template-columns", "repeat(3, 1fr)");
    }

    else if (window.innerWidth > 1070) {
        f.style.setProperty("grid-template-columns", "repeat(2, 1fr)");
    }

    else {
        f.style.setProperty("grid-template-columns", "repeat(1, 1fr)");
    }
    console.log("responded!")
};