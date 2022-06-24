import logo from "./logo.svg";
import "./App.css";
import DashBoard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistForm from "./pages/artist/artistForm";

function App() {
  return (
    <div className="App">
      {/* <DashBoard /> */}

      <BrowserRouter>
        <Routes>
          {/* // main route */}
          <Route path="/" element={<DashBoard />}>
            <Route path="addArtist" element={<ArtistForm />}>
              {/* <Route index element={<ArtistForm />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
