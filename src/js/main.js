// swiper

var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  autoplay: {
    delay: 1000,
  },
  loop: true,
  speed: 1000,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".carousel", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// baguettebox

baguetteBox.run(".gallery");

/////////// HIDE HEADER ON SCROLL

let lastScrollTop = 0;
let navbar = document.querySelector(".header");
let navbarHeight = document.querySelector(".header").scrollHeight;
window.addEventListener("scroll", (e) => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = `-${navbarHeight}px`;
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;

  if (window.scrollY > 150) {
    document.querySelector("header").setAttribute("data-active", "true");
  } else {
    document.querySelector("header").setAttribute("data-active", "false");
  }

  /// progress indicator line

  let winScroll = window.scrollY; /// 0 - 1519
  let height = document.body.scrollHeight - innerHeight; /// 2806 - 1287

  let scrolled = Math.ceil((winScroll / height) * 100);
  let indicatorLine = document.querySelector(".indicator-scroll-line");
  indicatorLine.style = `
      width: ${scrolled}%;
    `;
});

//// BACK TO TOP

const backToTopbtn = document.querySelector(".back-to-top-btn");

backToTopbtn.addEventListener("click", (e) => {
  window.scroll({
    top: 0,
  });
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 150) {
    backToTopbtn.setAttribute("data-visible", "true");
  } else backToTopbtn.setAttribute("data-visible", "false");
});

///////// INTERSECTION OBSERVER

// from left stagger

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      //  else {
      //   entry.target.classList.remove("active");
      // }
    });
  },
  { threshold: 0.2 }
);
// left
const left = document.querySelectorAll(".hidden-left");
left.forEach((el) => observer.observe(el));
// right
const right = document.querySelectorAll(".hidden-right");
right.forEach((el) => observer.observe(el));
// bottom
const bottom = document.querySelectorAll(".hidden-bottom");
bottom.forEach((el) => observer.observe(el));
