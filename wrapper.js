const myBody = document.getElementsByClassName("body");
const myDiv = document.getElementById("wrapper");

const myObserver = new ResizeObserver(() => {
    checkIsMobile();
}).observe(document.body);

document.addEventListener("load", checkIsMobile());
document.addEventListener("resize", checkIsMobile());

function checkIsMobile() {
    if (window.innerWidth <= 694) {
        document.getElementById("wrapper").style.gridTemplateColumns = "100%";
    }
    else {
        document.getElementById("wrapper").style.gridTemplateColumns = "50% 50%";
    }
}

