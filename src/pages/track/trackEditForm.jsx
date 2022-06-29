import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import Button from "@mui/material/Button";
import TrackUpload from "../../components/fileUpload/trackUpload";
import { useDispatch, useSelector } from "react-redux";
import { trackAddSliceActions } from "../../store/postData";
import { useState, useEffect } from "react";
import PostService from "../../service/postService";
import getService from "../../service/getService";
import { useParams } from "react-router-dom";
import { tempDatatActions } from "../../store/getData";

const poster = new PostService();
const getter = new getService();

const TrackEditForm = () => {
  const { trackId } = useParams();

  const [formState, setFormState] = useState();
  const dispatch = useDispatch();
  var reduxData = useSelector((state) => state.trackAdd);
  const [isLoading, setIsLoading] = useState(false);
  const [artists, setArtist] = useState([]);

  const [selectedArtist, setSelectedArtist] = useState(null);
  const [albumListx, setAlbumList] = useState([]);
  const [albumId, setAlbumId] = useState(false);

  var selectAlbumOption = [];
  const changeART = (e) => {
    setSelectedArtist(e.target.value);
  };

  useEffect(() => {
    var test = getter.getSinglseTrack(trackId);
    test.then((res) => {
      dispatch(tempDatatActions.setTempData(res));
      setAlbumId(true);
    });
  }, []);

  useEffect(() => {
    //   var va = reduxData.tempData.
  }, [albumId]);

  var reduxData = useSelector((state) => state.tempData);

  if (selectedArtist == null) {
    selectAlbumOption = [];
    selectAlbumOption.push(
      <div>
        <InputLabel>Select Album</InputLabel>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-required-label">Albums</InputLabel>

          <Select
            labelId="demo-selected-small"
            id="demo-selected-small"
            label="Gender"
            onChange={(e) => {
              dispatch(trackAddSliceActions.setalbum(e.target.value));
            }}
            color="warning"
          >
            <MenuItem value="">None</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }

  if (selectedArtist) {
    selectAlbumOption = [];

    // controller.abort();

    selectAlbumOption.push(
      <div>
        <InputLabel>Select Album</InputLabel>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-required-label">Albums</InputLabel>

          <Select
            labelId="demo-selected-small"
            id="demo-selected-small"
            label="Gender"
            onChange={(e) => {
              dispatch(trackAddSliceActions.setalbum(e.target.value));
            }}
            color="warning"
          >
            <MenuItem value="">{reduxData.tempData.album}</MenuItem>

            {albumListx.map((ke, index) => (
              <MenuItem value={ke.id}>{ke.album_name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }

  useEffect(() => {
    var test = getter.getArtist();
    test.then((res) => {
      setArtist(res);
    });
  }, []);

  useEffect(() => {
    var alb = getter.getSingleArtist(selectedArtist);
    alb.then((res) => {
      var x = res.albums;
      setAlbumList(x);
      // console.log(selectedArtist);
    });

    // console.log(albumListx);
  }, [selectedArtist]);

  function handleSubmit() {
    // Object.keys(reduxData).map((key, index) => {
    //   if (reduxData[key] == null) {
    //     setFormState(false);
    //     // alert("Please fill all the forms!");
    //     alert(reduxData[key]);
    //     return;
    //   } else {
    //     setFormState(true);
    //   }
    // });

    // if (formState) {
    setIsLoading(true);
    var t = poster.CreateTrack();
    t.then((res) => {
      setIsLoading(false);
      alert(res);
    });
    // }
  }

  var showIsLoading = [];

  if (isLoading) {
    showIsLoading = [];
    showIsLoading.push(
      <div>
        <div class="d-flex align-items-center">
          <strong>Loading...</strong>
          <div
            class="spinner-border ms-auto"
            role="status"
            // aria-hidden="true"
          ></div>
        </div>
      </div>
    );
  } else {
    showIsLoading = [];
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
                        // onSelect={changeART}
                        onChange={(e) => {
                          setSelectedArtist(e.target.value);
                        }}
                      >
                        {artists.map((ke) => (
                          <MenuItem key={ke.id} value={ke.id}>
                            {" "}
                            {ke.artist_name}{" "}
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
                        onChange={(e) => {
                          dispatch(
                            trackAddSliceActions.settrack_genre(e.target.value)
                          );
                        }}
                        color="warning"
                      >
                        <MenuItem value="1">Regge</MenuItem>
                        <MenuItem value="2">Romance</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    {" "}
                    <InputLabel>Select Album</InputLabel>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-simple-select-required-label">
                        Albums
                      </InputLabel>

                      <Select
                        labelId="demo-selected-small"
                        id="demo-selected-small"
                        label="Gender"
                        onChange={(e) => {
                          dispatch(
                            trackAddSliceActions.setalbum(e.target.value)
                          );
                        }}
                        color="warning"
                      >
                        <MenuItem value="">{reduxData.tempData.album}</MenuItem>

                        {/* {reduxData.tempData.map((ke, index) => (
                          <MenuItem value={ke.id}>{ke.album_name}</MenuItem>
                        ))} */}
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <TextField
                  id="standard-basic"
                  label="Track Name"
                  variant="standard"
                  onChange={(e) => {
                    dispatch(
                      trackAddSliceActions.settrack_name(e.target.value)
                    );
                  }}
                />
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    onChange={(e) => {
                      dispatch(
                        trackAddSliceActions.settrack_description(
                          e.target.value
                        )
                      );
                    }}
                    multiline
                    rows={5}
                    maxRows={10}
                  />
                </FormControl>
                <div className="row">
                  <div className="col">
                    {/* <input type="file" /> */}
                    <TrackUpload selecter="trackUpload" />
                  </div>
                </div>

                <div>
                  <button
                    className="btn btn-warning"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Add Track
                  </button>
                </div>
                {showIsLoading}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackEditForm;
