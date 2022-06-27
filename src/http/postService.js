import axios from "axios";
import apiUrl from "./apiUrl";

const api = new apiUrl();

var header = {
  "Content-Type": "application/json",
  // "Access-Control-Allow-Origin": "*",
};

class postService {
  createAlbum = async (data) => {
    const mdata = new FormData();

    mdata.append("album_name", data.album_name);
    mdata.append("album_description", data.album_description);
    mdata.append("artist", data.artist);
    mdata.append("album_cover", data.album_cover);

    await axios({
      url: api.joinUrl(api.endpoints.createAlbum),
      method: "POST",
      headers: header,
      data: mdata,
    })
      .then((res) => {
        // alert(res.data);
        // console.log(file);
        // console.log(res.data);
        // console.log(res);
        // alert(res.data);c
        if (res.status == 201) {
          return "Album Created Successfully!";
          //   setStatus("Album Created Successfully!");
        } else {
          return "error";
          //   setStatus("error  ");
        }
      })
      .catch((err) => {
        return "error";
        // setStatus(err);
      });
  };
}
export default postService;
