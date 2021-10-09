const accesKey = "CMHGZ2OuImP-1-ErqNcAavXUHQz-VNpytJpQIubE3-s";
const endPoint = 'https://api.unsplash.com/search/photos';

const $btnSearchI = document.querySelector('#searchI');
const $keyWords = document.querySelector('#keyWords');


const idImagenes = ["img1", "img2","img3", "img4","img5"]


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
    
    for(let i = 0 ; i < idImagenes.length; i++ ) {     
      
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


