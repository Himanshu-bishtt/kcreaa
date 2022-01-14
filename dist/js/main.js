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

if (this.innerWidth <= 450) {
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

// Navigation scroll

// const navigationLinks = document.getElementsByClassName("navigation__link");

// for (let i = 1; i < navigationLinks.length; ++i) {
//   navigationLinks[i].addEventListener("click", function (e) {
//     e.preventDefault();
//     const navigationContent = navigationLinks[i].textContent.toLowerCase();
//     switch (navigationContent) {
//       case "work":
//         window.scroll(0, 680);
//         break;
//       case "gallery":
//         window.scroll(0, 1380);
//         break;
//       case "contact":
//         window.scroll(0, 3100);
//         break;
//     }
//   });
// }

// Sticky navgiation
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    header.style.boxShadow = "0rem 1rem 1rem rgba(0, 0, 0, 0.1)";
    header.style.opacity = "0.95";
  } else {
    header.style.boxShadow = "0rem 0rem 0rem rgba(0, 0, 0, 0.1)";
    header.style.opacity = "1";
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
