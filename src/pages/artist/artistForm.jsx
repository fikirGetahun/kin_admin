import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import Button from "@mui/material/Button";
const ArtistForm = () => {
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
                  <img
                    src={require("../../images/dashboard/img_1.jpg")}
                    class="rounded"
                    alt="../../images/dashboard/darkBG.png"
                  />
                  <div>
                    <div
                      id="form-file-upload"
                      // onDragEnter={handleDrag}
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        // ref={inputRef}
                        type="file"
                        id="input-file-upload"
                        multiple={true}
                        // onChange={handleChange}
                      />
                      <label
                        id="label-file-upload"
                        htmlFor="input-file-upload"
                        // className={dragActive ? "drag-active" : ""}
                      >
                        <div>
                          <p>Drag and drop your file here or</p>
                          <button
                            className="upload-button"
                            // onClick={onButtonClick}
                          >
                            Upload a file
                          </button>
                        </div>
                      </label>
                      {/* {dragActive && ( */}
                      <div
                        id="drag-file-element"
                        // onDragEnter={handleDrag}
                        // onDragLeave={handleDrag}
                        // onDragOver={handleDrag}
                        // onDrop={handleDrop}
                      ></div>
                      {/* )} */}
                    </div>
                  </div>
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
              <Button variant="outlined" color="success">
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
