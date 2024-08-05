// GSAP Animation
gsap.from(".image-1", 1.2, {opacity: 0, y: 150,delay: 0.5});
gsap.from(".image-2", 1.2, {opacity: 0, y: 150,delay: 1});
gsap.from(".image-3", 1.2, {opacity: 0, y: 150,delay: 1.2});
gsap.from(".image-4", 1.2, {opacity: 0, y: 150,delay: 2.1});
gsap.from(".image-5", 1.2, {opacity: 0, y: -80,delay: 1.5});
gsap.from(".image-6", 1.2, {opacity: 0, x: 80,delay: 1.5});
gsap.from(".image-7", 1.2, {opacity: 0, y: -80,delay: 1.5});
gsap.from("h1", 1.2, {opacity: 0, y: -80,delay: 1.4});
gsap.from("p", 1.2, {opacity: 0, y: -80,delay: 1.25});
gsap.from("button", 1.2, {opacity: 0, y: -80,delay: 1});

// Toggle Menu Function
const menu =  document.querySelector(".menu");
const tolggle = document.getElementById("toggle");

tolggle.onclick = function(){
    menu.classList.toggle("active")
}
