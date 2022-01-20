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

// topbar close
const topbarClose = document.querySelector(".topbar__close");
topbarClose.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".topbar").remove();
});

// Sticky navgiation
const hero = document.querySelector(".hero");
const header = document.querySelector(".header");

const callback = function (entries, observer) {
  const [entry] = entries;

  entry.isIntersecting
    ? header.classList.remove("sticky")
    : header.classList.add("sticky");
};

const options = {
  root: null,
  rootMargin: `-${getComputedStyle(header).height}`,
  threshold: 0,
};

const observer = new IntersectionObserver(callback, options);
observer.observe(hero);

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

const allSections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("section--hidden");
        sectionObserver.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.15,
  }
);

allSections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});

// contact image lazy load
const contactImage = document.querySelector("img[data-src]");

console.log(contactImage);

const contactObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.src = entry.target.dataset.src;

      entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
      });

      observer.unobserve(entry.target);
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

contactObserver.observe(contactImage);
