document.getElementById("idheader").innerHTML = `

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
                      <a href="#">Link 1</a><br>
                      <a href="#">Link 2</a><br>
                      <a href="#">Link 3</a><br>
                    </div></div>
                    <div><a href="http://somos.html">Quienes somos</a></div>
                    <div><a href="contacto.html">Contacto</a></div></div>
                    <div class="buscador"> <input type="text" placeholder="Buscar..." class="buscador" id="buscador">     <button type="enviar"><i class="fa fa-search"></i></button></div> 
                    <div class="buscador-mobile"><button type="submit" id="buscar"><i class="fa fa-search"></i></button></div> 

            
          
        </nav>

`


document.getElementById("idfooter").innerHTML = ` 
<h2>elemtos footer</h2>

`

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector(".menu");
const nav = document.querySelector("nav");

const navLink = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});


navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
