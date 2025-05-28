import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const navItems = [
    { type: 'anchor', label: 'Home', path: '/#prologue', sectionId: 'prologue', baseRoute: '/' },
    { type: 'page', label: 'About', path: '/about', baseRoute: '/about' },
    { type: 'page', label: 'Gallery', path: '/gallery', baseRoute: '/gallery' },
    { type: 'page', label: 'Highlight', path: '/highlight', baseRoute: '/highlight' },
  ];

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
              const sectionTop = section.offsetTop - navbarHeight - 70;
              const sectionBottom = sectionTop + section.offsetHeight;
              if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentActiveAnchor = item.path;
              }
            }
          }
        });
        if (currentActiveAnchor) {
          setActiveLink(prev => prev !== currentActiveAnchor ? currentActiveAnchor : prev);
        } else if (window.scrollY < 200) {
          const homePath = navItems.find(i => i.label === 'Home')?.path || '/#prologue';
          setActiveLink(prev => prev !== homePath ? homePath : prev);
        }
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, navItems]); // Removed activeLink to prevent re-binding scroll listener on activeLink change

  useEffect(() => {
    const currentPath = location.pathname + location.hash;
    const matchedItem = navItems.find(item => item.path === currentPath || item.baseRoute === location.pathname);
    if (matchedItem) {
      setActiveLink(matchedItem.path);
    } else if (location.pathname === '/' && !location.hash) {
      const homePath = navItems.find(i => i.label === 'Home')?.path || '/#prologue';
      setActiveLink(homePath);
    }
  }, [location, navItems]);

  const handleLogoClick = () => {
    const homePath = navItems.find(i => i.label === 'Home')?.path || '/#prologue';
    setActiveLink(homePath);
    setMobileMenuOpen(false);
    if (location.pathname === '/' && (location.hash !== '#prologue' && location.hash !== '')) {
      const section = document.getElementById('prologue');
      if (section) {
        const navbarHeight = navbarRef.current?.offsetHeight || 85;
        const sectionTopCoordinate = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: sectionTopCoordinate, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const handleNavLinkClick = (item) => {
    setActiveLink(item.path);
    setMobileMenuOpen(false);
    if (item.type === 'anchor') {
      if (location.pathname !== item.baseRoute) {
        navigate(item.baseRoute);
        setTimeout(() => {
          const section = document.getElementById(item.sectionId);
          if (section) {
            const navbarHeight = navbarRef.current?.offsetHeight || 85;
            const sectionTopCoordinate = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: sectionTopCoordinate, behavior: 'smooth' });
          }
        }, 100);
      } else {
        const section = document.getElementById(item.sectionId);
        if (section) {
          const navbarHeight = navbarRef.current?.offsetHeight || 85;
          const sectionTopCoordinate = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: sectionTopCoordinate, behavior: 'smooth' });
        }
      }
    }
    // For 'page' type, <Link> handles navigation
  };

  const toggleMobileMenu = () => {
    // console.log("Toggling mobile menu. Current state was:", mobileMenuOpen); // For debugging
    setMobileMenuOpen(prev => !prev);
  };

  // Add a useEffect to log when mobileMenuOpen changes, to confirm state update leads to re-render
  useEffect(() => {
    // console.log("mobileMenuOpen state updated to:", mobileMenuOpen); // For debugging
    if (mobileMenuOpen) {
      document.body.style.overflowY = 'hidden'; // Prevent body scroll when mobile menu is open
    } else {
      document.body.style.overflowY = 'auto';
    }
    // Cleanup body overflow style when component unmounts or mobileMenuOpen changes again
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [mobileMenuOpen]);


  return (
    <nav
      ref={navbarRef}
      className={`vintage-navbar ${isScrolled ? 'scrolled' : ''}`}
      data-aos="fade-down" // Assuming AOS is initialized globally
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <div className="navbar-container vintage-container">
        <Link
          to="/"
          className="navbar-logo-link-text"
          onClick={handleLogoClick}
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
                  to={item.path}
                  className="nav-links"
                  onClick={() => handleNavLinkClick(item)}
                >
                  {item.label}
                  <span className="nav-link-underline"></span>
                </Link>
              ) : (
                <a
                  href={item.path}
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
      {/* The shine effect should ideally not interfere with the mobile menu if z-indexes are correct.
          If .vintage-navbar had overflow:hidden for this, that was the issue.
          Now that it's removed (or should be), this shine will extend if not clipped by another means.
          One way is to put .navbar-shine-effect inside a wrapper with overflow:hidden if needed,
          or make its gradient fade to full transparent at edges.
      */}
      <div className="navbar-shine-effect"></div>
    </nav>
  );
};

export default Navbar;