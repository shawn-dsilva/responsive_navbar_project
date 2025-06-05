document.addEventListener("scroll", () => {
  const topnavEl = document.getElementById("topnav");
  if (window.pageYOffset > 1500) {
    topnavEl.style.display = "none";
  } else {
    topnavEl.style.display = "flex";
  }
});
