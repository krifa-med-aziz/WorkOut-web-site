"use strict";
/////////////// Modal
const joinBtn = document.querySelector(".join__btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".joinNowModal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const openModal = (element) => {
  element.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = (element) => {
  element.classList.add("hidden");
  overlay.classList.add("hidden");
};
joinBtn.addEventListener("click", function (e) {
  e.preventDefault();
  openModal(modal);
});
overlay.addEventListener("click", function (e) {
  e.preventDefault();
  closeModal(modal);
});
btnCloseModal.addEventListener("click", function (e) {
  e.preventDefault();
  closeModal(modal);
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden"))
    closeModal(modal);
});
///////////////////// Section revealing
const allSections = document.querySelectorAll(".section");
const sectionOnScroll = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(sectionOnScroll, {
  root: null,
  threshold: 0.2,
});
allSections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});
/////////////////// Section scrolling
const navLinks = document.querySelector(".navbar-nav");
const link = document.querySelector(".nav-link");
navLinks.addEventListener("click", function (e) {
  const linked = e.target.closest(".nav-link");
  const id = linked.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});
