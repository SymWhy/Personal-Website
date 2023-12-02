window.addEventListener('scroll', function () {
    let mySection = document.getElementById("body");
    const myOpacity = this.scrollY / 1000;

    if (myOpacity  === 0) {
    mySection.style.opacity = 1;
    }

    if (myOpacity > 0) {
        mySection.style.opacity = `${1 - myOpa}`;
    }
});