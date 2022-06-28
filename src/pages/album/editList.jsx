import React, { useEffect } from "react";
import { MenuItem, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Pagination from "@mui/material/Pagination";
import getService from "../../service/getService";
import { useDispatch, useSelector } from "react-redux";
import { useSelect } from "@mui/base";
import { useState } from "react";
import { albumListActions } from "../../store/getData";
import zIndex from "@mui/material/styles/zIndex";
import { Link } from "react-router-dom";
const getter = new getService();

const EditListAlbum = () => {
  const dispatch = useDispatch();

  const reduxDataRow = useSelector((state) => state.albumList);

  const [artistsx, setArtistsx] = useState([]);
  const [xx, setXx] = useState();
  var arr = [];

  useEffect(() => {
    var data = getter.getAlbum();
    data.then((res) => {
      if (reduxDataRow.dataLoaded == false) {
        dispatch(albumListActions.setArtist(res));
        setXx(true);

        dispatch(albumListActions.setDataLoaded());
      }
    }, []);

    // var artists = getter.getArtist();

    // console.log(reduxData.artistList);
  });
  const reduxData = useSelector((state) => state.albumList);
  var artistsw = [];
  useEffect(() => {
    what();
  }, [xx]);

  const what = async () => {
    for (var ar of reduxData.artistList) {
      // artistsw =  getter.getSingleArtist(ar.artist);
      artistsw.push(getter.getSingleArtist(ar.artist));
    }
    var zz = [];
    if (artistsw.length > 0) {
      Promise.all(artistsw)
        .then(function (res2) {
          res2.map((data) => {
            zz.push(data.artist_name);
          });
          // result.map((file) => {
          //   filesURL.push(file);
          // });
          return true; // return from here to go to the next promise down
        })
        .then(() => {
          setArtistsx(zz);
        });
    }

    // for (var ar of reduxData.artistList) {
    //   artistsw = await getter.getSingleArtist(ar.artist);
    //   artistsw.then((res2) => {
    //     // var z = artistsx;
    //     // z.push(res2.artist_name);
    //     setArtistsx([...artistsx, res2.artist_name]);

    //     // arr.push(res2.artist_name);

    //     // console.log(res2);
    //   });
    // }

    // setArtistsx(arr);
  };

  console.log(artistsx);
  // console.log("dddddxx");
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <form>
                <div className="hstack gap-3 d-flex-justify-content-center align-items-center">
                  <TextField
                    label="Search by Artist"
                    id="outlined-size-small"
                    defaultValue=" "
                    size="small"
                    fullwidth
                  />
                  <Button variant="contained">Search</Button>
                </div>
              </form>
            </div>
            <div className="col">
              <div className="hstack gap-2">
                <div className="d-flex justify-content-start">
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-simple-select-required-label">
                      Sort By
                    </InputLabel>
                    <Select
                      labelId="demo-selected-small"
                      id="demo-selected-small"
                      label="Sort By"
                      color="warning"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="A">A</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="d-flex justify-content-start">
                  <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                    <InputLabel id="demo-simple-select-required-label">
                      Sort By Genere
                    </InputLabel>

                    <Select
                      labelId="demo-selected-small"
                      id="demo-selected-small"
                      label="Sort By Genere"
                      color="warning"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="A">Regge</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <div className="vstack gap-4">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Album Name</th>
                  <th scope="col">Artist</th>
                  <th scope="col">Tracks</th>
                  <th scope="col">Descrition</th>

                  <th colspan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                {reduxDataRow.artistList.map((key, index) => (
                  <tr key={index + 1}>
                    <th scope="row">{index}</th>
                    <td>{key.album_name}</td>
                    <td>{artistsx[index]}</td>
                    <td>@mdo</td>
                    <td>{key.album_description}</td>
                    <td>
                      <button className="btn btn-warning">
                        <Link to={"/editAlbum/" + key.id}>Edit</Link>
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination count={6} variant="outlined" shape="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditListAlbum;
