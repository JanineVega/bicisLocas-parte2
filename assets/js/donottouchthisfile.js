var element = document.querySelector(".form-signup");
//var element=document.getElementById("subir");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});
