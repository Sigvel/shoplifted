const exitIcon = `<i class="fa-solid fa-xmark"></i>`;
const hamburgerIcon = `<i class="fa-solid fa-bars"></i>`;

export const hamburgerMenu = document.getElementById("mobile-menu");
export const menuItems = document.getElementById("nav-items");

export const menu = () => {
  if (hamburgerMenu.innerHTML === exitIcon) {
    hamburgerMenu.innerHTML = hamburgerIcon;
  } else {
    hamburgerMenu.innerHTML = exitIcon;
  }
  menuItems.classList.toggle("hidden");
};
