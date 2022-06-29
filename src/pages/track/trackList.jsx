import React, { useEffect } from "react";
import { MenuItem, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Pagination from "@mui/material/Pagination";
import getService from "../../service/getService";
const getter = new getService();

const TrackList = () => {
  const [trackList, setTrackList] = useState();

  useEffect(() => {
    var get = getter.getTrack();
    get.then((res) => {
      setTrackList(res);
    });
  }, []);

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <form>
                <div className="hstack gap-3 d-flex-justify-content-center">
                  <TextField
                    label="search"
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
                  <th scope="col">Track Name</th>
                  <th scope="col">Artist</th>
                  <th scope="col">Descrition</th>
                  <th scope="col">Albums</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {trackList.map((ke, index) => (
                  <tr key={ke.id}>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                      <button className="btn btn-warning">View More</button>
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

export default TrackList;
