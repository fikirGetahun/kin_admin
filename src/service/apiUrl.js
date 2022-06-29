class apiUrls {
  constructor() {
    this.baseUrl = "http://35.195.198.137/music";
    this.endpoints = {
      createAlbum: "album",
      getArtist: "artist",
      getAlbum: "album",
      createTrack: "track",
      getTrack: "track",
    };
  }

  joinUrl(endPoint) {
    return `${this.baseUrl}/${endPoint}/`;
  }
}

export default apiUrls;
