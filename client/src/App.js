import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Main from "./components/pages/Main";
import Map from "./components/pages/Map";
import Menu from "./components/pages/Menu";
import Show from "./components/pages/Show";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<Map />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </Router>
  );
}

export default App;
