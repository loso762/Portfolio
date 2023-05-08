$("body").prepend("<header>");
$("header").load("./header.html header .home,nav", head);

function head() {
  const headerMenu = document.querySelectorAll("header > nav > a");

  headerMenu.forEach((menu) => {
    menu.addEventListener("click", (e) => {
      menu.classList.add("active");
    });
  });

  if (window.location.pathname.includes("index.html")) {
    const meLink = document.querySelector(".me");
    meLink.classList.add("active");
  } else if (window.location.pathname.includes("Projects.html")) {
    const meLink = document.querySelector(".pro");
    meLink.classList.add("active");
  }
}
