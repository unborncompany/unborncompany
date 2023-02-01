
//Este es un codigo para una caja que flota, se puede mover arrastrandola, y tiene un botón para cerrar

var floatingDiv = document.getElementById("floating-div");
var closeButton = document.getElementById("close-button");
var isDragging = false;
var currentX;
var currentY;
var offsetX = 0;
var offsetY = 0;

floatingDiv.addEventListener("mousedown", function(e) {
  isDragging = true;
  currentX = e.clientX;
  currentY = e.clientY;
  offsetX = currentX - floatingDiv.offsetLeft;
  offsetY = currentY - floatingDiv.offsetTop;
});




closeButton.addEventListener("click", function() {
  floatingDiv.style.display = "none";
  floatingAlert.style.display = "none";

});

document.addEventListener("mouseup", function() {
  isDragging = false;
});

document.addEventListener("mousemove", function(e) {
  if (isDragging) {
    floatingDiv.style.left = (e.clientX - offsetX) + "px";
    floatingDiv.style.top = (e.clientY - offsetY) + "px";
  }
});

