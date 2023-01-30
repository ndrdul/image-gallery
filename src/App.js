
import './App.css';
import PhotoGallery from './components/Photogallery';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="bg-gray-900 p-3 flex justify-content-flex-start">
        <Link to="/" className="text-white mr-4 hover:text-gray-600">
          About
        </Link>
        <span className="text-white mx-4">|</span>
        <Link to="/contact" className="text-white mr-4 hover:text-gray-600">
          Contact
        </Link>
         <span className="text-white mx-4">|</span>
        <Link to="/photo-gallery" className="text-white mr-4 hover:text-gray-600">
          Photo Gallery
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
