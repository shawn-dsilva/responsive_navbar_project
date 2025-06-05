document.addEventListener("scroll", () => {
  const topnavElem = document.getElementById("topnav");
  const bottomnavLogoElem = document.getElementById("bottomnav-logo");

  if (window.pageYOffset > 200) {
    topnavElem.style.display = "none";
    bottomnavLogoElem.style.display = "block";
  } else {
    topnavElem.style.display = "flex";
    bottomnavLogoElem.style.display = "none";
  }
});
