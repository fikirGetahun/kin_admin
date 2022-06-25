import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import Button from "@mui/material/Button";
const AlbumForm = () => {
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
                      >
                        <MenuItem value="A">Tedy Afro</MenuItem>
                        <MenuItem value="A">Zeritu Kebede</MenuItem>
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
                      >
                        <MenuItem value="A">Regge</MenuItem>
                        <MenuItem value="A">Romance</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <TextField
                    id="standard-basic"
                    label="Album Name"
                    variant="standard"
                  />
                </div>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    rows={5}
                    maxRows={10}
                  />
                </FormControl>
                <div className="row">
                  <div className="d-flex justify-content-center align-items-center col">
                    <span>Images</span>
                  </div>
                  <div className="col">
                    <input type="file" />
                  </div>
                </div>
                <div>
                  <button className="btn btn-warning">Add Album</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumForm;
