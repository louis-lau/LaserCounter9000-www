const logo = document.querySelector(".logo");
const laserLine = document.querySelector("#laser-line");
const humanInside = document.querySelector("#human-inside");
const humanInsideStationary = document.querySelector("#human-inside-stationary");
const humanOutside = document.querySelector("#human-outside");
const humanOutsideStationary = document.querySelector("#human-outside-stationary");
const demoLaserLine1 = document.querySelector("#demo-laser-line-1");
const demoLaserLine2 = document.querySelector("#demo-laser-line-2");
const counterNumber = document.querySelector(".counter-number");
const nav = document.querySelector("nav");
// Store how much pixel from top nav is on page load
let navOffset = nav.offsetTop;
let peopleAmount = 1;

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

humanInside.addEventListener("click", function(event) {
  if (!peopleAmount <= 0) {
    humanInside.classList.add('move');
    humanInsideStationary.classList.add('hide');
    setTimeout(function() {
      humanInsideStationary.classList.remove('hide');
      peopleAmount--;
      counterNumber.textContent = peopleAmount
    }, 50);
    setTimeout(function() {
      humanInside.classList.remove('move');
    }, 300);
  }
});

humanOutside.addEventListener("click", function(event) {
  humanOutside.classList.add('move');
  humanOutsideStationary.classList.add('hide');
  setTimeout(function() {
    humanOutsideStationary.classList.remove('hide');
    peopleAmount++;
    counterNumber.textContent = peopleAmount
  }, 50)
  setTimeout(function() {
    humanOutside.classList.remove('move');
  }, 300)
});
