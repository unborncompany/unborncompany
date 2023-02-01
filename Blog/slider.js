const slider = document.querySelector('#slider');

window.addEventListener('mousewheel', function(event) {
  if (!slider.contains(event.target)) return;
  event.preventDefault();
  slider.scrollLeft += event.deltaY;
});
