var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  }
});


const guide = document.querySelector('.guide');
const thumb = document.querySelectorAll('.thumb');


thumb.forEach((t)=>{
  t.addEventListener("mouseover",()=>{
    guide.classList.add("hover");
  })
})
