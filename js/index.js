const accesKey = "CMHGZ2OuImP-1-ErqNcAavXUHQz-VNpytJpQIubE3-s";
const endPoint = 'https://api.unsplash.com/search/photos';

const $btnSearchI = document.querySelector('#searchI');
const $keyWords = document.querySelector('#keyWords');
const idImagenes = ["img1", "img2","img3", "img4","img5"];

const $scrum = document.querySelector('#Scrum');
const $popUpScrum = document.querySelector('#popUpScrum');
const $closeScrum = document.querySelector('#popup-close-scrum');

const $git = document.querySelector('#Git');
const $popUpGit = document.querySelector('#popUpGit');
const $closeGit = document.querySelector('#popup-close-git');

const $btnModeD = document.querySelector('.modeD');

async function getImages(query) {
  let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  let imagesList = await jsonResponse.results;
  
  function createImages(imagesList){
    document.querySelector('#resultadosI').innerHTML = `<div id="carouselExampleIndicators"   class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active" id="img1">
        
      </div>
      <div class="carousel-item" id="img2">
        
      </div>
      <div class="carousel-item" id="img3">
        
      </div>
      <div class="carousel-item" id="img4">
        
      </div>
      <div class="carousel-item" id="img5">
        
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    </div>`;
    
    for(let i = 0 ; i <imagesList.length && i < idImagenes.length; i++ ) {     
      
      const item = document.getElementById(idImagenes[i]);
      const image = document.createElement('img');
      image.classList.add('d-block');
      image.classList.add('w-100');
      image.src = imagesList[i].urls.thumb;

      item.appendChild(image);

    };
    
  }
  createImages(imagesList);
}

$btnSearchI.addEventListener('click', () => {
  input = $keyWords.value;
  getImages(input.replace(' ', ','));
});

$scrum.addEventListener('click', () => {
  $popUpScrum.style.display = 'block';      //hace visible el pop up agregandole un display, por defecto esta en none
});
$git.addEventListener('click', () => {
  $popUpGit.style.display = 'block';      
});

$popUpScrum.addEventListener('click', e => {
  e.target.className === 'popup-wrapper' ? $popUpScrum.style.display = "none" : null;
});  //si se clickea fuera del popup se oculta de nuevo
$popUpGit.addEventListener('click', e => {
  e.target.className === 'popup-wrapper' ? $popUpGit.style.display = "none" : null;
});  

$closeScrum.addEventListener('click', () => {
  $popUpScrum.style.display = 'none';      //se oculta dandole a la X
});
$closeGit.addEventListener('click', () => {
  $popUpGit.style.display = 'none';      //se oculta dandole a la X
});

window.onload = function(){
  var $contenedor = document.querySelector('#contenedor_carga');
  $contenedor.style.visibility = 'hidden';
  $contenedor.style.display = 'none'; 
}; // en cuanto carga el contenido completo se oculta el loader

$btnModeD.addEventListener('click', () => {
  validaModo();
});

$btnModeD.checked = true;
  validaModo();

function validaModo() {
  if ($btnModeD.checked) {
    document.body.classList.add('fondoD'); 
    document.body.classList.remove('fondoL');

    document.querySelector('.nv').classList.add('fondoDegradadoD');
    document.querySelector('.nv').classList.remove('fondoDegradadoL');

    document.querySelector('footer').classList.add('fondoDegInvD');
    document.querySelector('footer').classList.remove('fondoDegInvL');
    
    document.querySelector('#langSelect').classList.remove('colorTextoL');

    const desplegable = document.querySelectorAll('.desplegable');
    desplegable.forEach(element => element.classList.remove('fondoL'));

    const h3 = document.querySelectorAll('.h3'); 
    h3.forEach(element => element.classList.remove('colorTextoL'));

    const txts = document.querySelectorAll('.txt'); 
    txts.forEach(element => element.classList.remove('colorTextoL'));

    const iconos = document.querySelectorAll('.iconoL');
    iconos.forEach(element => element.style.display = 'none');
    const iconos2 = document.querySelectorAll('.iconoD');
    iconos2.forEach(element => element.style.display = 'inline-block');

    const li = document.querySelectorAll('li');
    li.forEach(element => element.classList.remove('fondoL'));

  } else {
    document.body.classList.add('fondoL');
    document.body.classList.remove('fondoD');

    document.querySelector('.nv').classList.add('fondoDegradadoL');
    document.querySelector('.nv').classList.remove('fondoDegradadoD');
    
    document.querySelector('footer').classList.add('fondoDegInvL');
    document.querySelector('footer').classList.remove('fondoDegInvD');

    document.querySelector('#langSelect').classList.add('colorTextoL');

    const desplegable = document.querySelectorAll('.desplegable');
    desplegable.forEach(element => element.classList.add('fondoL'));

    const h3 = document.querySelectorAll('.h3'); 
    h3.forEach(element => element.classList.add('colorTextoL'));
    
    const txts = document.querySelectorAll('.txt'); 
    txts.forEach(element => element.classList.add('colorTextoL'));
    
    const iconos = document.querySelectorAll('.iconoD');
    iconos.forEach(element => element.style.display = 'none');
    const iconos2 = document.querySelectorAll('.iconoL');
    iconos2.forEach(element => element.style.display = 'inline-block');

    const li = document.querySelectorAll('li');
    li.forEach(element => element.classList.add('fondoL'));
    ;
  }
}