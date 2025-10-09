console.log("Welcome to My Portfolio")

/* Menu Toggle */
function menuToggle() {
  const menu = document.getElementById("mobileMenu")
  const icon = document.getElementById("menuIcon")
  const iconElement = icon.querySelector("i")

  // Toggle active class on menu
  menu.classList.toggle("active")

  // Toggle active class on icon for rotation
  icon.classList.toggle("active")

  // Toggle between hamburger and X icon
  if (iconElement.classList.contains("fa-bars")) {
    iconElement.classList.remove("fa-bars")
    iconElement.classList.add("fa-xmark")
  } else {
    iconElement.classList.remove("fa-xmark")
    iconElement.classList.add("fa-bars")
  }
}
