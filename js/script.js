function scrollFunction(nav) {
  const yOffset = -$("nav").height() + 1;
  const element = document.getElementById(nav);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const navScroll = document.querySelector("#nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navScroll.classList.add("nav-scrolled");
  } else if (window.scrollY <= 200) {
    navScroll.classList.remove("nav-scrolled");
  }
});
