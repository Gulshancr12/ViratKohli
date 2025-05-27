import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css'; // Specific CSS for this About page

// --- USING YOUR PROVIDED IMAGE IMPORTS ---
import heroBgImage from '../../assets/kohli-hero-bg.jpg';
import kohliProfile1 from '../../assets/kohli-profile-1.jpg';
import kohliYoung from '../../assets/kohli-young.jpg';
import kohliLeader from '../../assets/kohli-leader.jpg';
import kohliVintagePic from '../../assets/kohli-vintage.jpg';

// Arsenal icons and kohliSignature are not directly used on this About page content,
// but kohliSignature will be used by the imported Footer component.

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      delay: 100,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="about-page-vintage">
        <div className="page-texture-overlay"></div>

        <header
          className="about-hero-vintage"
          style={{ backgroundImage: `url(${heroBgImage})` }}
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="about-hero-overlay"></div>
          <div className="container vintage-container">
            <h1 className="about-hero-title" data-aos="fade-down" data-aos-delay="300">The Chronicle of a King</h1>
            <p className="about-hero-subtitle" data-aos="fade-up" data-aos-delay="500">
              An In-Depth Look at the Life and Legacy of Virat Kohli
            </p>
          </div>
        </header>

        <main className="about-content-vintage container vintage-container">
          <section className="about-section-item" data-aos="fade-up">
            <div className="vintage-image-block standout-image" data-aos="fade-right" data-aos-delay="200">
              <div className="vintage-image-frame">
                <img src={kohliProfile1} alt="Virat Kohli Portrait" className="vintage-image with-grain"/>
              </div>
              <span className="image-caption-vintage">Virat Kohli - A Modern Maestro</span>
            </div>
            <div className="vintage-text-block" data-aos="fade-left" data-aos-delay="100">
              <h2 className="vintage-section-title-small">An Enduring Legacy</h2>
              <div className="vintage-divider-small"></div>
              <p>Virat Kohli. A name that resonates beyond the boundaries of cricket, synonymous with unparalleled passion, relentless ambition, and a mastery of the willow that has captivated audiences worldwide. This chronicle delves into the journey of a man who not only conquered the cricketing world but also redefined the benchmarks of athleticism, leadership, and unwavering dedication.</p>
              <p>From the bustling streets of Delhi to the grandest amphitheatres of international sport, his story is one of meteoric rise, of overcoming adversity, and of etching an indelible mark on the fabric of the game. Join us as we explore the making of this modern-day legend.</p>
            </div>
          </section>

          <div className="vintage-spacer-page"></div>

          <section className="about-section-item alt-row" data-aos="fade-up">
            <div className="vintage-text-block" data-aos="fade-right" data-aos-delay="100">
              <h2 className="vintage-section-title-small alt-color">The Prodigy's Promise</h2>
              <div className="vintage-divider-small alt-color"></div>
              <p>Born on November 5, 1988, in Delhi, Virat Kohli's tryst with cricket began at a tender age. His prodigious talent was evident early, marked by an innate aggression and an unyielding hunger for runs. He swiftly rose through the age-group ranks, honing his craft with a discipline that belied his years. The pivotal moment of his youth came in 2008, when he captained the Indian U-19 team to World Cup glory, announcing his arrival on the global stage as a future leader and a batting powerhouse.</p>
              <p>His transition to senior international cricket was seamless, characterized by an audacious self-belief and a remarkable ability to perform under pressure. The early years were a testament to his adaptability and his relentless pursuit of improvement, laying the foundation for a career that would rewrite record books.</p>
            </div>
            <div className="vintage-image-block" data-aos="fade-left" data-aos-delay="200">
              <div className="vintage-image-frame">
                <img src={kohliYoung} alt="Virat Kohli Early Career" className="vintage-image with-grain"/>
              </div>
              <span className="image-caption-vintage">The Dawn of a New Era</span>
            </div>
          </section>

          <div className="vintage-spacer-page"></div>

          <section className="about-section-item" data-aos="fade-up">
            <div className="vintage-image-block standout-image" data-aos="fade-right" data-aos-delay="200">
              <div className="vintage-image-frame decorative">
                <img src={kohliLeader} alt="Virat Kohli as Captain" className="vintage-image with-grain"/>
              </div>
              <span className="image-caption-vintage">Leading from the Front</span>
            </div>
            <div className="vintage-text-block" data-aos="fade-left" data-aos-delay="100">
              <h2 className="vintage-section-title-small">The Captain's Mantle</h2>
              <div className="vintage-divider-small"></div>
              <p>Assuming the captaincy of the Indian cricket team across all formats was a natural progression for a player of Kohli's stature and influence. His leadership was characterized by an aggressive, front-foot approach, instilling a fearless brand of cricket within the team. Under his stewardship, India achieved unprecedented success, particularly in Test cricket, scaling new heights and dominating opponents both at home and overseas.</p>
              <p>Kohli's captaincy was not just about tactical acumen; it was about leading by example, setting formidable standards of fitness, and fostering a culture of unwavering commitment. He transformed the Indian team into a formidable force, a testament to his vision and his ability to inspire those around him to strive for greatness.</p>
            </div>
          </section>

          <div className="vintage-spacer-page"></div>

          <section className="about-section-item alt-row" data-aos="fade-up">
            <div className="vintage-text-block" data-aos="fade-right" data-aos-delay="100">
              <h2 className="vintage-section-title-small alt-color">Moments that Defined a Monarch</h2>
              <div className="vintage-divider-small alt-color"></div>
              <p>Virat Kohli's career is punctuated by a plethora of unforgettable moments – record-shattering centuries, improbable chase masterclasses, and displays of sheer batting artistry that have left spectators spellbound. From his monumental 133* against Sri Lanka in Hobart to his twin centuries in Adelaide, each knock has been a chapter in his epic saga.</p>
              <p>His legacy, however, extends beyond mere statistics. It's about the passion he brought to the game, the intensity in his eyes, the roar that echoed a billion aspirations. He inspired a generation to believe, to strive, and to wear their heart on their sleeve. The "King" is not just a title; it's an embodiment of cricketing excellence and an indomitable spirit that will continue to inspire for decades to come.</p>
               <q className="vintage-quote-page">"To be a part of his era was to witness cricketing history unfold, one magnificent stroke at a time."</q>
            </div>
             <div className="vintage-image-block" data-aos="fade-left" data-aos-delay="200">
              <div className="vintage-image-frame">
                <img src={kohliVintagePic} alt="Defining Moment in Kohli's Career" className="vintage-image with-grain"/>
              </div>
              <span className="image-caption-vintage">A Legacy Forged in Fire and Glory</span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;