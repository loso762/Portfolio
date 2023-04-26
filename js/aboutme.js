const arrow = document.querySelector(".arrow");
const GoTop = document.querySelector(".GoTop");
const timlineList = document.querySelectorAll(".timlineCon>ul>li");

window.addEventListener("scroll", function () {
  scrollY < 400 ? (GoTop.style = "opacity:0") : (GoTop.style = "opacity:1");
  scrollY > 2100 ? (arrow.style = "opacity:0") : (arrow.style = "opacity:1");
  timlineList.forEach((list, key) => {
    if (scrollY > 2400 + key * 80) {
      list.style = "opacity:1";
    } else {
      list.style = "opacity:0";
    }
  });
});

GoTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
