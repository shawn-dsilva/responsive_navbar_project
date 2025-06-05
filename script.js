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

function toggleMobileNav() {
  const links = document.getElementById("links");
  const mobileNavElem = document.getElementById("mobilenav");

  if (links.style.display === "block") {
    links.style.display = "none";
    mobileNavElem.style.height = "auto";
  } else {
    links.style.display = "block";
    mobileNavElem.style.height = "100%";
  }
}
