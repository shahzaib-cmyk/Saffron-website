//             VARIABLES  
const nav=document.querySelector("nav");
const header= document.querySelector("header")
const logo=document.querySelector(".logo")
const navList=document.querySelector(".nav-list");
const navLinks=document.querySelectorAll(".nav-links");
const burgerMenu=document.querySelector(".burger-menu");
const burgerLines=document.querySelectorAll(".burger-line");




//          EVENT LISTENERS
logo.addEventListener("click",logoRoll)
burgerMenu.addEventListener("click",logoRoll);




//             FUNCTIONS
function logoRoll() {
  nav.classList.toggle("nav-expand")
 navList.classList.toggle("nav-list-expand")
  navLinks.forEach((link,index) => {
    link.classList.toggle("nav-link-expand");
    link.style.animationDelay=`${index/6+0.8}s`;
    /*link.style.animation=`nav-link-expander 2s ease-in ${index/6+0.6}s`*/
    console.log(`${index/6}s`);
  })
  burgerLines[1].classList.toggle("burger-line-even-exp")
  burgerLines[2].classList.toggle("burger-line-2-exp")
    burgerLines[0].classList.toggle("burger-line-3-exp")


}