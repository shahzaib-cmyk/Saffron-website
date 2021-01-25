//             VARIABLES  
const nav=document.querySelector("nav");
const header= document.querySelector("header")
const logo=document.querySelector(".logo")
const navList=document.querySelector(".nav-list");
const navLinks=document.querySelectorAll(".nav-links");
const burgerMenu=document.querySelector(".burger-menu");
const burgerLines=document.querySelectorAll(".burger-line");
const content=document.querySelector(".content");

const temp=document.querySelector(".temp");
/*
let tempTween=gsap.from(".temp",{
  xPercent:100,
  yPercent:-100,
  scale:0.5,
  onComplete:contentExpand
})*/
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
  })
  burgerLines[1].classList.toggle("burger-line-even-exp")
  burgerLines[2].classList.toggle("burger-line-2-exp")
    burgerLines[0].classList.toggle("burger-line-3-exp");


}
/*
function contentExpand(){
let contentTween = gsap.from(".content", {
  x: -1100,
  opacity: 0,
  scale: 0.5,
  duration: 0.7,
  onComplete: expandBtn
})}
function expandBtn(){
  let btnTween=gsap.fromTo(".btns",{
    opacity:0,
  duration:0.5,
    scale:0.2,
    ease:"elastic"
  },{
    opacity:1,
    stagger:0.2,

    scale:1,
    
  })
  
}*/
let tl=gsap.timeline();
tl.from("header", {
  opacity: 0
}).from(".temp", {
  xPercent: 100,
  yPercent: -100,
  scale: 0.5,
 /* onComplete: contentExpand*/
}).from(".content", {
  x: -1100,
  opacity: 0,
  scale: 0.5,
  duration: 0.7,
/*  onComplete: expandBtn*/
}).fromTo(".btns",{
    opacity:0,
  duration:0.5,
    scale:0.2,
    ease:"elastic"
  },{
    opacity:1,
    stagger:0.2,

    scale:1,
    
  })