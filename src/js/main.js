
const nav = document.getElementsByTagName("nav")[0];
const main = document.getElementsByTagName("main")[0];
const projects = document.getElementById("projects");
const about = document.getElementById("about");
const hamburgerBtn = document.getElementById("hamburgerBtn");

const renderLinks = ()=>{
    const mainLinks = `
        <div id="main-links" >

            <div id="title" >
                <h2>Proyectos personales</h2>
            </div>

            <div id="links-section" >
                <a href="https://andynievas.github.io/eMercado" >eMercado (JaP e-Commerce project)</a>
                <!-- <a href="#" >CRUD Nodejs</a> -->
                <a href="https://andynievas.github.io/weedway-react" >Red social con Reactjs</a>
                <a href="https://andynievas.github.io/mini-projects/login" >Login custom</a>
            </div>

            <div id="credits" >
                <h4>Developed by Andy Nievas</h4>
                <p>©2021</p>
            </div>

        </div>`;
    main.innerHTML = mainLinks;
}

const renderAbout = ()=>{
    const aboutSecction = `
        <div id="aboutSecction" >

            <div id="title" >
                <h2>Hola esto es About</h2>
            </div>

        </div>`;
    main.innerHTML = aboutSecction;
}


projects.addEventListener("click", ()=>{
    renderLinks();
})
about.addEventListener("click", ()=>{
    renderAbout();
})
hamburgerBtn.addEventListener("click", ()=>{
    document.getElementById("hamburgerBtn").classList.toggle("hamburgerBtnOpen");
    document.getElementById("hamburgerMenuContent").classList.toggle("hamburgerMenuContent");
    nav.classList.toggle("openMenu");
})

document.addEventListener("DOMContentLoaded", ()=>{
    renderLinks();
})