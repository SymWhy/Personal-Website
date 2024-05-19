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
function updateThumbs(myModalClass, element) {
    //get the active thumbnail
    var myModal = document.getElementById(myModalClass);
    var current = myModal.getElementsByClassName("active");
    //remove the "active" class from the previously active thumbnail
    current[0].className = current[0].className.replace(" active", "");
    //add the "active" class to this clicked thumbnail
    element.className += " active";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

  //nullify globals
  modal = null;
  imgArray = null;
  thumbArray = null;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

    //nullify globals
    modal = null;
    imgArray = null;
  }
} 

