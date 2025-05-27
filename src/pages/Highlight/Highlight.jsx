import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Highlight.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { FaTrophy, FaCalendarAlt } from 'react-icons/fa';

// Assuming manual imports for galleryHighlightImages as it's more robust
// import hg1 from '../../assets/gallery/vk11.jpg'; // Example
// ... (import your 10 gallery highlight images)
// const galleryHighlightImages = [ { id: 1, src: hg1, alt: '...' }, ... ];
// For now, keeping the dynamic attempt with a warning
const galleryHighlightImages = [];
try {
    for (let i = 1; i <= 10; i++) {
        galleryHighlightImages.push({
            id: i,
            src: require(`../../assets/gallery/vk${i + 10}.jpg`).default || require(`../../assets/gallery/vk${i + 10}.jpg`),
            alt: `Kohli Highlight ${i}`
        });
    }
} catch (e) { console.warn("Dynamic image loading for gallery highlights failed. Consider manual imports.", e); }


const Highlight = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const countersAnimatedRef = useRef(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
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

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimatedRef.current) {
                    document.querySelectorAll('.stat-value-neon').forEach(animateCounter);
                    countersAnimatedRef.current = true;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats-showcase-section');
        if (statsSection) observer.observe(statsSection);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            if (statsSection) observer.unobserve(statsSection);
        };
    }, [selectedImage]);


    const animateCounter = (counterElement) => {
        const target = +counterElement.dataset.target;
        const duration = 2000;
        const incrementText = counterElement.dataset.incrementText || '';
        let current = 0;
        const stepTimeDefault = 50;
        const stepTime = target > 0 ? Math.abs(Math.floor(duration / target)) : stepTimeDefault;
        const incrementAmount = target > 0 ? 1 : 0;

        if (target === 0) {
            counterElement.innerText = "0" + incrementText;
            return;
        }
        
        const timer = setInterval(() => {
            current += incrementAmount;
            if (current >= target) {
                clearInterval(timer);
                counterElement.innerText = target + incrementText;
            } else {
                counterElement.innerText = current + incrementText;
            }
        }, stepTime > 0 ? stepTime : 1);
    };


    const openImageModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        document.body.style.overflow = 'hidden';
    };

    const closeImageModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const timelineEvents = [
        { year: '2008', title: 'ODI Debut', description: 'Made his One Day International debut for India against Sri Lanka.', icon: '🏏' },
        { year: '2011', title: 'World Cup Winner', description: 'Part of the Indian team that won the ICC Cricket World Cup.', icon: <FaTrophy /> },
        { year: '2013', title: 'No. 1 ODI Batsman', description: 'Reached the pinnacle of ODI batting rankings for the first time.', icon: '🏏' },
        { year: '2014', title: 'Test Captaincy', description: 'Appointed as full-time Test captain of India.', icon: <FaCalendarAlt /> },
        { year: '2017', title: 'Captain Across Formats', description: 'Became the captain in all three formats of the game.', icon: '👑' },
        { year: '2018', title: 'Sir Garfield Sobers Trophy', description: 'Won ICC Cricketer of the Year, Test Player of the Year, and ODI Player of the Year.', icon: <FaTrophy /> },
        { year: '2023', title: 'Historic 50th ODI Century', description: 'Broke the record for most ODI centuries during the World Cup.', icon: '💯' },
    ];

    // Updated Video data for Swiper - ALL YOUTUBE NOW
    const videoHighlights = [
        { id: '1', videoId: 'F6Plq-EVdcM', title: 'Masterclass vs Pakistan T20 WC 2022' },
        { id: '2', videoId: 'RGVCOSsxqms', title: 'Epic 183 vs Pakistan Asia Cup 2012' },
        { id: '3', videoId: 'ZRe4j-UUifM', title: 'Hobart Hurricane 133* vs Sri Lanka' },
        { id: '4', videoId: 'L-Mim9n9kuA', title: 'Dominating Australia Down Under' },
        { id: '5', videoId: 'KYFdigDvUj0', title: 'Kohli\'s Record 50th ODI Century' }, // <<<--- UPDATED WITH YOUTUBE ID
    ];


    return (
        <div className="highlight-page">
            <section className="highlight-hero-quote" data-aos="fade-in" data-aos-duration="1500">
                <div className="container">
                    <blockquote className="kohli-inspiring-quote">
                        "Self-belief and hard work will always earn you success."
                        <cite>- Virat Kohli</cite>
                    </blockquote>
                </div>
            </section>

            <section className="stats-showcase-section" data-aos="fade-up">
                <div className="container">
                    <h2 className="section-title-highlight" data-aos="fade-up">By The Numbers</h2>
                    <div className="stats-grid">
                        <div className="stat-card glassmorphic" data-aos="fade-up" data-aos-delay="100">
                            <div className="stat-value-neon" data-target="80" data-increment-text="+">0+</div>
                            <p className="stat-label">International Centuries</p>
                        </div>
                        <div className="stat-card glassmorphic" data-aos="fade-up" data-aos-delay="200">
                            <div className="stat-value-neon" data-target="26" data-increment-text="K+">0K+</div>
                            <p className="stat-label">International Runs</p>
                        </div>
                        <div className="stat-card glassmorphic" data-aos="fade-up" data-aos-delay="300">
                            <div className="stat-value-neon" data-target="522" data-increment-text="+">0+</div>
                            <p className="stat-label">International Matches</p>
                        </div>
                         <div className="stat-card glassmorphic" data-aos="fade-up" data-aos-delay="400">
                            <div className="stat-value-neon" data-target="50" data-increment-text="+">0+</div>
                            <p className="stat-label">Average Across Formats</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="timeline-section" data-aos="fade-up">
                <div className="container">
                    <h2 className="section-title-highlight" data-aos="fade-up">Journey of a Legend</h2>
                    <div className="vertical-timeline">
                        {timelineEvents.map((event, index) => (
                            <div className="timeline-item" key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay={`${index * 100}`}>
                                <div className="timeline-icon glassmorphic">{event.icon}</div>
                                <div className="timeline-content glassmorphic">
                                    <span className="timeline-year">{event.year}</span>
                                    <h3 className="timeline-title">{event.title}</h3>
                                    <p className="timeline-description">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Highlights Carousel - Simplified Swiper Slide Content */}
            <section className="video-carousel-section" data-aos="fade-up">
                <div className="container">
                    <h2 className="section-title-highlight" data-aos="fade-up">Unforgettable Innings</h2>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={videoHighlights.length >= 3} // Loop if enough videos
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="kohli-video-swiper"
                    >
                        {videoHighlights.map(video => (
                            <SwiperSlide key={video.id} className="video-swiper-slide">
                                <div className="video-wrapper glassmorphic">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.videoId}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                    <p className="video-slide-title">{video.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="gallery-highlights-section" data-aos="fade-up">
                <div className="container">
                    <h2 className="section-title-highlight" data-aos="fade-up">Moments of Triumph</h2>
                    {galleryHighlightImages.length > 0 ? (
                        <div className="highlight-gallery-grid">
                            {galleryHighlightImages.map((image, index) => (
                                <div
                                    className="highlight-gallery-item"
                                    key={image.id}
                                    data-aos="zoom-in-up"
                                    data-aos-delay={`${100 + (index % 3) * 100}`}
                                    onClick={() => openImageModal(image.src)}
                                >
                                    <img src={image.src} alt={image.alt} className="highlight-gallery-image" />
                                    <div className="highlight-gallery-overlay">
                                        <FaTrophy className="overlay-icon"/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{textAlign: 'center', color: 'var(--color-text-medium)'}}>Gallery images are currently unavailable. Please check configuration.</p>
                    )}
                </div>
            </section>

            {selectedImage && (
                <div className="highlight-lightbox-modal" onClick={closeImageModal} data-aos="fade-in" data-aos-duration="300">
                    <div className="highlight-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <div className="highlight-lightbox-image-wrapper">
                            <img src={selectedImage} alt="Selected Highlight" className="highlight-lightbox-image" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Highlight;