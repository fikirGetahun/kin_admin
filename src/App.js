import logo from "./logo.svg";
import "./App.css";
import DashBoard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistForm from "./pages/artist/artistForm";
import ListArtist from "./pages/artist/listArtist";
import AlbumForm from "./pages/album/albumForm";
import ListAlbum from "./pages/album/listAlbum";
import TrackList from "./pages/track/trackEditList";
import TrackForm from "./pages/track/trackForm";
import EditAlbumForm from "./pages/album/editAlbum";
import EditListAlbum from "./pages/album/editList";
import TrackEditForm from "./pages/track/trackEditForm";
import TrackEditList from "./pages/track/trackEditList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route path="/addArtist" element={<ArtistForm />} />
            <Route path="/listArtists" element={<ListArtist />} />
            <Route path="/addAlbum" element={<AlbumForm />} />
            <Route path="/listAlbum" element={<ListAlbum />} />
            <Route path="/listTrack" element={<TrackList />} />
            <Route path="/addTrack" element={<TrackForm />} />
            <Route path="/editArtistList" element={<EditListAlbum />} />
            <Route path="/editAlbum">
              <Route path=":albumId" element={<EditAlbumForm />} />
            </Route>
            <Route path="/editTrackList" element={<TrackEditList />} />
            <Route path="/editTrack">
              <Route path=":trackId" element={<TrackEditForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
