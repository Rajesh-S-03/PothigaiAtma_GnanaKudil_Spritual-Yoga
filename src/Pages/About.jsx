import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import Navbar from "../Components/HomePageComponents/Navbar";
import aboutVideo from "../assets/NATURAL VIDEO.mp4";

import founder1 from "../assets/vamuskarh.jpeg";
import founder2 from "../assets/vamuskarh.jpeg";
import founder3 from "../assets/vamuskarh.jpeg";
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

  // =====================================================
  // VIDEO PLAY / PAUSE
  // =====================================================
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* <Navbar /> */}

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

          <h2>Inside Amirthalogam</h2>

          <p>
            Amirthalogam - Spirtuality, Education & Social Services.
            <br></br>
            Amirthalogam Spirtual Practices, Social Welfare Centre, Pothigai Atma Gnana Kudil, Amirtheswarar IAS Academy & Nature Kingdom.
          </p>

        </div>

        <div className="video-container">

          <video
            ref={videoRef}
            src={aboutVideo}
            className="about-video"
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClick={handlePlayPause}
          >
            Your browser does not support the video tag.
          </video>

          <button
            className="video-play-btn"
            onClick={handlePlayPause}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>

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

          <h2 translate="no">Thiru.Vamuskar Ayya (திரு.வமுஸ்கர் அய்யா)</h2>

          <div className="founder-line"></div>

          <p translate="no">
            Thiru.Vamuskar Ayya founded Amirthalogam with
            the vision of helping people discover inner peace,
            spiritual wisdom, and a life filled with compassion.
            Through Yoga, Meditation,Education,Spirtual Practices and selfless services, the
            organization continues to inspire individuals of all ages.
            <br></br>
            One of our kudil's Devotee  dedicated a Tamil Venba to Thiru Vamuskar Ayya as a birthday wish.
            <br></br>

ஓம் ஸ்ரீ குருவே சரணம்
<br></br>

வமுசுகர் ஐயாவிற்கு இனிய பிறந்தநாள் வெண்பா வாழ்த்து
<br></br>

மத்தளம் பாறையில் மாதவன் ஆசிபெற்று சித்தர்கள் ஆட்சி செகத்தில் உதித்திட ஞானக் குடில்மூலம் ஞானத்தைப் போதிக்கும் ஞானி வமுசுகரை நாடு

இறையுள் உணர்த்தும் இயற்கை பயிற்சி மறைபொருள் நீக்கி மனுக்கள் சிறக்க கனிவுடன் ஈந்து கரைசேர அருளும் அணியீசன் மைந்தனின் அன்பு

இயற்கை வழியில் இறையருள் சேர செயற்கை விடுத்து செகமுமே மாறநல் வையகம் தோன்றவே வாழ்க்கை சிறந்திட ஐயன் வமுசுகர் வாழி

வமுசுகர் ஐயா அறம் பொருள் இன்பம் வீடுபேறு பெற்று நலமும் வளமும் நாளும் பெற்று நாயகனாய் வாழ இனிய பிறந்தநாள் வாழ்த்துகள் வாழ்க பல்லாண்டு வாழ்க வளமோடு !!

ஓம் ஸ்ரீ அகத்தீசாய நமோ நமஹா...

By_Rama Nachiyappan ayya
          </p>

          <div className="founder-points">

            <div>✓ Founder of Amithalogam & Pothigai Atma Gnana Kudil</div>

            <div>✓ Spiritual Teacher & Guide</div>

            <div>✓ Yoga & Meditation Mentor</div>

            <div>✓ Dedicated to Community Service</div>

          </div>
        <a
        style={{
  display: "inline-block",
  marginTop: "30px",
}}
  href="https://atmagnanakudil.blogspot.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  click here to explore detail
</a>
        </div>
      </section>

      <Ac1 />
    </>
  );
};

export default About;
