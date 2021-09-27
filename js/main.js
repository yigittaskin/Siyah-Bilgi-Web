$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    }
    else {
        $('nav').removeClass('shrink');
    }
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay:true,
  smartSpeed: 300
  });
});

const cardGroup = document.getElementById('iceriklerContainer');

function getCard(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","icerikler.json",true);
    xhr.onload = function(){
        const veri =  JSON.parse(this.responseText);
        console.log(veri);
        for (let i = 0; i < veri.icerikler.length; i++) {           
            cardGroup.innerHTML +=`
        <div class="col-md-4">
        <div class="card m-3">
        <img class="card-img-top _jsonResim" src="${veri.icerikler[i].image}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title _jsonBaslik">${veri.icerikler[i].baslik}</h4>
                <p class="card-text _jsonMetin">${veri.icerikler[i].text}</p>
                <a class="abone-ol" href="${veri.icerikler[i].link}" target="_blank"">Videoyu İzle</a>
            </div>
            <div class="card-footer">
                <small class="text-muted _jsonTarih">${veri.icerikler[i].tarih}</small>
            </div>
        </div>
        </div>`
        }
    }
    xhr.send();
}
getCard();