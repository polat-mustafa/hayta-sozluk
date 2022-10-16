import "./App.css";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetail from "./components/UserDetail";
import Bosisler from "./components/channels/Bosisler";
import Yazilim from "./components/channels/Yazilim";
import Gundem from "./components/channels/Gundem";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/bosisler" element={<Bosisler />} />
          <Route path="/yazilim" element={<Yazilim />} />
          <Route path="/gundem" element={<Gundem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
