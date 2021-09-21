//Dom

/* let celdas = document.querySelectorAll("td");

celdas.forEach(function (td) {
  td.addEventListener('click', function (params) {
    console.log(this);
  });
}) */

let links = document.querySelectorAll(".accion");

links.forEach(function (link) {
  link.addEventListener('click', function (evento) {
    evento.preventDefault();
    let content = document.querySelector(".content");
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");



    content.classList.add("animate__fadeInUp");
    content.classList.add("animate__animated");

    setTimeout(function () {
      location.href = "../index.html";
    }, 600);
    return false;
  });
});


let iconos = document.querySelectorAll("i");

iconos.forEach(function (icono) {
  icono.classList.remove("far");
  icono.classList.add("fas");

})