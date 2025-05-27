import React, { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom'; // Uncomment if you use <Link> for CTA buttons
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css'; // Your vintage CSS file for Home page

// --- YOUR ORIGINAL IMAGE IMPORTS (USING THESE EXACT NAMES) ---
import heroBgImage from '../../assets/kohli-hero-bg.jpg';
import kohliSignature from '../../assets/kohli-signature-whitebg.png';
import kohliProfile1 from '../../assets/kohli-profile-1.jpg';
import kohliAction1 from '../../assets/kohli-action-1.jpg';
import kohliAction2 from '../../assets/kohli-action-2.jpg';
import kohliTrophy from '../../assets/kohli-trophy.jpg';
import kohliAggression from '../../assets/kohli-aggression.jpg';
import kohliLeader from '../../assets/kohli-leader.jpg';
import kohliTraining from '../../assets/kohli-training.jpg';
import kohliYoung from '../../assets/kohli-young.jpg';
import kohliRecord from '../../assets/kohli-record.jpg';
import kohliSmile from '../../assets/kohli-smile.jpg';
import kohliVintagePic from '../../assets/kohli-vintage.jpg';

// Arsenal Icons (using your exact names)
import coverDriveIcon from '../../assets/cover-drive.jpg';
import flickIcon from '../../assets/flick.jpg';
import pullShotIcon from '../../assets/pull-shot.jpg';
import runningIcon from '../../assets/running.jpg';


const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const countersAnimatedRef = useRef(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
      offset: 120,
      delay: 100,
      easing: 'ease-in-out-sine',
    });

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const heroContentParallax = document.querySelector('.hero-content-parallax-vintage'); // Check if this class exists in Home.css

    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (heroContentParallax) {
        heroContentParallax.style.transform = `translateY(${offset * 0.15}px) translateZ(0)`;
      }

      if (!countersAnimatedRef.current) {
        const milestoneSection = document.querySelector('.chapter-records'); // Make sure this section has this class or ID
        if (milestoneSection) {
          const rect = milestoneSection.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            document.querySelectorAll('.vintage-counter.number:not(.counted)').forEach(animateCounter);
            if (document.querySelectorAll('.vintage-counter.number:not(.counted)').length === 0) {
                countersAnimatedRef.current = true;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    const animateCounter = (counterElement) => {
      if (counterElement.classList.contains('counted')) return;
      const target = +counterElement.getAttribute('data-target');
      if (isNaN(target)) {
        counterElement.classList.add('counted');
        return;
      }
      const duration = 2000;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      const increment = target / totalFrames;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          counterElement.innerText = target.toLocaleString();
          counterElement.classList.add('counted');
        } else {
          counterElement.innerText = Math.ceil(current).toLocaleString();
        }
      }, frameDuration);
    };

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="kohli-vintage-landing"> {/* Main wrapper for the page */}
      <div className="page-texture-overlay"></div> {/* From your Home.css vintage theme */}

      <div className="mouse-cursor-custom" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}>
        <div className="mouse-cursor-dot"></div>
      </div>

      {/* --- Hero Section --- */}
      <section
        id="prologue" // ID for navbar anchor link
        className="hero-section-vintage"
        style={{ backgroundImage: `url(${heroBgImage})` }}
        data-aos="fade-in" data-aos-duration="1800"
      >
        <div className="hero-film-grain-overlay"></div>
        <div className="hero-overlay-vintage"></div>
        {/* Ensure hero-content-parallax-vintage class is defined in Home.css if parallax is desired */}
        <div className="hero-content-vintage hero-content-parallax-vintage">
          <h1 className="hero-title-vintage" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1200">
            <span className="hero-title-char">V</span>IRAT
          </h1>
          <h2 className="hero-subtitle-vintage" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
            THE <span className="hero-subtitle-kohli-vintage">KING</span> REBORN
          </h2>
          <p className="hero-tagline-vintage" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">
            A Legacy Etched in Time. An Icon Unmatched.
          </p>
          <div className="hero-signature-wrapper-vintage" data-aos="zoom-in" data-aos-delay="900" data-aos-duration="1000">
            <img
              src={kohliSignature}
              alt="Virat Kohli Signature"
              className="hero-signature-vintage"
            />
          </div>
        </div>
        <div className="scroll-down-vintage" data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1000">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* --- Chapter I: The Overture --- */}
      {/* This section could also be the target for #prologue if preferred over the hero itself */}
      <section className="vintage-section chapter-overture" data-aos-offset="100">
        <div className="container vintage-container">
          <h2 className="vintage-section-title" data-aos="fade-up" data-aos-delay="100">
            Chapter I <span className="title-decorative-flourish"></span> The Overture
          </h2>
          <div className="vintage-divider" data-aos="zoom-in-right" data-aos-delay="200"></div>
          <p className="vintage-intro-text" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            Enter the hallowed halls of cricketing royalty. This archival record is dedicated to the unparalleled journey of Virat Kohli – a name synonymous with passion, precision, and the relentless pursuit of greatness. Herein lies the legend, retold for generations.
          </p>
        </div>
      </section>

      {/* --- Chapter II: The Ascent (Genesis) --- */}
      {/* This could be your #about-section target if it's the main about content on homepage */}
      <section id="about-section" className="vintage-section chapter-genesis" data-aos-offset="100">
        <div className="container vintage-container">
          <h2 className="vintage-section-title alt" data-aos="fade-up" data-aos-delay="100">
            Chapter II <span className="title-decorative-flourish"></span> The Ascent
          </h2>
          <div className="vintage-divider alt" data-aos="zoom-in-left" data-aos-delay="200"></div>
          <div className="vintage-content-row" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
            <div className="vintage-text-block" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
              <h3>From Humble Beginnings</h3>
              <p>The streets of Delhi whispered his name long before the world roared it. A young prodigy, Virat Kohli's raw talent was undeniable, his hunger insatiable. Captaining India to U-19 World Cup glory in '08 was but a prelude to the symphony of records he was destined to compose. His formative years were a crucible, forging the steely resolve that would define his career.</p>
              <p>His bold demeanor, a fierce counterpoint to the era's stoicism, became his emblem. He didn't just play the game; he seized it, ready to etch his mark upon its annals with an audacity that was both breathtaking and inspiring.</p>
            </div>
            <div className="vintage-image-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
              <div className="vintage-image-frame">
                <img src={kohliYoung} alt="Young Virat Kohli" className="vintage-image with-grain"/>
              </div>
              <span className="image-caption-vintage" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">The Making of a Monarch, circa 2008</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Chapter III: The Legend (Legacy) --- */}
      <section className="vintage-section chapter-legacy dark-bg-vintage" data-aos-offset="100">
        <div className="container vintage-container">
          <h2 className="vintage-section-title" data-aos="fade-up" data-aos-delay="100">
            Chapter III <span className="title-decorative-flourish"></span> The Legend Forged
          </h2>
          <div className="vintage-divider" data-aos="zoom-in-right" data-aos-delay="200"></div>
          <div className="vintage-content-row alt-row" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
            <div className="vintage-image-block" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
              <div className="vintage-image-frame decorative">
                <img src={kohliProfile1} alt="Virat Kohli - The Legend" className="vintage-image with-grain"/>
              </div>
              <span className="image-caption-vintage" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">An Icon Etched in Time</span>
            </div>
            <div className="vintage-text-block" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
              <h3>The Modern Maestro</h3>
              <p>Virat Kohli's name resonates through cricketing history – a testament to unparalleled skill, unwavering grit, and a voracious appetite for triumph. More than a cricketer, he stands as a colossus, a leader who reshaped modern batting with his audacious flair and formidable consistency. His presence on the field became a spectacle, his bat, a conductor's baton orchestrating masterpieces.</p>
              <p>Each perfectly timed cover drive, each thunderous roar of celebration, each shattered record – they all narrate the epic of a man who chased flawlessness and ignited the dreams of a billion souls. This is the chronicle of the King, a narrative of relentless ambition and unparalleled achievement. His legacy is not just in numbers, but in the indomitable spirit he brought to every contest.</p>
              {/* Example: Link to the /about page if you want a CTA here */}
              {/* <Link to="/about" className="vintage-cta-button" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                Read Full Biography
              </Link> */}
               <a href="/about" className="vintage-cta-button" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                Read Full Biography
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Chapter IV: The Arsenal (Playing Style) --- */}
      <section className="vintage-section chapter-arsenal" data-aos-offset="100">
        <div className="container vintage-container">
          <h2 className="vintage-section-title alt" data-aos="fade-up" data-aos-delay="100">
            Chapter IV <span className="title-decorative-flourish"></span> The King's Arsenal
          </h2>
          <div className="vintage-divider alt" data-aos="zoom-in-left" data-aos-delay="200"></div>
          <div className="arsenal-cards-vintage">
            <div className="arsenal-card-vintage" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
              <div className="arsenal-icon-vintage"><img src={coverDriveIcon} alt="Cover Drive" /></div>
              <h4>The Regal Cover Drive</h4>
              <p>An emblem of grace and power, dissecting the field with aristocratic disdain. A timeless classic.</p>
            </div>
            <div className="arsenal-card-vintage" data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">
              <div className="arsenal-icon-vintage"><img src={flickIcon} alt="Flick Shot" /></div>
              <h4>The Rapier Flick</h4>
              <p>Wrists of tempered steel, dispatching deliveries with effortless, lethal precision. Pure artistry.</p>
            </div>
            <div className="arsenal-card-vintage" data-aos="fade-up" data-aos-delay="400" data-aos-duration="700">
              <div className="arsenal-icon-vintage"><img src={pullShotIcon} alt="Pull Shot" /></div>
              <h4>The Punishing Pull</h4>
              <p>A brutal response to aggression, sending the ball soaring with imperious command. Dominance personified.</p>
            </div>
             <div className="arsenal-card-vintage" data-aos="fade-up" data-aos-delay="500" data-aos-duration="700">
              <div className="arsenal-icon-vintage"><img src={runningIcon} alt="Running" /></div>
              <h4>The Tireless Engine</h4>
              <p>Relentless hustle between the wickets, turning ones into twos, a testament to supreme fitness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Chapter V: By The Numbers (Milestones) --- */}
      <section id="achievements-section" className="vintage-section chapter-records dark-bg-vintage" data-aos-offset="100">
        <div className="container vintage-container">
            <h2 className="vintage-section-title" data-aos="fade-up" data-aos-delay="100">Chapter V <span className="title-decorative-flourish"></span> By The Numbers</h2>
            <div className="vintage-divider" data-aos="zoom-in-right" data-aos-delay="200"></div>
            <div className="milestones-ledger-vintage" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
                <div className="milestone-entry-vintage" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="vintage-counter number" data-target="80">0</h3>
                    <p className="label">International Centuries</p>
                </div>
                <div className="milestone-entry-vintage" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="vintage-counter number" data-target="26753">0</h3>
                    <p className="label">International Runs</p>
                </div>
                <div className="milestone-entry-vintage" data-aos="fade-up" data-aos-delay="300">
                    <h3 className="vintage-counter text-stat">India's Most</h3>
                    <p className="label">Successful Test Captain</p>
                </div>
                 <div className="milestone-entry-vintage" data-aos="fade-up" data-aos-delay="400">
                    <h3 className="vintage-counter text-stat">Only Batsman</h3>
                    <p className="label">To Average 50+ Across All Formats</p>
                </div>
            </div>
            <div className="vintage-image-block centered-image record-image" data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="1000">
                <div className="vintage-image-frame">
                    <img src={kohliRecord} alt="Kohli with Trophies" className="vintage-image with-grain"/>
                </div>
                <span className="image-caption-vintage" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">A Collection of Conquests & Milestones</span>
            </div>
        </div>
      </section>

      {/* --- Chapter VI: The Unyielding Spirit (Chase Master & Passion) --- */}
      <section className="vintage-section chapter-spirit" data-aos-offset="100">
        <div className="container vintage-container">
            <h2 className="vintage-section-title alt" data-aos="fade-up" data-aos-delay="100">Chapter VI <span className="title-decorative-flourish"></span> The Unyielding Spirit</h2>
            <div className="vintage-divider alt" data-aos="zoom-in-left" data-aos-delay="200"></div>

            <div className="vintage-subsection" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
                <h3 className="vintage-subsection-title" data-aos="fade-right" data-aos-delay="100">The Chase Master</h3>
                 <div className="vintage-content-row">
                    <div className="vintage-image-block" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                        <div className="vintage-image-frame">
                            <img src={kohliAction1} alt="Kohli, The Chase Master" className="vintage-image with-grain"/>
                        </div>
                        <span className="image-caption-vintage" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">Nerves of Steel</span>
                    </div>
                    <div className="vintage-text-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        <p>When the shadows of improbability lengthen and victory appears but a fleeting mirage upon a distant shore, one indomitable figure stands forth – a beacon against the encroaching gloom. Virat Kohli, the undisputed Sovereign of the Chase, possesses an almost preternatural ability to transform the most daunting of pursuits into breathtaking exhibitions of calculated aggression, unwavering resolve, and sheer, unadulterated genius. He does not merely accumulate runs; with the focus of a grandmaster and the heart of a gladiator, he meticulously dissects towering totals, orchestrating the seemingly impossible, bending the arc of the game to his inexorable will. Under his command, pressure becomes a crucible, forging moments of incandescent brilliance that etch themselves into the annals of cricketing lore.</p>
                        <q className="vintage-quote">"He thrives when the hunt is on, dismantling targets with the precision of a seasoned strategist and the heart of a lion."</q>
                    </div>
                </div>
            </div>

            <div className="vintage-spacer" data-aos="zoom-in" data-aos-duration="600"></div>

            <div className="vintage-subsection" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
                <h3 className="vintage-subsection-title" data-aos="fade-left" data-aos-delay="100">Heart of a Warrior</h3>
                <div className="vintage-content-row alt-row">
                     <div className="vintage-text-block" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                        <p>To watch Kohli is to witness passion personified. His on-field intensity, the fiery glares, the exuberant celebrations – these are not mere theatrics but the raw, untamed spirit of a warrior who battles for every inch, for every run, for the pride of his colours. This fire is his fuel, his intimidation, his very essence.</p>
                        <q className="vintage-quote">"Every game a crusade, every moment a chance to assert dominance. His spirit is as legendary as his skill."</q>
                    </div>
                    <div className="vintage-image-block" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                        <div className="vintage-image-frame circular">
                            <img src={kohliAggression} alt="Kohli's Aggression" className="vintage-image with-grain"/>
                        </div>
                        <span className="image-caption-vintage" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">The Roaring Flame</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- Chapter VII: A Glimpse of Glory (Iconic Moments Gallery) --- */}
      <section id="gallery-section" className="vintage-section chapter-gallery dark-bg-vintage" data-aos-offset="100">
        <div className="container vintage-container">
          <h2 className="vintage-section-title" data-aos="fade-up" data-aos-delay="100">
            Chapter VII <span className="title-decorative-flourish"></span> Glimpses of Glory
          </h2>
          <div className="vintage-divider" data-aos="zoom-in-right" data-aos-delay="200"></div>
          <div className="gallery-grid-vintage" data-aos="fade-up" data-aos-delay="250" data-aos-duration="800">
            {[kohliAction2, kohliTrophy, kohliLeader, kohliTraining, kohliSmile, kohliVintagePic].map((imgSrc, index) => (
              <div className="gallery-item-vintage" key={index} data-aos="zoom-in-up" data-aos-delay={`${index * 100}`} data-aos-duration="700">
                <img src={imgSrc} alt={`Iconic Moment ${index + 1}`} className="gallery-image-vintage with-grain"/>
                <div className="gallery-overlay-vintage">
                  <span className="gallery-text-vintage">LEGENDARY</span>
                </div>
              </div>
            ))}
          </div>
          {/* Example: Link to a dedicated gallery page if you create one */}
          {/* <Link to="/gallery-full" className="vintage-cta-button outline" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            View The Full Archive
          </Link> */}
          <a href="/gallery" className="vintage-cta-button outline" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            View The Full Archive
          </a>
        </div>
      </section>

      {/* --- Chapter VIII: Beyond the Crease (Off-field) --- */}
      <section className="vintage-section chapter-beyond" data-aos-offset="100">
        <div className="container vintage-container">
            <h2 className="vintage-section-title alt" data-aos="fade-up" data-aos-delay="100">Chapter VIII <span className="title-decorative-flourish"></span> Beyond the Crease</h2>
            <div className="vintage-divider alt" data-aos="zoom-in-left" data-aos-delay="200"></div>
            <div className="vintage-content-row" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
                <div className="vintage-text-block" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                    <h3>The Statesman, The Philanthropist</h3>
                    <p>The measure of the man extends far beyond the 22 yards. Virat Kohli's dedication to peak physical conditioning has set new benchmarks in global sport. His entrepreneurial ventures reveal a keen intellect, while the Virat Kohli Foundation underscores a deep-seated commitment to uplifting society, particularly championing children's welfare.</p>
                    <p>A fashion icon, a fitness guru, and a beacon for aspiring athletes, his influence transcends cricket, embodying the virtues of discipline, ambition, and a profound sense of responsibility to the world that adores him.</p>
                </div>
                <div className="vintage-image-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                    <div className="vintage-image-frame decorative-alt">
                        <img src={kohliProfile1} alt="Virat Kohli off-field" className="vintage-image with-grain"/>
                    </div>
                    <span className="image-caption-vintage" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">A Man of Many Facets</span>
                </div>
            </div>
        </div>
      </section>

      {/* --- NEW: Inspirational Quote Section (Example) --- */}
      <section id="quotes-section" className="vintage-section chapter-quotes dark-bg-vintage" data-aos="fade-up" data-aos-offset="100">
        <div className="container vintage-container">
          <h2 className="vintage-section-title" data-aos="fade-up">
            Chapter IX <span className="title-decorative-flourish"></span> Words of Wisdom
          </h2>
          <div className="vintage-divider" data-aos="zoom-in-right"></div>
          <div className="quotes-container-home" data-aos="fade-up" data-aos-delay="200">
            <blockquote className="vintage-inspirational-quote-home">
              <p>"Self-belief and hard work will always earn you success."</p>
              <footer>- Virat Kohli</footer>
            </blockquote>
            <blockquote className="vintage-inspirational-quote-home" data-aos="fade-up" data-aos-delay="100">
              <p>"I like to be myself, and I don't pretend. For instance, I don't dress up for occasions; I am what I am."</p>
              <footer>- Virat Kohli</footer>
            </blockquote>
            <blockquote className="vintage-inspirational-quote-home" data-aos="fade-up" data-aos-delay="200">
                <p>"The bat is not a toy, it's a weapon. It gives me the ability to achieve something extraordinary."</p>
                <footer>- Virat Kohli</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;