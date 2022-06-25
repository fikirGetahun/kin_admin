import logo from "./logo.svg";
import "./App.css";
import DashBoard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistForm from "./pages/artist/artistForm";
import ListArtist from "./pages/artist/listArtist";
import AlbumForm from "./pages/album/albumForm";
import ListAlbum from "./pages/album/listAlbum";
import TrackList from "./pages/track/trackList";
import TrackForm from "./pages/track/trackForm";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
