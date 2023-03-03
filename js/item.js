
function hideImages() {
  const images = document.querySelectorAll(".dropdown-item img");
  images.forEach((image) => (image.style.display = "none"));
  document.querySelector('.dropdown-menu').classList.toggle('show');


}

  