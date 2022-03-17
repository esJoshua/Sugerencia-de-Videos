const musicaId = document.getElementById("musica");
const peliculasId = document.getElementById("peliculas");
const seriesId = document.getElementById("series");
const templateIframe = (url) => {
  return `<iframe width="832" height="468" src="${url}" allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};

class Multimedia {
  constructor(url) {
    this._url = () => url;
  }
  get url() {
    return this._url();
  }
  set url(url) {
    this._url = () => url;
  }
  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = () => id;
  }
  playMultimedia() {
    //console.log(this.url);
    //console.log(this._id());
    return play(this.url, this._id());
  }
  setInicio(time) {
    this.url = `${this.url}?start=${time}`;
  }
}

const play = (() => {
  const private = (url, id) => {
    // console.log(url);
    console.log(templateIframe(url, id));
    id.innerHTML += templateIframe(url, id);
  };

  const public = (url, id) => {
    private(url, id);
  };
  //console.log(public)
  return public;
})();

const musica1 = new Reproductor(
  "https://player.vimeo.com/video/45719041?h=b6b954731b",
  musicaId
);
// console.log(musica1.url);
musica1.setInicio(10);
musica1.playMultimedia();

const pelicula1 = new Reproductor(
  "https://www.youtube.com/embed/5PSNL1qE6VY",
  peliculasId
);
pelicula1.playMultimedia();

const serie1 = new Reproductor(
  "https://player.vimeo.com/video/81898016?h=9b7d000af5",
  seriesId
);
serie1.playMultimedia();
