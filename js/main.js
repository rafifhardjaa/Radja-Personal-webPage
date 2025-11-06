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
