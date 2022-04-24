// SELECTORS
const navbarMenus = document.querySelectorAll(".open-nav");
const navbarMenuLinks = document.querySelectorAll(".nav-menu-open-link");

// FUNCTIONS

// EVENTS
navbarMenuLinks[0].addEventListener("mousedown", () =>
  navbarMenus[0].classList.toggle("open")
);

navbarMenuLinks[1].addEventListener("mousedown", () =>
  navbarMenus[1].classList.toggle("open")
);

document.addEventListener(
  "mousedown",
  (event) => {
    if (!event.target.closest(".nav-menu-open-link")) {
      navbarMenus[0].classList.remove("open");
      navbarMenus[1].classList.remove("open");
    }
  },
  false
);
