const arrow = document.querySelector(".arrow");
const GoTop = document.querySelector(".GoTop");
const timlineList = document.querySelectorAll(".timlineCon>ul>li");

window.addEventListener("scroll", function () {
  scrollY < 400 ? (GoTop.style = "opacity:0") : (GoTop.style = "opacity:1");
  scrollY > 2100 ? (arrow.style = "opacity:0") : (arrow.style = "opacity:1");
  timlineList.forEach((list, key) => {
    if (scrollY > 2300 + key * 80) {
      list.style = "opacity:1";
    } else {
      list.style = "opacity:0";
    }
  });
});

let scrollPosition = 0;

window.onscroll = () => {
  scrollPosition = window.scrollY;
};

GoTop.addEventListener("click", function () {
  scrollPosition = 0;
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

arrow.onclick = () => {
  scrollPosition += window.innerHeight;
  if (scrollPosition <= 4 * window.innerHeight) {
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }
};
