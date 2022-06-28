import axios from "axios";
import apiUrl from "./apiUrl";
import { useDispatch, useSelector } from "react-redux";
import store from "../store/mainStore";

const api = new apiUrl();

var header = {
  "Content-Type": "application/json",
  // "Access-Control-Allow-Origin": "*",
};

class PostService {
  CreateAlbum = async () => {
    const mdata = new FormData();
    const data = store.getState().albumAdd;

    mdata.append("album_name", data.albumName);
    mdata.append("album_description", data.desc);
    mdata.append("artist", data.aritistId);
    mdata.append("album_cover", data.cover);

    return await axios({
      url: api.joinUrl(api.endpoints.createAlbum),
      method: "POST",
      headers: header,
      data: mdata,
    })
      .then((res) => {
        // alert(res.data);
        // console.log(file);
        // console.log(res.data);
        // alert(res.data);c
        if (res.status == 201) {
          return "Album Created Successfully!";
          //   setStatus("Album Created Successfully!");
        } else {
          return "error! conuld not add artist.";
          //   setStatus("error  ");
        }
      })
      .catch((err) => {
        console.log("response: below");

        return err;
        // setStatus(err);
      });
  };
}
export default PostService;
