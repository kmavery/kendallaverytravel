const travelAdvisorEmail = "kendall.avery@fora.travel";

const form = document.querySelector("#leadForm");
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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const get = (field) => data.get(field)?.toString().trim() || "Not provided";

  const subject = `Travel planning inquiry from ${get("name")}`;
  const body = [
    "New travel inquiry",
    "",
    `Name: ${get("name")}`,
    `Email: ${get("email")}`,
    "",
    "Interested in:",
    get("interest"),
  ].join("\n");

  const mailto = new URL(`mailto:${travelAdvisorEmail}`);
  mailto.searchParams.set("subject", subject);
  mailto.searchParams.set("body", body);

  window.location.href = mailto.toString();
});
