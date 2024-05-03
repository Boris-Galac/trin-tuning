const carouselNextBtn = document.querySelector(".next");
const carouselPrevBtn = document.querySelector(".prev");
const slider = document.querySelector(".slider");

carouselNextBtn.addEventListener("click", (e) => {
  const slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
});

carouselPrevBtn.addEventListener("click", (e) => {
  const slides = document.querySelectorAll(".slides");
  slider.prepend(slides[slides.length - 1]);
});

// swiper

var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  autoplay: true,
  loop: true,
  speed: 1500,
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

////////// SWITCH CHANGE LIGHT/DARK THEME

// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
};

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement(".switch-clr-theme");
const currentTheme = localStorage.getItem("currentTheme");
if (currentTheme) {
  bodyElement.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", (e) => {
  bodyElement.classList.toggle("light-theme");
  document
    .querySelectorAll(".clr-theme-icon")
    .forEach((clrIcon) => clrIcon.setAttribute("data-active", "false"));

  if (bodyElement.classList.contains("light-theme")) {
    document
      .querySelector('.clr-theme-icon[data-id="light"]')
      .setAttribute("data-active", "true");
    document
      .querySelector('.clr-theme-icon[data-id="dark"]')
      .setAttribute("data-active", "false");
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    document
      .querySelector('.clr-theme-icon[data-id="light"]')
      .setAttribute("data-active", "false");
    document
      .querySelector('.clr-theme-icon[data-id="dark"]')
      .setAttribute("data-active", "true");
    localStorage.removeItem("currentTheme");
  }
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

////// TYPING EFFECT

let txt = `ADVANCED ECU FILE EDITOR & REMAP ACCELERATOR`;
let speed = 50; // Speed of typing in milliseconds
let i = 0;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".headline").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
