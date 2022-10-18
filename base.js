document.getElementById("idheader").innerHTML = /*html */`

        <nav class="header-menubar">
        
        <button class="burger-menu" id="burger-menu">
        <i class="fa fa-bars"></i>
      </button>
        <div class="header-logo">
        <img src="img/logo.png" alt="logo"></div> 
        <div class="menu">
                    <div><a href="index.html">Inicio</a></div>
                    <div class="dropdown">      <button class="dropbtn">Recetas    <i class="fa fa-caret-down"></i>       </button>
                    <div class="dropdown-content">
                      <a href="#">Guisos</a><br>
                      <a href="#">Panes</a><br>
                      <a href="#">Postres</a><br>
                    </div></div>
                    <div><a href="http://somos.html">Quienes somos</a></div>
                    <div><a href="contacto.html">Contacto</a></div></div>
                    <div class="buscador"> <input type="text" placeholder="Buscar..." class="buscador" id="buscador">     <button type="enviar"><i class="fa fa-search"></i></button></div> 
                    <div class="buscador-mobile" id="buscador-mobile"><button type="submit" id="buscar"><i class="fa fa-search"></i></button></div> 

            
          
        </nav>

`


document.getElementById("idfooter").innerHTML = /*html */` 
<div class="footer">
<a href="#" class="fa fa-instagram"></a>
<a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-youtube"></a></div>

`

const burger = document.querySelector(".burger-menu");
const ul = document.querySelector(".menu");
const nav = document.querySelector("nav");
const searchbar = document.querySelector(".buscador")
const searchicon = document.querySelector("#buscar")

const navLink = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});


navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


searchicon.addEventListener("click", () => {
  searchbar.classList.toggle("show");
});


const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
