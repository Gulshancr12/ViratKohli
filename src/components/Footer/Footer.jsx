import React from 'react';
import AOS from 'aos'; // Assuming AOS is used for consistency
import './Footer.css'; // Specific CSS for this Footer

// Assuming you still want to use the signature image in the footer
import kohliSignature from '../../assets/kohli-signature-whitebg.png'; // Use your actual path

const Footer = () => {
  // Initialize AOS for footer elements if not already globally done for everything
  // useEffect(() => {
  //   AOS.init({ duration: 800, once: true, offset: 50 });
  // }, []);

  return (
    <footer className="vintage-site-footer" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="footer-texture-overlay"></div> {/* Optional subtle texture for footer */}
      <div className="container vintage-container footer-container-vintage">

        <div className="footer-signature-area" data-aos="zoom-in" data-aos-delay="100">
          <img src={kohliSignature} alt="Virat Kohli Signature" className="footer-signature-image" />
        </div>

        <div className="footer-quote-area" data-aos="fade-up" data-aos-delay="200">
          <p className="footer-quote-text">"Believe in yourself and back your own ability."</p>
          <span className="footer-quote-author">- Virat Kohli</span>
        </div>

        <div className="footer-separator-vintage">✦ ✧ ✦</div>

        <div className="footer-credits" data-aos="fade-up" data-aos-delay="300">
          <p>
            The Kohli Archives © {new Date().getFullYear()} • A Tribute to The King.
            <br />
            Crafted with passion by 
            <a
              href="https://gulshanportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
              data-text="Gulshan Kumar" // For the crazy hover effect
            >
              <span>G</span>
              <span>u</span>
              <span>l</span>
              <span>s</span>
              <span>h</span>
              <span>a</span>
              <span>n</span>
               
              <span>K</span>
              <span>u</span>
              <span>m</span>
              <span>a</span>
              <span>r</span>
            </a>
          </p>
        </div>

        <div className="footer-socials-vintage" data-aos="fade-up" data-aos-delay="400">
          <a href="#!" aria-label="Telegrams - X/Twitter" className="social-link-vintage">Telegrams</a>
          <span className="social-divider-vintage">|</span>
          <a href="#!" aria-label="Pictorials - Instagram" className="social-link-vintage">Pictorials</a>
          <span className="social-divider-vintage">|</span>
          <a href="#!" aria-label="Chronicles - Facebook" className="social-link-vintage">Chronicles</a>
        </div>

        <div className="footer-bottom-flourish" data-aos="fade-up" data-aos-delay="500">
            {/* Could be an SVG or a text flourish */}
            ~ est. {new Date().getFullYear()} ~
        </div>

      </div>
    </footer>
  );
};

export default Footer;