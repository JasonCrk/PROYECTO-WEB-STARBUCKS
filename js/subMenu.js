const menuSubNav = document.getElementById("subMenu");
const subNav = document.getElementById("subNav");

menuSubNav.addEventListener("click", () => {
  if (subNav.style.display === "none") {
    subNav.style.display = "flex";
    menuSubNav.innerHTML = `<i class="fa-solid fa-sort-up"></i>`;
    menuSubNav.style.backgroundColor = "#006241";
  } else {
    subNav.style.display = "none";
    menuSubNav.innerHTML = `<i class="fa-solid fa-caret-down"></i>`;
    menuSubNav.style.backgroundColor = "#009c63";
  }
});
