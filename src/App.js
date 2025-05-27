import React, { useEffect } from 'react'; // Import useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

import Home from './pages/Home/Home'; // Assuming Home is in pages/Home/
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Gallery from './pages/Gallery/Gallery';
import Highlight from './pages/Highlight/Highlight';
// import GalleryPage from './components/GalleryPage/GalleryPage';

function App() {
  // Initialize AOS when the App component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: false,    // whether animation should happen only once - while scrolling down
      mirror: false,  // whether elements should animate out while scrolling past them
      offset: 120,    // offset (in px) from the original trigger point
      delay: 100,     // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out-sine', // custom easing
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/highlight" element={<Highlight />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;