import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import Button from "@mui/material/Button";
import DragDropFile from "../../components/fileUpload/photoUpload";
import PostService from "../../service/postService";
import getService from "../../service/getService";
import { useDispatch, useSelector } from "react-redux";

const ArtistForm = () => {
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.artistAdd);

  function handleSubmit() {}

  return (
    <div>
      <div class="card">
        <div class="card-body">
          {/* <h4 class="card-title">Default form</h4> */}
          <p class="card-description">Basic form layout</p>
          <form class="forms-sample">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div class="vstack gap-5">
                  <DragDropFile selector="artistInput" />
                </div>
              </div>
              <div className="vstack gap-3 col-lg-6 col-12">
                <div class="d-flex justify-content-start">
                  <div class="hstack gap-3">
                    <TextField
                      id="standard-basic"
                      label="First Name"
                      variant="standard"
                    />

                    <TextField
                      id="standard-basic"
                      label="Last Name"
                      variant="standard"
                    />
                  </div>
                </div>
                <div class="hstack gap-3">
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-simple-select-required-label">
                        Gender
                      </InputLabel>
                      <Select
                        labelId="demo-selected-small"
                        id="demo-selected-small"
                        label="Gender"
                        color="warning"
                      >
                        <MenuItem value="A">Male</MenuItem>
                        <MenuItem value="A">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div></div>
                </div>
                <div>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Description"
                      multiline
                      rows={5}
                      maxRows={10}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="float-right">
              <Button variant="outlined" color="success" onClick={handleSubmit}>
                Add Artist
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArtistForm;
