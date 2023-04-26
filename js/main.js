const popcorn = document.querySelector(".popcorn");
const bg2 = document.querySelector(".bg2");
const bg1 = document.querySelector(".bg1");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const posterex = document.querySelector(".posterex");
const poster2ex = document.querySelector(".poster2ex");
const plzclick = document.querySelector(".plzclick");
const plzclick2 = document.querySelector(".plzclick2");

p2.addEventListener("mouseover", () => {
  popcorn.style = "transform: scale(0.5); opacity:0";
  bg1.style = "width:100%; z-index:3";
  poster2ex.style = "opacity: 1;transition: 0.5s;transition-delay: 0.6s; transform:scale(1);";
  plzclick2.style =
    "opacity: 1;animation: blink 1s infinite alternate;transition: 0.5s;transition-delay: 0.5s;";
});

p2.addEventListener("mouseleave", () => {
  popcorn.style = "transform: translateX(-50%); opacity:1";
  bg1.style = "width:50% ; z-index:2";
  poster2ex.style = "opacity: 0; transform:scale(0);";
  plzclick2.style = "opacity:0;";
});

p1.addEventListener("mouseover", () => {
  popcorn.style = "transform: scale(0.5); opacity:0";
  bg2.style = "width:100%; z-index:3";
  posterex.style = "opacity: 1;transition: 0.5s;transition-delay: 0.6s; transform:scale(1);";
  plzclick.style =
    "opacity: 1;animation: blink 1s infinite alternate;transition: 0.5s;transition-delay: 0.5s;";
});

p1.addEventListener("mouseleave", () => {
  popcorn.style = "transform: translateX(-50%); opacity:1";
  bg2.style = "width:50%; z-index:2";
  posterex.style = "opacity: 0; transform:scale(0);";
  plzclick.style = "opacity:0;";
});
