const content = ["안녕하세요 ✋", "코딩이 즐거운 개발자", "김기훈 입니다."];
const text = document.querySelectorAll(".intro2");
let i = 0,
  a = 0,
  num = 0;

function typing(text) {
  num = 0;
  let interval = setInterval(() => {
    if (i < content[num].length) {
      text[num].innerHTML += content[num].charAt(i);
      i = i + 1;
    } else {
      num++;
      num < 3 ? (i = 0) : clearInterval(interval);
    }
  }, 100);
}

function deletetyping(text) {
  num = content.length - 1;
  let interval = setInterval(() => {
    if (text[num].innerText.length != 0) {
      text[num].innerText = content[num].slice(0, -a - 1);
      a++;
    } else {
      num--, num < 0 ? clearInterval(interval) : (a = 0);
    }
  }, 70);
}

let timer1 = setTimeout(() => {
  text.forEach((text) => {
    text.style = "opacity:1";
  });
  typing(text);
}, 4000);

let timer2 = setTimeout(() => {
  deletetyping(text);
}, 8500);
