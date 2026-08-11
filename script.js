/*========================================
        MOBILE MENU
========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});


/*========================================
        TYPING EFFECT
========================================*/

const typing = document.getElementById("typing");

const words = [

"Frontend Developer",

"Web Designer",

"JavaScript Developer",

"Freelancer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

let current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(type,1200);

return;

}

}else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(type,deleting ? 60 : 120);

}

type();



/*========================================
        STICKY NAVBAR
========================================*/

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>80){

navbar.style.padding="12px 0";

navbar.style.background="rgba(8,17,31,.96)";

}else{

navbar.style.padding="18px 0";

navbar.style.background="rgba(8,17,31,.85)";

}

});


/*========================================
        HERO IMAGE FLOATING
========================================*/

const image=document.querySelector(".image-box");

let up=true;

setInterval(()=>{

if(up){

image.style.transform="translateY(-12px)";

}else{

image.style.transform="translateY(0px)";

}

image.style.transition="1.8s";

up=!up;

},1800);



/*========================================
        SCROLL REVEAL
========================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.20});


document.querySelectorAll(".fade-up,.fade-left,.fade-right").forEach((el)=>{

observer.observe(el);

});



/*========================================
        ACTIVE MENU
========================================*/

const sections=document.querySelectorAll("section");

const nav=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

nav.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});



/*========================================
        SCROLL DOWN
========================================*/

document.querySelector(".scroll-down").addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector("#about").scrollIntoView({

behavior:"smooth"

});

});
