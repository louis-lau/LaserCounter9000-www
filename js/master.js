const logo = document.querySelector(".logo");
const laserLine = document.querySelector("#laser-line");
const nav = document.querySelector("nav");
// Store how much pixel from top nav is on page load
let navOffset = nav.offsetTop;

window.addEventListener("resize", function(event) {
  // Recalculate nav offset on page resize
  if (nav.classList.contains("fixed")) {
    nav.classList.remove("fixed");
    navOffset = nav.offsetTop;
    nav.classList.add("fixed");
  }
  else {
    navOffset = nav.offsetTop;
  }
});

window.addEventListener("scroll", function(event) {
  // Make nav sticky when scrolled to top of screen
  if (window.pageYOffset >= navOffset) {
    nav.classList.add("fixed");
  }
  else {
    nav.classList.remove("fixed");
  }
});

// Turn on laser 500ms after page load. CSS is used to animate
setTimeout(function() {
  logo.classList.add("laser-on");
}, 500);

// Turn laser off and on again when going over it with your mouse
laserLine.addEventListener("mouseover", function(event) {
    logo.classList.remove("laser-on");
    setTimeout(function() {
      logo.classList.add("laser-on");
    }, 1000);
});
