
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
            
        </div>

        <div class="card-full" style="background-color: darkred;" >
            <h4>eMercado (JaP e-Commerce project)</h4>
            <p>Breve descripción del proyecto</p>
            <a href="https://andynievas.github.io/eMercado" >Visitar proyecto <i class="fa fa-link"></i> </i></a>
        </div>
        <div class="card-full" style="background-color: darkblue;" >
            <h4>Red social con Reactjs</h4>
            <p>Breve descripción del proyecto</p>
            <a href="https://andynievas.github.io/weedway-react" >Visitar proyecto <i class="fa fa-link"></i></a>
        </div>
        <div class="card-full" style="display: none; background-color: darkblue;" >
            <!-- <a href="#" >CRUD Nodejs</a> -->
            <p>Breve descripción del proyecto</p>
            <a href="https://andynievas.github.io/weedway-react" >Visitar proyecto <i class="fa fa-arrow-right"></i></a>
        </div>
        <div class="card-full" style="background-color: darkmagenta;" >
            <h4>Login custom</h4>
            <p>Breve descripción del proyecto</p>
            <a href="https://andynievas.github.io/mini-projects/login" >Visitar proyecto <i class="fa fa-link"fa-link
            fa-arrow
            fa-arrow></i></a>
        </div>`;
    main.innerHTML = mainLinks;
}

const renderAbout = ()=>{
    const aboutSecction = `
        <div id="aboutSecction" >

            <div id="title" >
                <h2>About Section</h2>
                <h2>Información de contacto y demás</h2>
            </div>

        </div>`;
    main.innerHTML = aboutSecction;
}


projects.addEventListener("click", ()=>{
    document.getElementById("hamburgerBtn").classList.toggle("hamburgerBtnOpen");
    document.getElementById("hamburgerMenuContent").classList.toggle("hamburgerMenuContent");
    renderLinks();
})
about.addEventListener("click", ()=>{
    document.getElementById("hamburgerBtn").classList.toggle("hamburgerBtnOpen");
    document.getElementById("hamburgerMenuContent").classList.toggle("hamburgerMenuContent");
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