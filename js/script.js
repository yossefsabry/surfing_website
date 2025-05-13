
// Function to check if all images are loaded
function checkImagesLoaded() {
    const images = document.querySelectorAll('img');
    const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
            img.addEventListener('load', resolve);
            img.addEventListener('error', resolve); // Also resolve on error
        });
    });
    return Promise.all(imagePromises);
}

// Function to wait for fonts to load (if you're using custom fonts)
function checkFontsLoaded() {
    if (!document.fonts) return Promise.resolve();
    return document.fonts.ready;
}

// Wait for everything to load
Promise.all([
    new Promise(resolve => window.addEventListener('load', resolve)),
    checkImagesLoaded(),
    checkFontsLoaded()
]).then(() => {
        // Hide loading screen with fade out
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';

        // Remove loading screen after fade out
        setTimeout(() => {
            loadingScreen.style.display = 'none';

            // Show all content (alternative to setting display: block)
            document.querySelectorAll('body > *').forEach(element => {
                element.style.visibility = 'visible';
                element.style.opacity = '1';
            });

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 500);
    });

// Initial setup - hide all content while loading
document.querySelectorAll('body > *').forEach(element => {
    if (element.id !== 'loading-screen') {
        element.style.visibility = 'hidden';
    }
});


// toggle menu
let menu = document.getElementById("menu");
let btn = document.getElementById("toggle-menu");
const body = document.querySelector("body");


btn.onclick = () => {
    menu.classList.toggle("visible");
};

// btn.onclick = () => {
//     if (menu.style.visibility == "hidden") {
//         menu.style.visibility = "visible";
//         // menu.style.transform = "scale(1);";
//     } else {
//         menu.style.visibility = "hidden";
//         // menu.style.transform = "scale(0);";
//     }
// };

// show cursor and go to top
btnTop = document.querySelector(".top");
window.addEventListener("scroll", checkTop);
function checkTop() {
    if (window.scrollY >= 200) {
        btnTop.style.transform = "scale(1)";
    } else {
        btnTop.style.transform = "scale(0.0)";
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
    const triggeBtton = (window.innerHeight / 4) * 4;
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
let span_number = document.querySelector(".span_number");
let imageElement = document.getElementById("image");

function changeImage() {
    imageElement.src = `assets_website` + "\\" + images[currentIndex];
    span_number.innerHTML = currentIndex + 1;
    currentIndex++;
    if (currentIndex >= images.length) {
        // Check against the length of the images array
        currentIndex = 0;
    }
}
setInterval(changeImage, 5000); // Change image every three seconds

const next_button = document.getElementById("right_button");
const prev_button = document.getElementById("left_button");

function change_img_by_button(next) {
    if (next == true) {
        imageElement.src = `assets_website` + "\\" + images[currentIndex];
        currentIndex++;
    } else {
        imageElement.src = `assets_website` + "\\" + images[currentIndex];
        currentIndex--;
    }
    if (currentIndex >= images.length) {
        // Check against the length of the images array
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    span_number.innerHTML = currentIndex + 1;
}

prev_button.addEventListener("click", () => change_img_by_button())
next_button.addEventListener("click", () => change_img_by_button(true))


