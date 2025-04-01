document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    // Open Lightbox when clicking an image
    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", function() {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    // Close Lightbox when clicking outside the image
    lightbox.addEventListener("click", function(event) {
        if (event.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});
