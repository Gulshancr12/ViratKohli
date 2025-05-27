import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Your vintage Navbar CSS

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Initialize with root path
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const navItems = [
    // Home will now be handled by the logo click primarily, but good to keep for active state logic
    { type: 'anchor', label: 'Home', path: '/#prologue', sectionId: 'prologue', baseRoute: '/' },
    { type: 'page', label: 'About', path: '/about', baseRoute: '/about' },
    { type: 'page', label: 'Gallery', path: '/gallery', baseRoute: '/gallery' },
    // Highlights is now a page link
    { type: 'page', label: 'Highlight', path: '/highlight', baseRoute: '/highlight' },
  ];

  // Effect for scrolling and setting active anchor on home page
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname === '/') {
        let currentActiveAnchor = '';
        navItems.forEach(item => {
          if (item.type === 'anchor' && item.sectionId) {
            const section = document.getElementById(item.sectionId);
            if (section) {
              const navbarHeight = navbarRef.current?.offsetHeight || 85;
              const sectionTop = section.offsetTop - navbarHeight - 70; // Increased buffer
              const sectionBottom = sectionTop + section.offsetHeight;
              if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentActiveAnchor = item.path;
              }
            }
          }
        });
        if (currentActiveAnchor) {
          if (activeLink !== currentActiveAnchor) setActiveLink(currentActiveAnchor);
        } else if (window.scrollY < 200 && activeLink !== '/#prologue') {
          setActiveLink('/#prologue');
        }
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    } else {
      // For non-home pages, remove scroll listener if it was attached
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, navItems, activeLink]); // Add activeLink to dependencies

  // Effect for setting active link based on current page route
  useEffect(() => {
    const currentPath = location.pathname + location.hash;
    const matchedItem = navItems.find(item => item.path === currentPath || item.baseRoute === location.pathname);

    if (matchedItem) {
      setActiveLink(matchedItem.path);
    } else if (location.pathname === '/' && !location.hash) {
      // If on root path without a hash, default "Home" to active
      setActiveLink('/#prologue');
    }
    // If no match and not on root, activeLink might remain on the previous page's link,
    // or you could clear it or set it to a default non-active state.
    // For now, it will try to match or default to home/prologue.

  }, [location, navItems]);


  const handleLogoClick = () => {
    setActiveLink('/#prologue'); // Set active link to home anchor
    setMobileMenuOpen(false);
    if (location.pathname === '/' && location.hash !== '#prologue' && location.hash !== '') {
      // Already on home, but not at top or #prologue, scroll to #prologue
      const section = document.getElementById('prologue');
      if (section) {
        const navbarHeight = navbarRef.current?.offsetHeight || 85;
        const sectionTopCoordinate = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: sectionTopCoordinate, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Fallback to top
      }
    } else if (location.pathname !== '/') {
      navigate('/'); // Navigate to home page first
      // Scrolling to #prologue will be handled by the anchor if needed, or default to top
    } else {
        // Already on home and at #prologue or top, just ensure menu is closed
    }
  };

  const handleNavLinkClick = (item) => {
    setActiveLink(item.path);
    setMobileMenuOpen(false);

    if (item.type === 'anchor') {
      if (location.pathname !== item.baseRoute) { // If not on the base route for the anchor
        navigate(item.baseRoute); // Navigate to the base page (e.g., '/')
        setTimeout(() => { // Scroll after navigation
          const section = document.getElementById(item.sectionId);
          if (section) {
            const navbarHeight = navbarRef.current?.offsetHeight || 85;
            const sectionTopCoordinate = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: sectionTopCoordinate, behavior: 'smooth' });
          }
        }, 100);
      } else { // Already on the correct page for the anchor
        const section = document.getElementById(item.sectionId);
        if (section) {
          const navbarHeight = navbarRef.current?.offsetHeight || 85;
          const sectionTopCoordinate = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: sectionTopCoordinate, behavior: 'smooth' });
        }
      }
    }
    // For 'page' type, <Link to={item.path}> handles navigation.
    // If item.path already includes a hash for a page (e.g. /about#details),
    // React Router handles the path, and browser handles the hash scroll.
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      ref={navbarRef}
      className={`vintage-navbar ${isScrolled ? 'scrolled' : ''}`}
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <div className="navbar-container vintage-container">
        <Link
          to="/" // Always links to the root
          className="navbar-logo-link-text"
          onClick={handleLogoClick} // Use dedicated handler for logo
        >
          <span className="logo-main-text">VK</span>
          <span className="logo-sub-text">The Archives</span>
        </Link>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </div>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`nav-item ${activeLink === item.path ? 'active' : ''}`}
            >
              {item.type === 'page' ? (
                <Link
                  to={item.path} // e.g., "/about", "/highlights"
                  className="nav-links"
                  onClick={() => handleNavLinkClick(item)}
                >
                  {item.label}
                  <span className="nav-link-underline"></span>
                </Link>
              ) : ( // type === 'anchor'
                <a // Using <a> for anchors on the same page, or <Link to="/#sectionId"> for cross-page anchors
                  href={item.path} // e.g., "/#prologue"
                  className="nav-links"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item);
                  }}
                >
                  {item.label}
                  <span className="nav-link-underline"></span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-shine-effect"></div>
    </nav>
  );
};

export default Navbar;