import React, { useState, useEffect } from "react";
import "./About.css";
import Navbar from "../Components/HomePageComponents/Navbar";

import founder1 from "../assets/vamuskar.jpeg";
import founder2 from "../assets/vamuskar.jpeg";
import founder3 from "../assets/vamuskar.jpeg";
import Ac1 from "../Components/AboutPageComponents/Ac1";

const About = () => {

const founderImages = [founder1, founder2, founder3];

const [currentFounder, setCurrentFounder] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentFounder((prev) => (prev + 1) % founderImages.length);
  }, 3500);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      {/* <section className="about-hero">
        <div className="about-overlay"></div>

        <div className="about-container">
          <span className="about-tag">
            About Pothigai Atma Gnana Kudil
          </span>

          <h1>
            Discover the Path to
            <br />
            Inner Peace & Spiritual Awakening
          </h1>

          <div className="about-line"></div>

          <p>
            Pothigai Atma Gnana Kudil is a spiritual center dedicated to
            spreading peace, self-awareness, yoga, meditation, and
            compassionate service. Through spiritual guidance and community
            programs, we help individuals cultivate a balanced, meaningful,
            and joyful life.
          </p>

          <a href="#video" className="about-btn">
            Watch Our Journey →
          </a>
        </div>

        <div className="floating-circle circle1"></div>
        <div className="floating-circle circle2"></div>
      </section> */}

      {/* Video */}
      <section className="about-video-section" id="video">

        <div className="video-heading">

          <span>Experience Our Spiritual Journey</span>

          <h2>Inside Pothigai Atma Gnana Kudil</h2>

          <p>
            Take a glimpse into our peaceful surroundings, yoga sessions,
            meditation practices, and community activities.
          </p>

        </div>

        <div className="video-container">

          <iframe
            src="https://www.youtube.com/embed/2OEL4P1Rz04"
            title="Pothigai Atma Gnana Kudil"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

        </div>

      </section>
      <section className="founder-section">

    <div className="founder-image">

        <img
            src={founderImages[currentFounder]}
            alt="Founder"
        />

    </div>

    <div className="founder-content">

        <span>Our Spiritual Founder</span>

        <h2>Pothigai Siddhar</h2>

        <div className="founder-line"></div>

        <p>
            Pothigai Siddhar founded Pothigai Atma Gnana Kudil with
            the vision of helping people discover inner peace,
            spiritual wisdom, and a life filled with compassion.
            Through yoga, meditation, and selfless service, the
            organization continues to inspire individuals of all ages.
        </p>

        <div className="founder-points">

            <div>✓ Founder of Pothigai Atma Gnana Kudil</div>

            <div>✓ Spiritual Teacher & Guide</div>

            <div>✓ Yoga & Meditation Mentor</div>

            <div>✓ Dedicated to Community Service</div>

        </div>

    </div>

</section>
<Ac1/>
    </>
  );
};

export default About;