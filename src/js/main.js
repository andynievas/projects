
const nav = document.getElementsByTagName("nav")[0];
const main = document.getElementsByTagName("main")[0];
const projects = document.getElementById("projects");
const about = document.getElementById("about");
const hamburgerBtn = document.getElementById("hamburgerBtn");


projects.addEventListener("click", ()=>{
    document.getElementById("hamburgerBtn").classList.toggle("hamburgerBtnOpen");
    document.getElementById("hamburgerMenuContent").classList.toggle("hamburgerMenuContent");
})
about.addEventListener("click", ()=>{
    document.getElementById("hamburgerBtn").classList.toggle("hamburgerBtnOpen");
    document.getElementById("hamburgerMenuContent").classList.toggle("hamburgerMenuContent");
})
hamburgerBtn.addEventListener("click", ()=>{
    document.getElementById("hamburgerBtn").classList.toggle("hamburgerBtnOpen");
    document.getElementById("hamburgerMenuContent").classList.toggle("hamburgerMenuContent");
    nav.classList.toggle("openMenu");
})

// document.addEventListener("DOMContentLoaded", ()=>{
//     renderLinks();
// })