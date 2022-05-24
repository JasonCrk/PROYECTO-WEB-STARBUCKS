const NavbarMenu = document.getElementById("menu");
const navbar = document.querySelector(".navbar__links");

NavbarMenu.addEventListener("click", () => {
  if (navbar.style.display === "none") {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
});
