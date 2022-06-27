class apiUrls {
  constructor() {
    this.baseUrl = "http://34.76.194.211/api/media_crud/";
    this.endpoints = {
      createAlbum: "album",
      getArtist: "artist",
    };
  }

  joinUrl(endPoint) {
    return `${this.baseUrl}/${endPoint}`;
  }
}

export default apiUrls;
