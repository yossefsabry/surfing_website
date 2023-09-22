// toggle menu
let menu = document.getElementById("menu");
let btn = document.getElementById("toggle-menu");
const body = document.querySelector("body");

btn.onclick = () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};

// show cursor and go to top

btnTop = document.querySelector(".top");
window.addEventListener("scroll", checkTop);
function checkTop() {
  if (window.scrollY >= 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}
btnTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// show the box for sections
const boxs = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBox);
function checkBox() {
  const triggeBtton = (window.innerHeight / 5) * 4;
  boxs.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggeBtton) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// change hero image every three second
var images = ["hero1.jpg", "hero2.jpg", "hero3.jpg"]; // Array of image URLs
var currentIndex = 0;

function changeImage() {
  var imageElement = document.getElementById("image");
  imageElement.src = `assets_website` + "\\" + images[currentIndex];
  currentIndex++;
  if (currentIndex >= images.length) {
    // Check against the length of the images array
    currentIndex = 0;
  }
}
setInterval(changeImage, 3000); // Change image every three seconds

