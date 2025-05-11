
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

// Function to check if all iframes are loaded
function checkIframesLoaded() {
    const iframes = document.querySelectorAll('iframe');
    const iframePromises = Array.from(iframes).map(iframe => {
        return new Promise(resolve => {
            iframe.addEventListener('load', resolve);
            iframe.addEventListener('error', resolve); // Also resolve on error
        });
    });
    return Promise.all(iframePromises);
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
    checkIframesLoaded(),
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

