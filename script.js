document.addEventListener("DOMContentLoaded", function() {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");

    setInterval(() => {
        if (image1.style.display === "none") {
            image1.style.display = "block";
            image2.style.display = "none";
        } else {
            image1.style.display = "none";
            image2.style.display = "block";
        }
    }, 4000); // Muda a cada 2 segundos
});