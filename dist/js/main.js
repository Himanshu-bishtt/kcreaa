// "use strict";

// pre-loader
const loader = document.querySelector(".loader");

const showContent = function () {
  let time = 3;

  const timer = setInterval(() => {
    if (time === 0) {
      clearInterval(timer);
      document.querySelector("main").classList.remove("hidden");
      loader.classList.add("hidden");
      document.querySelector("footer").classList.remove("hidden");
    }

    time--;
  }, 1000);
};

showContent();

// testimonials slider
let testimonialItems;

if (document.documentElement.clientWidth <= 450) {
  testimonialItems = 1;
} else {
  testimonialItems = 2;
}

$(document).ready(function () {
  $("#testimonialSlider").lightSlider({
    autoWidth: false,
    item: testimonialItems,
    loop: false,
    controls: false,
    pager: true,
    onSliderLoad: function () {
      $("#testimonialSlider").removeClass("cS-hidden");
    },
  });
});

// scroll to top button
const scrollToTop = document.querySelector(".scrollToTop");
scrollToTop.addEventListener("click", function () {
  window.scroll(0, 0);
});

const topbarClose = document.querySelector(".topbar__close");

topbarClose.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".topbar").remove();
});

// Sticky navgiation
const header = document.querySelector(".header");
const sectionFeatureCoords = document
  .querySelector(".features")
  .getBoundingClientRect();

console.log(sectionFeatureCoords);
window.addEventListener("scroll", function () {
  if (this.window.scrollY > sectionFeatureCoords.top - 200) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// navigation scroll event delegation
document.querySelector(".navigation").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("navigation__link")) {
    const linkHref = e.target.getAttribute("href");
    const sectionCoords = document
      .querySelector(linkHref)
      .getBoundingClientRect();

    // document.querySelector(linkHref).scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      window.scrollTo({
        left: sectionCoords.left + window.scrollX,
        top: sectionCoords.top - 100 + window.scrollY,
        behavior: "smooth",
      });
    }, 300);
  }
});

// topbar scroll contact
const topbarLink = document.querySelector(".topbar__link");

topbarLink.addEventListener("click", function (e) {
  e.preventDefault();

  const contactCoords = document
    .querySelector(e.target.getAttribute("href"))
    .getBoundingClientRect();

  setTimeout(() => {
    window.scrollTo({
      left: contactCoords.left + window.scrollX,
      top: contactCoords.top - 100 + window.scrollY,
      behavior: "smooth",
    });
  }, 300);
});

const menuFade = (opacity) => {
  return function (e) {
    const link = e.target;
    const siblings = e.target
      .closest(".navigation")
      .querySelectorAll(".navigation__link");
    const logo = document.querySelector(".logo");
    const socialIcons = document.querySelector(".social-media");

    siblings.forEach((el) => {
      if (link !== el) {
        el.style.opacity = opacity;
        logo.style.opacity = opacity;
        socialIcons.style.opacity = opacity;
      }
    });
  };
};

// menu fade animation
document
  .querySelector(".navigation")
  .addEventListener("mouseover", menuFade(0.6));

document.querySelector(".navigation").addEventListener("mouseout", menuFade(1));
