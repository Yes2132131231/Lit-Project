// All of this code was mostly made by Aditya Pulla 👍 

const pages = document.querySelectorAll('.page');

function showPage(pageId) {
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].id == pageId) {
            pages[i].style.display = 'block';
            pages[i].style.opacity = "0";
            pages[i].style.position = "relative";
            pages[i].style.bottom = "-200px";
            pages[i].style.transform = "translateY(50px)"; // Starts lower for scroll effect
        } else { 
            // ✅ Reset quiz only when leaving the Quiz page
            if (pages[i].id == "Quiz") {
                resetQuiz();
            }
            pages[i].style.display = 'none';
        }
    }   
    setTimeout(() => animatethis(pageId), 10); // Increased delay to allow styles to apply properly
}
showPage("titleScreen");

function animatethis(pageId) {
    let activePage = document.getElementById(pageId);

    if (activePage) {
        activePage.style.transition = "opacity 0.5s ease-in-out, bottom 0.5s ease-in-out, transform 0.5s ease-in-out";
        activePage.style.opacity = "1"; 
        activePage.style.bottom = "0px";
        activePage.style.transform = "translateY(0)"; // Smoothly slides into place
    }
}

// Scroll animation for elements appearing when scrolling
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-reveal");

    function revealOnScroll() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
                el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once in case elements are already in view
});
