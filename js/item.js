
document.getElementById("services").addEventListener("click", function(event) {
    event.preventDefault();
    var imageServices = document.querySelector(".image-services");
    imageServices.style.display = "block";
  });
  
  document.addEventListener("click", function(event) {
    var elemento = event.target;
    var imageServices = document.querySelector(".image-services");
    if (!elemento.closest(".navbar") && imageServices.style.display === "block") {
        imageServices.style.display = "none";
    }
  });
  
  