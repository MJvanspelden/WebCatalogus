let hiphopObjecten = [];
fetch('https://mbo-sd.nl/period3-fetch/music-genre-hiphop')
    .then(function (hiphopData) {
        return hiphopData.json();
    })
    .then(function (hiphopObjecten) {
        console.log(hiphopObjecten);
        createLayout(hiphopObjecten);
    });

function createLayout(hiphopObjecten) {

    let hiphopEl = document.querySelector('.hiphop')

    for (let hiphop = 0; hiphop < hiphopObjecten.length; hiphop++) {
        const genreHiphop = hiphopObjecten[hiphop];
        console.log(genreHiphop)

        const layout = `
            <div class="container-md-one">
            <div class="row">
              <div class="col-3">
                <img class="mx-auto d-block rounded" src="${genreHiphop.imageUrl}">
              </div>
              <div class="col-6">
                <div class="card text-center">
                  <div class="card-body">
                    <div class="card-title">${genreHiphop.title}</div>
                    <div class="card-title">${genreHiphop.artists}</div>
                    <div class="card-title">${genreHiphop.countryOfOrigin}</div>
                    <div class="card-title">${genreHiphop.year}</div>
                    <div class="card-text">${genreHiphop.description}</div
                </div>
              </div>
              <div class="col-3"></div>
            </div>
          </div>
          `;

        hiphopEl.innerHTML += layout
    }
}