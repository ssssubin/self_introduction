window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  let scrollY = this.scrollY;
  if (scrollY >= 77) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
