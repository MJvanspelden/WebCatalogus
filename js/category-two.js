let rockObjecten = [];
fetch('https://mbo-sd.nl/period3-fetch/music-genre-rock')
    .then(function (rockData) {
        return rockData.json();
    })
    .then(function (rockObjecten) {
        console.log(rockObjecten);
        createLayout(rockObjecten);
    });

function createLayout(rockObjecten) {

    let rockEl = document.querySelector('.rock')

    for (let rock = 0; rock < rockObjecten.length; rock++) {
        const genreRock = rockObjecten[rock];
        console.log(genreRock)
        
        const layout = `
        <div class="container-md-one">
        <div class="row">
          <div class="col-3">
            <img class="mx-auto d-block rounded" src="${genreRock.imageUrl}">
          </div>
          <div class="col-6">
            <div class="card text-center">
              <div class="card-body">
                <div class="card-title">${genreRock.title}</div>
                <div class="card-title">${genreRock.artists}</div>
                <div class="card-title">${genreRock.countryOfOrigin}</div>
                <div class="card-title">${genreRock.year}</div>
                <div class="card-text">${genreRock.description}</div
            </div>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
      `;

        rockEl.innerHTML += layout
    }
}