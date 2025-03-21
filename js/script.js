document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const mobileNav = document.querySelector(".mobile-nav");

    menuIcon.addEventListener("click", function () {
        mobileNav.classList.add("active");
        menuIcon.style.display = "none"; 
        
        closeIcon.style.display = "block"; 
    });

    closeIcon.addEventListener("click", function () {
        mobileNav.classList.remove("active");
        closeIcon.style.display = "none"; 
        menuIcon.style.display = "block"; 
    });
});
