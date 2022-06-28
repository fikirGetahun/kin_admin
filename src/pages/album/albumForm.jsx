import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { albumActions } from "../../store/postData";
import DragDropFile from "../../components/fileUpload/photoUpload";
import PostService from "../../service/postService";
import getService from "../../service/getService";

const poster = new PostService();
const getter = new getService();
const AlbumForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.albumAdd);

  const [status2, setStatus] = useState(null);
  const [formState, setFormState] = useState();
  const [artists, setArtist] = useState([]);

  useEffect(() => {
    var test = getter.getArtist();
    test.then((res) => {
      console.log(res);
      setArtist(res);
    });
  }, []);

  function handleSubmit() {
    // alert(data);
    // console.log(data);

    Object.keys(data).map((key, index) => {
      if (data[key] == null) {
        setFormState(false);
        alert("Please fill all the forms!");
        return;
      } else {
        setFormState(true);
      }
    });
    if (formState) {
      var res = poster.CreateAlbum();
      console.log(
        res.then((resv) => {
          console.log(resv);
          if (resv == "Album Created Successfully!") {
            setStatus("Album Created Successfully!");
          } else if (resv == "error! conuld not add artist.") {
            setStatus("error! conuld not add artist.");
          } else {
            setStatus("error");
          }
        })
      );
    }
  }

  var statusOut = [];
  if (status2 != null) {
    // alert("in state");
    console.log(status2);
    if (status2 == "Album Created Successfully!") {
      statusOut = [];
      statusOut.push(<span className="text text-success">{status2}</span>);
    } else if (status2 == "error! conuld not add artist.") {
      statusOut = [];
      statusOut.push(<span className="text text-danger">{status2}</span>);
    } else {
      statusOut = [];
      statusOut.push(<span className="text text-danger">{status2}</span>);
    }
  } else {
    statusOut = [];
  }

  return (
    <div>
      <div class="card">
        <div class="card-body">
          <div className="hstack gap-4">
            <div className="col">
              <div className="vstack gap-4">
                <div className="d-flex justify-content-center align-item-center">
                  <div className="vstack gap-1">
                    <h6>Select Artist</h6>
                    <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
                      <InputLabel id="demo-simple-select-required-label">
                        Artist
                      </InputLabel>
                      <Select
                        labelId="demo-selected-small"
                        id="demo-selected-small"
                        label="Gender"
                        color="warning"
                        onChange={(e) => {
                          dispatch(albumActions.setArtistId(e.target.value));
                        }}
                      >
                        {artists.map((key, index) => (
                          <MenuItem value={key.id}>
                            {" "}
                            {key.artist_name}{" "}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div class="vr"></div>
            <div className="col">
              <div className="vstack gap-3">
                <div className="hstack gap-4">
                  <div>
                    <InputLabel>Select Genere</InputLabel>

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-simple-select-required-label">
                        Genere
                      </InputLabel>

                      <Select
                        labelId="demo-selected-small"
                        id="demo-selected-small"
                        label="Gender"
                        color="warning"
                        onChange={(e) => {
                          dispatch(albumActions.setGenre(e.target.value));
                        }}
                      >
                        <MenuItem value="1">Regge</MenuItem>
                        <MenuItem value="2">Romance</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <TextField
                    id="standard-basic"
                    label="Album Name"
                    variant="standard"
                    onChange={(e) => {
                      dispatch(albumActions.setAlbumName(e.target.value));
                    }}
                  />
                </div>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    rows={5}
                    maxRows={10}
                    onChange={(e) => {
                      dispatch(albumActions.setDesc(e.target.value));
                    }}
                  />
                </FormControl>
                <div className="row">
                  <div className="col">
                    {/* <input type="file" /> */}
                    <DragDropFile selecter="albumInput" />
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-warning"
                    // type="submit"
                    onClick={handleSubmit}
                  >
                    Add Album
                  </button>
                </div>
                {statusOut}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumForm;
