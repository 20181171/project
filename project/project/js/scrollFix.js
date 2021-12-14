function checkMenu() {
  if (window.pageYOffset > 44) {
    document.body.classList.add("local-nav-fixed");
  } else {
    document.body.classList.remove("local-nav-fixed");
  }
}

window.addEventListener("scroll", checkMenu);
