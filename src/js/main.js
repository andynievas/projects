
const body = document.getElementsByTagName("body")[0];
const nav = document.getElementsByTagName("nav")[0];
const main = document.getElementsByTagName("main")[0];
const projects = document.getElementById("projects");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const hamburgerMenuContent = document.getElementById("hamburgerMenuContent");
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
    nav.classList.toggle("dark");
    // nav.firstElementChild.classList.toggle("dark");
    hamburgerMenuContent.classList.toggle("dark");
});

function plusSlide( tag , n ){
    console.log(tag);
    tag = tag.children;
    // for( let i=0; i<tag.length; i++ ){
    //     if(tag[i].typeof != String)
    //     console.log(tag[i])
    // }
}

// document.addEventListener("DOMContentLoaded", ()=>{
//     renderLinks();
// })