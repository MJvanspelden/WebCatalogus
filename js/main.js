console.log('Main JS loaded');

let popObjecten = [];
fetch('https://mbo-sd.nl/period3-fetch/music-genre-pop')
    .then(function (popData) {
        return popData.json();
    })
    .then(function (popObjecten) {
        console.log(popObjecten);
        createLayout(popObjecten);
    });

function createLayout(popObjecten) {

    let popEl = document.querySelector('.pop')

    for (let pop = 0; pop < popObjecten.length; pop++) {
        const genrePop = popObjecten[pop];
        console.log(genrePop)

        const layout = `
        <div class="container-md-one">
        <div class="row">
          <div class="col-3">
            <img class="mx-auto d-block rounded" src="${genrePop.imageUrl}">
          </div>
          <div class="col-6">
            <div class="card text-center">
              <div class="card-body">
                <div class="card-title">${genrePop.title}</div>
                <div class="card-title">${genrePop.artists}</div>
                <div class="card-title">${genrePop.countryOfOrigin}</div>
                <div class="card-title">${genrePop.year}</div>
                <div class="card-text">${genrePop.description}</div
            </div>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
      `;

        popEl.innerHTML += layout
    }
}