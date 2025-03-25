document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }
            
            alert("Thank you for reaching out! I will get back to you soon.");
            contactForm.reset();
        });
    }
});
