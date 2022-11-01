/** Below is JS for navbar toggle */
const mobNav = document.querySelector(".mobile-navbar-btn");
const mobNavHeader = document.querySelector(".header");

const navbarToggle = () => {
  mobNavHeader.classList.toggle("active");
};

mobNav.addEventListener("click", () => navbarToggle());
/** Above is the code for navbar toggle */

/** Below is the code for navbar on scroll opacity */
window.onscroll = function () {
  scrollNavbarSolid();
};

function scrollNavbarSolid() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("header").style.background = "#1e1e1e";
  } else {
    document.querySelector("header").style.background = "#1e1e1ecc";
  }
}
/** Above is the code for navbar on scroll opacity */



