// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
// scroll reveal animation
document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal('#hero, #services, #portfolios, #skills, #contact', {
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    interval: 100,
    delay: 200,
    reset: true
  });
});

// Loader skaleton 
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 800); // delay 800ms sebelum menghilangkan loader
});


// typing text animation
const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Night Coders🌙";
  }, 0);
  setTimeout(() => {
    text.textContent = "IT Student💻";
  }, 4000);
  setTimeout(() => {
    text.textContent = "IT Enthusiast💡";
  }, 8000);
  }
  textLoad();
setInterval(textLoad, 12000);
