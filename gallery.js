var currentIndex = 0;
var images = null;
var totalImages = null;


// Open the lightbox
function openLightbox(element, event) {
  imagesContainer = document.getElementById('modal-img-' + element.id);
  console.log(imagesContainer);
  images = imagesContainer.querySelectorAll("IMG");
  // images = document.querySelectorAll('.modal-img-' + element.id).getElementsByType("IMG");
  console.log(images);
  totalImages = images.length;

  currentIndex = 0;

  updateLightboxImage();

  document.getElementById("modal").style.display = "block";
}

// Close the lightbox
function closeLightbox() {
  document.getElementById('modal').style.display = 'none';
}

// Change the lightbox image based on direction (1 for next, -1 for prev)
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }
  updateLightboxImage();
}

// Update the lightbox image and thumbnails
function updateLightboxImage() {
  const lightboxImg = document.getElementById('modal-img');
  const thumbnailContainer = document.getElementById('modal-thumbs');

  // Update the main lightbox image
  lightboxImg.src = images[currentIndex].src;

  // Clear existing thumbnails
  thumbnailContainer.innerHTML = '';

  // Add new thumbnails
  images.forEach((image, index) => {
    console.log(image);
    const thumbnail = document.createElement('img');
    thumbnail.src = image.src;
    thumbnail.alt = `Thumbnail ${index + 1}`;
    thumbnail.classList.add('thumbnail');
    thumbnail.addEventListener('click', () => updateMainImage(index));
    thumbnailContainer.appendChild(thumbnail);
  });

  // Highlight the current thumbnail
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails[currentIndex].classList.add('active-thumbnail');
}

// Update the main lightbox image when a thumbnail is clicked
function updateMainImage(index) {
  currentIndex = index;
  updateLightboxImage();
}
