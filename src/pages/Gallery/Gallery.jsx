import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // If not already loaded globally
import './Gallery.css';   // <<<--- CORRECTED CSS FILENAME IMPORT

// --- MANUAL STATIC IMPORTS FOR GALLERY IMAGES (vk1.jpg to vk21.jpg) ---
import vk1 from '../../assets/gallery/vk1.jpg';
import vk2 from '../../assets/gallery/vk2.jpg';
import vk3 from '../../assets/gallery/vk3.jpg';
import vk4 from '../../assets/gallery/vk4.jpg';
import vk5 from '../../assets/gallery/vk5.jpg';
import vk6 from '../../assets/gallery/vk6.jpg';
import vk7 from '../../assets/gallery/vk7.jpg';
import vk8 from '../../assets/gallery/vk8.jpg';
import vk9 from '../../assets/gallery/vk9.jpg';
import vk10 from '../../assets/gallery/vk10.jpg';
import vk11 from '../../assets/gallery/vk11.jpg';
import vk12 from '../../assets/gallery/vk12.jpg';
import vk13 from '../../assets/gallery/vk13.jpg';
import vk14 from '../../assets/gallery/vk14.jpg';
import vk15 from '../../assets/gallery/vk15.jpg';
import vk16 from '../../assets/gallery/vk16.jpg';
import vk17 from '../../assets/gallery/vk17.jpg';
import vk18 from '../../assets/gallery/vk18.jpg';
import vk19 from '../../assets/gallery/vk19.jpg';
import vk20 from '../../assets/gallery/vk20.jpg';
import vk21 from '../../assets/gallery/vk21.jpg';

const galleryImages = [
  { id: 1, src: vk1, alt: 'Virat Kohli Gallery Image 1' },
  { id: 2, src: vk2, alt: 'Virat Kohli Gallery Image 2' },
  { id: 3, src: vk3, alt: 'Virat Kohli Gallery Image 3' },
  { id: 4, src: vk4, alt: 'Virat Kohli Gallery Image 4' },
  { id: 5, src: vk5, alt: 'Virat Kohli Gallery Image 5' },
  { id: 6, src: vk6, alt: 'Virat Kohli Gallery Image 6' },
  { id: 7, src: vk7, alt: 'Virat Kohli Gallery Image 7' },
  { id: 8, src: vk8, alt: 'Virat Kohli Gallery Image 8' },
  { id: 9, src: vk9, alt: 'Virat Kohli Gallery Image 9' },
  { id: 10, src: vk10, alt: 'Virat Kohli Gallery Image 10' },
  { id: 11, src: vk11, alt: 'Virat Kohli Gallery Image 11' },
  { id: 12, src: vk12, alt: 'Virat Kohli Gallery Image 12' },
  { id: 13, src: vk13, alt: 'Virat Kohli Gallery Image 13' },
  { id: 14, src: vk14, alt: 'Virat Kohli Gallery Image 14' },
  { id: 15, src: vk15, alt: 'Virat Kohli Gallery Image 15' },
  { id: 16, src: vk16, alt: 'Virat Kohli Gallery Image 16' },
  { id: 17, src: vk17, alt: 'Virat Kohli Gallery Image 17' },
  { id: 18, src: vk18, alt: 'Virat Kohli Gallery Image 18' },
  { id: 19, src: vk19, alt: 'Virat Kohli Gallery Image 19' },
  { id: 20, src: vk20, alt: 'Virat Kohli Gallery Image 20' },
  { id: 21, src: vk21, alt: 'Virat Kohli Gallery Image 21' },
];
// --- END MANUAL IMPORTS ---

const Gallery = () => { // <<<--- CORRECTED COMPONENT NAME
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
    window.scrollTo(0, 0);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && selectedImage) {
        closeImageModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);

  }, [selectedImage]);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  if (!galleryImages || galleryImages.length === 0) {
    return (
        <div className="gallery-page-vintage"> {/* Main wrapper class can stay same for CSS consistency */}
            <div className="container vintage-container" style={{ textAlign: 'center', paddingTop: '50px' }}>
                <h2 className="vintage-section-title">Gallery Empty</h2>
                <p className="vintage-intro-text">No images found. Please check image imports in Gallery.jsx.</p>
            </div>
        </div>
    );
  }

  return (
    <div className="gallery-page-vintage"> {/* Main wrapper class */}
      <div className="page-texture-overlay"></div>

      <header className="gallery-hero-vintage" data-aos="fade-in" data-aos-duration="1200">
        <div className="gallery-hero-overlay"></div>
        <div className="container vintage-container">
          <h1 className="gallery-hero-title" data-aos="fade-down" data-aos-delay="200">Gallery of Glory</h1>
          <p className="gallery-hero-subtitle" data-aos="fade-up" data-aos-delay="400">
            A Curated Collection of Virat Kohli's Iconic Moments & Visages
          </p>
        </div>
      </header>

      <main className="gallery-content-area container vintage-container">
        <p className="gallery-intro-text" data-aos="fade-up" data-aos-delay="100">
          Step through the frames of history. Each image a testament to the King's journey – his passion, his triumphs, his indomitable spirit.
        </p>
        <div className="vintage-divider-page" data-aos="zoom-in" data-aos-delay="200"></div>

        <div className="gallery-grid-masonry">
          {galleryImages.map((image, index) => (
            <div
              className="gallery-item-wrapper"
              key={image.id}
              data-aos="fade-up"
              data-aos-delay={`${100 + (index % 4) * 100}`}
              onClick={() => openImageModal(image.src)}
            >
              <img src={image.src} alt={image.alt} className="gallery-masonry-image" />
              <div className="gallery-item-overlay-hover">
                <span>VIEW</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedImage && (
        <div className="lightbox-modal" onClick={closeImageModal} data-aos="fade-in" data-aos-duration="300">
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-wrapper">
              <img src={selectedImage} alt="Selected Virat Kohli Moment" className="lightbox-image" />
              {/* Close button is removed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; // <<<--- CORRECTED EXPORT NAME