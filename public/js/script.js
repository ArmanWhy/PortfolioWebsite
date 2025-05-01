
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let hamburgerImg = document.querySelector(".hamburger-img");
  let navClosure = document.querySelector(".close-nav");
  let navBar = document.querySelector(".nav-list");

  hamburgerImg.addEventListener("click", () => {
    navBar.style.transform = "translateX(0px)";
  });
  navClosure.addEventListener("click", () => {
    navBar.style.transform = "translateX(300px)";
  });
}
//Redirect to contact page
// let contactBtn = document.getElementById('contact-btn1');
// contactBtn.addEventListener('click', ()=>{
//   console.log('hi')
// })
// contactBtn.addEventListener("click", function () {
//   window.location.href = "/contact"; 
// });

// document.addEventListener