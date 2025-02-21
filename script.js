document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    function moveSlide(n) {
        slideIndex = (slideIndex + n + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    showSlide(slideIndex);

    prevButton.addEventListener("click", () => moveSlide(-1));
    nextButton.addEventListener("click", () => moveSlide(1));
});

function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
