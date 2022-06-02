const NavbarMenu = document.getElementById("menu");
const navbar = document.querySelector(".navbar__links");

NavbarMenu.addEventListener("click", () => {
  // if (navbar.style.display === "none") {
  //   navbar.style.display = "flex";
  // } else if (navbar.style.display === "flex") {
  //   navbar.style.display = "none";
  // } else {
  //   navbar.style.display = "flex";
  // }
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
});
