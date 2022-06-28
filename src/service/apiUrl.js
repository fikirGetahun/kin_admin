class apiUrls {
  constructor() {
    this.baseUrl = "http://35.195.198.137/music";
    this.endpoints = {
      createAlbum: "album",
      getArtist: "artist",
      getAlbum: "album",
    };
  }

  joinUrl(endPoint) {
    return `${this.baseUrl}/${endPoint}/`;
  }
}

export default apiUrls;
