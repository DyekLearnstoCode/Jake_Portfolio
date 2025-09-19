// Initialize AOS
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1000, // animation speed
        once: true      // only animate once per element
    });
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/*back to top button */
const backToTop = document.getElementById("backToTop");

// Show button after scrolling 300px
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
        backToTop.style.opacity = "1";
    } else {
        backToTop.style.display = "none";
        backToTop.style.opacity = "0";
    }
});

// Scroll smoothly to top when clicked
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


//body transitions
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
        const target = link.getAttribute("href");

        if (target && !target.startsWith("#") && !target.startsWith("javascript")) {
            e.preventDefault();
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = target;
            }, 100); // match transition duration
        }
    });
});

document.querySelectorAll(".confirm-pdf").forEach(function (button) {
    button.addEventListener("click", function () {
        let pdf = this.getAttribute("data-pdf");
        let message = this.getAttribute("data-message") || "You are about to open a PDF. Continue?";

        if (confirm(message)) {
            window.open(pdf, "_blank"); // opens in new tab
        }
    });
});

function confirmRedirect(link) {
    let proceed = confirm("You will be redirected to the website. Continue?");
    if (proceed) {
        window.open(link, "_blank"); // only opens in new tab if OK
    }
}


