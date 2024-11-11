// Navigation Bar
const nav = document.querySelector("#nav");
const navBtnGroup = document.querySelector(".nav-btn-group");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const navLine4 = document.querySelector(".nav-line-4");

navBtnGroup.addEventListener("click", function () {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    navBtnGroup.classList.remove("active");
    setTimeout(() => {
      navMenu.style.transform = "scaleY(0)";
    }, 100);
    setTimeout(() => {
      navLine4.style.transform = "rotate(0)";
    }, 100);
  } else {
    navMenu.classList.add("active");
    navMenu.style.transform = "scaleY(1)";
    navBtnGroup.classList.add("active");
    setTimeout(() => {
      navLine4.style.transform = "rotate(45deg)";
      navLine4.style.transition = "transform 400ms ease";
    }, 200);
  }
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.style.transform = `translateY(-${window.scrollY}px)`;
    if (window.scrollY > 300) {
      header.classList.add("sticky");
      header.style.transform = "translateY(0)";
    } else {
      header.classList.remove("sticky");
      header.style.transform = `translateY(-${window.scrollY}px)`;
    }
  });
});
