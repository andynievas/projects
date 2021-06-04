
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

function plusSlide( n, parent ){
    parent = parent.parentNode;
    childNodes = parent.children;
    let largoDelImgSection = parent.getElementsByClassName("mySlide")["0"];
    
    mySlide = parent.getElementsByClassName("mySlide")["0"];
    
    elementoPadre = parent.parentNode.childElementCount - 3; // -1 por el indice y -2 por los buttons
    let valorARestar = largoDelImgSection.getElementsByTagName("img")[0];
    let posInicial = valorARestar.offsetWidth;
    // console.log(posInicial);

    // let aux =  mySlide[String(0)].style.left.slice( 0 , mySlide[String(0)].style.left.length-2 );
    // console.log( aux );
    // mySlide[String(0)].style.left = aux + posInicial + "px";

    let aux =  parseInt(mySlide.style.left.slice( 0 , mySlide.style.left.length-2 ));

    if( n == -1 && aux < 0 ){
        aux =  aux + posInicial;
        console.log(aux);
        mySlide.style.left = aux + "px";
    }else if( n == 1 && Math.abs(aux) < (mySlide.offsetWidth - posInicial - 10) ){
        aux =  aux - posInicial;
        console.log(aux);
        mySlide.style.left = aux + "px";
    }
}

let showLanguajes = ()=>{
    document.getElementById("languajeSelect").classList.toggle("active");
}