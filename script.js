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
  const subscribe = document.getElementById("mobile-subscribe");
  const user = document.getElementById("mobile-user");
  if (links.style.display === "block") {
    links.style.display = "none";
    mobileNavElem.style.height = "9%";
    subscribe.style.display = "unset";
    user.style.display = "unset";
  } else {
    subscribe.style.display = "none";
    user.style.display = "none";
    links.style.display = "block";
    mobileNavElem.style.height = "100%";
  }
}
