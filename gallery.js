var modal = null;
var imgArray = null;
var thumbArray = null;

function myFunction(element) {
    modal = document.getElementById("modal-" + element.id);
    imgArray = modal.getElementsByClassName("modal-img");
    thumbArray = modal.getElementsByClassName("modal-img-thumb");
    modal.style.display = "block";
    imgArray[0].style.display = "block";
}

// Add active class to the current thumbnail button (highlight it)
function updateThumbs(element) {
    //get the active thumbnail
    var current = modal.getElementsByClassName("modal-thumbs")[0].getElementsByClassName("active");
    //remove the "active" class from the previously active thumbnail
    current[0].className = current[0].className.replace(" active", "");
    //add the "active" class to this clicked thumbnail
    element.className += " active";

    var myImg = document.getElementById(element.id.replace("-thumb", ""));

    updateImage(myImg);
    
}

function updateImage(element) {
    //get the active image
    var currentImg = modal.getElementsByClassName("modal-img-container")[0].getElementsByClassName("visible")[0];
    //hide the previously active image
    currentImg.className = currentImg.className.replace(" visible", "");
    currentImg.style.display = "none";
    //add the "visible" class to the new active image
    element.className += " visible";
    element.style.display = "block";
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    updateThumbs(thumbArray[0]);
    modal.style.display = "none";

    //nullify globals
    modal = null;
    imgArray = null;
    thumbArray = null;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    updateThumbs(thumbArray[0]);
    modal.style.display = "none";

    //nullify globals
    modal = null;
    imgArray = null;
    thumbArray = null;
  }
} 

