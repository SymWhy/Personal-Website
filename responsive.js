var lastWidth = null;

var f = document.getElementById("filter-div-container");
var about = document.getElementById("about-container");
var aboutOpener = document.getElementById("about-opener");
var aboutCloser = document.getElementById("about-closer");


window.onload = respond();
window.addEventListener("resize", () => { respond() });

function respond() {
    if (window.innerWidth > 1550) {

        if (lastWidth < 790) {
            //show the about box if hidden
            w3RemoveClass(about, "mobile");
            w3RemoveClass(about, "hidden");

            //hide the tab buttons
            w3RemoveClass(aboutCloser, "mobile");
            w3RemoveClass(aboutCloser, "hidden");
            w3RemoveClass(aboutOpener, "mobile");
            w3RemoveClass(aboutOpener, "hidden");
        };

        //set columns to 3
        f.style.setProperty("grid-template-columns", "repeat(3, 1fr)");
    }

    else if (window.innerWidth > 1070) {
        if (lastWidth < 790) {
            //show the about box if hidden
            w3RemoveClass(about, "mobile");
            w3RemoveClass(about, "hidden");
            
            //hide the tab buttons
            w3RemoveClass(aboutCloser, "mobile");
            w3RemoveClass(aboutCloser, "hidden");
            w3RemoveClass(aboutOpener, "mobile");
            w3RemoveClass(aboutOpener, "hidden");
        };

        //set columns to 2
        f.style.setProperty("grid-template-columns", "repeat(2, 1fr)");
    }

    else if (window.innerWidth > 790) {
        if (lastWidth < 790) {
            //show the about box if hidden
            w3RemoveClass(about, "mobile");
            w3RemoveClass(about, "hidden");
            
            //hide the tab buttons
            w3RemoveClass(aboutCloser, "mobile");
            w3RemoveClass(aboutCloser, "hidden");
            w3RemoveClass(aboutOpener, "mobile");
            w3RemoveClass(aboutOpener, "hidden");
        }

        //set columns to 1
        f.style.setProperty("grid-template-columns", "repeat(1, 1fr)");
    }

    else {
        //hide the about box
        w3AddClass(about, "mobile");
        w3AddClass(about, "hidden");

        //add mobile tag to closer-opener
        w3AddClass(aboutCloser, "mobile");
        w3AddClass(aboutOpener, "mobile");

        //hide the aboutCloser
        w3AddClass(aboutCloser, "hidden");

        //set columns to 1
        f.style.setProperty("grid-template-columns", "repeat(1, 1fr)");
    }

    //store current width
    lastWidth = window.innerWidth;
}

function openToClosed() {
    w3AddClass(aboutCloser, "hidden");
    w3RemoveClass(aboutOpener, "hidden");
    w3AddClass(about, "hidden");
}

function closedToOpen() {
    w3RemoveClass(aboutCloser, "hidden");
    w3AddClass(aboutOpener, "hidden");
    w3RemoveClass(about, "hidden");
}



// rebuild some functions from filter.js
// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

function hasClass(element, name) {
    var array;
    array = element.className.split(" ").sort();
    if (array[1] == name || array[2] == name) { return true; }
    else { return false; }
}