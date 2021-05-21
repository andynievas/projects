
const body = document.getElementsByTagName("body")[0];
const nav = document.getElementsByTagName("nav")[0];
const main = document.getElementsByTagName("main")[0];
const projects = document.getElementById("projects");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const toggleDark = document.getElementById("toggle-dark");


projects.addEventListener("click", ()=>{
    document.getElementById("hamburgerBtn").classList.toggle("hamburgerBtnOpen");
    document.getElementById("hamburgerMenuContent").classList.toggle("hamburgerMenuContent");
});
about.addEventListener("click", ()=>{
    document.getElementById("hamburgerBtn").classList.toggle("hamburgerBtnOpen");
    document.getElementById("hamburgerMenuContent").classList.toggle("hamburgerMenuContent");
});
contact.addEventListener("click", ()=>{
    document.getElementById("hamburgerBtn").classList.toggle("hamburgerBtnOpen");
    document.getElementById("hamburgerMenuContent").classList.toggle("hamburgerMenuContent");
});
hamburgerBtn.addEventListener("click", ()=>{
    document.getElementById("hamburgerBtn").classList.toggle("hamburgerBtnOpen");
    document.getElementById("hamburgerMenuContent").classList.toggle("hamburgerMenuContent");
    nav.classList.toggle("openMenu");
});

toggleDark.addEventListener("click", ()=>{
    body.classList.toggle("dark");
});

// document.addEventListener("DOMContentLoaded", ()=>{
//     renderLinks();
// })