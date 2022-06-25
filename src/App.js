import logo from "./logo.svg";
import "./App.css";
import DashBoard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistForm from "./pages/artist/artistForm";
import ListArtist from "./pages/artist/listArtist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route path="/addArtist" element={<ArtistForm />} />
            <Route path="/listArtists" element={<ListArtist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
