var imgNumber = 0;
var path = ["resized_images/001.jpg",
  "resized_images/002.jpg",
  "resized_images/003.jpg",
  "resized_images/004.jpg",
  "resized_images/005.jpg",
  "resized_images/006.jpg",
  "resized_images/007.jpg",
  "resized_images/008.jpg",
  "resized_images/009.jpg",
  "resized_images/010.jpg",
  "resized_images/011.jpg",
  "resized_images/012.jpg",
  "resized_images/013.jpg",
  "resized_images/014.jpg",
  "resized_images/015.jpg",
  "resized_images/016.jpg",
  "resized_images/017.jpg",
  "resized_images/018.jpg",
  "resized_images/019.jpg",
  "resized_images/020.jpg",
  "resized_images/021.jpg",
  "resized_images/022.jpg",
  "resized_images/023.jpg",
  "resized_images/024.jpg",
  "resized_images/025.jpg",
  "resized_images/026.jpg",
  "resized_images/027.jpg",
  "resized_images/028.jpg",
  "resized_images/029.jpg",
  "resized_images/030.jpg",
  "resized_images/031.jpg",
  "resized_images/032.jpg",
  "resized_images/033.jpg",
  "resized_images/034.jpg",
  "resized_images/035.jpg",
  "resized_images/036.jpg",
  "resized_images/037.jpg",
  "resized_images/038.jpg",
  "resized_images/039.jpg",
  "resized_images/040.jpg",
  "resized_images/041.jpg",
  "resized_images/042.jpg",
  "resized_images/043.jpg",
  "resized_images/044.jpg",
  "resized_images/045.jpg",
  "resized_images/046.jpg",
  "resized_images/047.jpg",
  "resized_images/048.jpg",
  "resized_images/049.jpg",
  "resized_images/050.jpg",
  "resized_images/051.jpg",
  "resized_images/052.jpeg",
  "resized_images/053.jpg",
  "resized_images/054.jpg",
  "resized_images/055.jpg",
  "resized_images/056.jpg",
  "resized_images/057.jpg",
  "resized_images/058.jpg",
  "resized_images/059.jpg",
  "resized_images/060.jpg",
  "resized_images/061.jpg",
  "resized_images/062.jpg",
  "resized_images/063.jpg",
  "resized_images/064.jpg",
  "resized_images/065.jpg",
  "resized_images/066.jpg",
  "resized_images/067.jpg",
  "resized_images/068.jpg",
  "resized_images/069.jpg",
  "resized_images/070.jpg",
  "resized_images/071.jpg",
  "resized_images/072.jpg",
  "resized_images/073.jpg",
  "resized_images/074.jpg",
  "resized_images/075.jpg",
  "resized_images/076.jpg",
  "resized_images/077.jpg",
  "resized_images/078.jpg",
  "resized_images/079.jpg",
  "resized_images/080.jpg",
  "resized_images/081.jpg",
  "resized_images/082.jpg",
  "resized_images/083.jpg",
  "resized_images/084.jpg",
  "resized_images/085.jpg",
  "resized_images/086.jpg",
  "resized_images/087.jpg",
  "resized_images/088.jpg",
  "hresized_images/090.jpg",
  "resized_images/091.jpg",
  "resized_images/092.jpg",
  "resized_images/093.jpg",
  "resized_images/094.jpg",
  "resized_images/095.jpg",
  "resized_images/096.jpg",
  "resized_images/097.jpg",
  "resized_images/098.jpg",
  "resized_images/099.jpg",
  "resized_images/100.jpg",
  "resized_images/101.jpg",
  "resized_images/102.jpg",
  "resized_images/103.jpg",
  "resized_images/104.jpg",
  "resized_images/105.jpg",
  "resized_images/106.JPG",
  "resized_images/107.jpg",
  "resized_images/IMG_4295.png",
  "resized_images/109.jpg",
];
var numberOfImg = path.length;
var timer = null;
const container = document.querySelector('#slideshow');



/* function swapImage() {
    const newSlide = document.createElement('div');
    //newSlide.src = path[imgNumber];
    newSlide.innerHTML = `<img src="${path[imgNumber]}">`;
    newSlide.className = "fadeinimg";
    container.appendChild(newSlide);
    if (container.children.length > 2) {
        container.removeChild(container.children[0]);
    }
} */

function swapImage() {
  const theImage = new Image();
  theImage.scr = path[imgNumber];
  const imgWidth = theImage.width;
  const imgHeight = theImage.height;
  const orientation = imgWidth > imgHeight ? "wide" : "tall";
  const newSlide = document.createElement('div');
  newSlide.src = path[imgNumber];
  newSlide.innerHTML = `<img src="${path[imgNumber]}" class="${orientation}">`;
  newSlide.className = "fadeinimg";
  container.appendChild(newSlide);
  if (container.children.length > 2) {
      container.removeChild(container.children[0]);
  }
}

function incrementNumber(){
  if(imgNumber == path.length) {
      imgNumber = 0;
    }
    else {
      imgNumber++;
    }
}

function runSlideshow(){
  incrementNumber();
  swapImage();
}

/* function slide() {
  imgNumber = (imgNumber + 1) % path.length;
  console.log(imgNumber);
  document.getElementById("imgSlideshow").src = path[imgNumber];
  changeCounter(imgNumber + 1, numberOfImg);
} */

function setTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(runSlideshow, 7000);
  }
  return false;
}

function previousImage() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    imgNumber--;
  }
  imgNumber--;
  if (imgNumber < 0) {
    imgNumber = numberOfImg - 1;
  }
  console.log(`prev function ${imgNumber}`);
  swapImage();
  /* document.getElementById("imgSlideshow").src = path[imgNumber];
  changeCounter(imgNumber + 1, numberOfImg); */
  return false;
}

function nextImage() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  ++imgNumber;
  if (imgNumber > (numberOfImg - 1)) {
    imgNumber = 0;
  }
  swapImage();
  /* document.getElementById("imgSlideshow").src = path[imgNumber];
  changeCounter(imgNumber + 1, numberOfImg); */
  return false;
}

/* function changeCounter(cur, total) {
  document.getElementById("counter").innerHTML = cur + "/" + total;
}
document.getElementById("counter").innerHTML = 1 + "/" + path.length; */



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
$('#button').fadeOut();
timedelay = 1;
}
timedelay = timedelay+1;
}
$(document).mousemove(function() {
$('#button').fadeIn();
timedelay = 1;
clearInterval(_delay);
_delay = setInterval(delayCheck, 1000);
});
// page loads starts delay timer
_delay = setInterval(delayCheck, 1000);
