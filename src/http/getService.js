import axios from "axios";
import apiUrl from "./apiUrl";

const api = new apiUrl();

class getService {
  getArtist = async () => {
    await axios
      .get(api.joinUrl(api.endpoints.getArtist))
      .then((res) => {
        // ArtistsX = res.data;

        //   res.data.map(ke =>{
        //   })
        if (res.status == 200) {
          return res.data;
        } else {
          return "error";
        }
        // return res.data;

        // alert(ArtistsX);
      })
      .catch((err) => {
        // ArtistsX.push("error");
        return "error";
      });
  };
}
export default getService;
