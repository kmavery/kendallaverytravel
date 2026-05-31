const carousel = document.querySelector("#tripCarousel");
const heroSlides = [...document.querySelectorAll(".hero-slide")];

if (heroSlides.length > 1) {
  let activeHeroSlide = 0;

  setInterval(() => {
    heroSlides[activeHeroSlide].classList.remove("is-active");
    activeHeroSlide = (activeHeroSlide + 1) % heroSlides.length;
    heroSlides[activeHeroSlide].classList.add("is-active");
  }, 10000);
}

document.querySelectorAll("[data-carousel]").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.carousel === "next" ? 1 : -1;
    carousel.scrollBy({
      left: direction * Math.min(carousel.clientWidth * 0.86, 430),
      behavior: "smooth",
    });
  });
});
