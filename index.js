const menu_toggle = document.getElementById("toggle-menu-icon");

menu_toggle.addEventListener("click", () => {
  const nav = document.getElementById("nav");
  if (menu_toggle.classList.contains("open")) {
    menu_toggle.setAttribute("src", "images/icon-hamburger.svg");
    nav.style.display = "none";
    menu_toggle.classList.remove("open");
    menu_toggle.classList.add("close");
  } else {
    menu_toggle.setAttribute("src", "images/icon-close.svg");
    nav.style.display = "block";
    menu_toggle.classList.remove("close");
    menu_toggle.classList.add("open");
  }
});

// window.onload(function(){
//   const hero_img = document.getElementById("hero-img");
//   if(window.innerWidth <= 375){
//     hero_img.setAttribute('src', "images/image-intro-mobile.jpg");
//   }else{
//     hero_img.setAttribute('src', "images/image-intro-desktop.jpg");
//   }
// });

window.addEventListener('resize', function(){
  const hero_img = document.getElementById("hero-img");
  if(window.innerWidth <= 375){
    hero_img.setAttribute('src', "images/image-intro-mobile.jpg");
  }else{
    hero_img.setAttribute('src', "images/image-intro-desktop.jpg");
  }
});

