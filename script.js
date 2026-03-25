// =============================
// NAVBAR SHADOW ON SCROLL
// =============================
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
  } else {
    nav.style.boxShadow = "none";
  }
});


// =============================
// DROPDOWN CLICK MENU (DESKTOP + MOBILE FIX)
// =============================
const dropdown = document.querySelector(".dropdown");
const dropdownBtn = document.querySelector(".dropdown > a");
const dropdownMenu = document.querySelector(".dropdown-menu");

// click to open
dropdownBtn.addEventListener("click", function (e) {
  e.preventDefault(); // link jump stop
  dropdownMenu.classList.toggle("show");
});

// click outside = close menu
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});
