document.querySelector("form").addEventListener("submit", function(e) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        e.preventDefault();
        alert("Passwords do not match!");
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const contactSection = document.getElementById("contact");
    const aboutSection = document.getElementById("about");
    document.getElementById("showContactBtn").addEventListener("click", function() {
        contactSection.style.display = "block";
        aboutSection.style.display = "none";
    });
    document.getElementById("showAboutBtn").addEventListener("click", function() {
        aboutSection.style.display = "block";
        contactSection.style.display = "none";
    });
});
document.querySelectorAll('.product-item img').forEach(img => {
    img.addEventListener('mouseover', function() {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseout', function() {
        img.style.transform = 'scale(1)';
    });
});
function AddedToCart(){
    alert("Added To Cart !!");
 }
 function showRegistrationAlert(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match!");
    } else {
        event.preventDefault();
        alert("Thank you for registering!");
        window.location.href = "index.html";
    }
}
