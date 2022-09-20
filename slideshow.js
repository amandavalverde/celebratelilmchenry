const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const pause = document.querySelector('#pause');
const auto = true; // Auto scroll
const intervalTime = 7000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

/* pause.addEventListener('click', e => {

}); */

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Disappearing Cursor

(function() {
    var mouseTimer = null, cursorVisible = true;

    function disappearCursor() {
        mouseTimer = null;
        document.body.style.cursor = "none";
        cursorVisible = false;
    }

    document.onmousemove = function() {
        if (mouseTimer) {
            window.clearTimeout(mouseTimer);
        }
        if (!cursorVisible) {
            document.body.style.cursor = "default";
            cursorVisible = true;
        }
        mouseTimer = window.setTimeout(disappearCursor, 1000);
    };
})();

// Disappearing Buttons

var timedelay = 1;
function delayCheck()
{
if(timedelay == 1)
{
$('#buttons').fadeOut();
timedelay = 1;
}
timedelay = timedelay+1;
}
$(document).mousemove(function() {
$('#buttons').fadeIn();
timedelay = 1;
clearInterval(_delay);
_delay = setInterval(delayCheck, 500);
});
// page loads starts delay timer
_delay = setInterval(delayCheck, 500)