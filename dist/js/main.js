// "use strict";

$(document).ready(function () {
  $("#testimonialSlider").lightSlider({
    autoWidth: false,
    item: 3,
    loop: false,
    // controls: true,
    pager: true,
    onSliderLoad: function () {
      $("#testimonialSlider").removeClass("cS-hidden");
    },
  });
});

// Scroll to TOP
// var btn = $(".scrollToTop");
// $(window).scroll(function () {
//   if ($(window).scrollTop() > 500) {
//     btn.addClass("show");
//   } else {
//     btn.removeClass("show");
//   }
// });

// btn.on("click", function (e) {
//   e.preventDefault();
//   $("html, body").animate({ scrollTop: 0 }, "500");
// });

// console.log(window.scrollY);
// if (window.scrollY >= 370) {
//   console.log(window.scrollY);
//   console.log(scrollToTop);
//   scrollToTop.classList.add("show");
// } else if (window.scrollY < 370) {
//   scrollToTop.classList.remove("show");
// }

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 370) {
//     scrollToTop.classList.add("show");
//   } else {
//     scrollToTop.classList.remove("show");
//   }
// });

const scrollToTop = document.querySelector(".scrollToTop");
scrollToTop.addEventListener("click", function () {
  window.scroll(0, 0);
});

const topbarClose = document.querySelector(".topbar__close");

topbarClose.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".topbar").classList.add("remove-topbar");
});

// Navigation scroll

const navigationLinks = document.getElementsByClassName("navigation__link");

for (let i = 1; i < navigationLinks.length; ++i) {
  navigationLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    const navigationContent = navigationLinks[i].textContent.toLowerCase();
    switch (navigationContent) {
      case "work":
        window.scroll(0, 680);
        break;
      case "gallery":
        window.scroll(0, 1380);
        break;
      case "contact":
        window.scroll(0, 3100);
        break;
    }
  });
}

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
