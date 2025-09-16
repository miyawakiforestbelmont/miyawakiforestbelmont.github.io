import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Fosters from "./pages/Fosters";
import Updates from "./pages/Updates";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fosters" element={<Fosters />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
