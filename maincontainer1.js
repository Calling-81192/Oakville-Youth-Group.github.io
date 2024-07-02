// Get the container element
var container = document.getElementById("myContainer");

// Add the scroll event listener to the container
container.addEventListener("scroll", function() {
  // Get the absolute scroll position
  var scrollTop = container.scrollTop;

  // Change the background image based on the scroll position
  if (scrollTop < 400) {
    container.style.backgroundImage = "url('image1.jpg')";
  } else {
    container.style.backgroundImage = "url('image2.jpg')";
  }
});
