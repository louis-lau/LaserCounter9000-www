var nav = document.getElementsByTagName("nav")[0];
// Store how much pixel from top nav is on page load
var navOffset = nav.offsetTop;

window.onresize = function(){
  // Recalculate nav offset on page resize
  if (nav.classList.contains("fixed")) {
    nav.classList.remove("fixed");
    navOffset = nav.offsetTop;
    nav.classList.add("fixed");
  }
  else {
    navOffset = nav.offsetTop;
  }
};

window.onscroll = function() {
  // Make nav sticky when scrolled to top of screen
  if (window.pageYOffset >= navOffset) {
    nav.classList.add("fixed");
  }
  else {
    nav.classList.remove("fixed");
  }
};
