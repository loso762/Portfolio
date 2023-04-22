$('body').prepend('<header>');
$('header').load("./header.html header .home,nav",head);


function head(){
  const headerMenu = document.querySelectorAll("header > nav > a");

  headerMenu.forEach((menu) => {
    menu.addEventListener("click", (e) => { 
      menu.classList.add("active")
    })
  })
}