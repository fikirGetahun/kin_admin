import axios from "axios";
import apiUrl from "./apiUrl";

const api = new apiUrl();

class UpdateService {

    updateAlbum(){

        axios
        .put(`${api.joinUrl(api.endpoints.createTrack)}${albumId}/update`, mdata)
        .then((res) => {
          // alert(res.data); 
          console.log(file); 
          // console.log(res.data); 
          // console.log(res); 
          // alert(res.data); 
          if (res.status == 200) {

            setStatus("Album Edited Successfully!");

          } else {
            setStatus("error  ");
          }
        })
        .catch((err) => {
          setStatus(err);
        });
    }
    }
}