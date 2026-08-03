
import heroimg from '../assets/hero1.png';
import y1 from '../assets/yoga1.png';
import wave from '../assets/wave1.png'
import "./Home.css";
import Hcontent1 from "../Components/HomePageComponents/HContent1";
import Navbar from "../Components/HomePageComponents/Navbar";
import { Link } from 'react-router-dom';
import { useRef , useState} from "react";
import ohmAudio from "../assets/ohm_audio.mp3";



// import {
//   FaHeart,
//   FaLeaf,
//   FaPeopleGroup,
//   FaPersonPraying,
// } from "react-icons/fa6";


const Home = () => {
    
  
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudio = async () => {
  if (!audioRef.current) return;

  if (audioRef.current.paused) {
    await audioRef.current.play();
    setIsPlaying(true);
  } else {
    audioRef.current.pause();
    setIsPlaying(false);
  }
};  
  return (
    <div className="container">
      <Navbar/>  
      <section
  className="b-content"
  id="home"
  style={{ backgroundImage: `url(${heroimg})` }}
>
  <div className="hero-overlay"></div>

  <div className="hero-text">
    <p className="hero-subtitle">அமைதி • ஆன்மிகம் • நல்வாழ்வு</p>

    <h1>பொதிகை ஆத்ம ஞானக் குடில்</h1>

    <p>
      மன அமைதி, ஆன்மிக வளர்ச்சி மற்றும் சமூக நலனுக்கான
      ஒரு அமைதியான பயணம்.
    </p>
    <Link to="/about" className="hero-btn">மேலும் அறிய</Link>
  </div>
</section>

<section className="about-preview" id="">
  <div className="about-heading">
    <p className="section-tag">Yoga • Spirtuality • LifeStyle </p>

    <h2 style={{paddingTop:20}}>A Journey Towards Balance and Well-Being</h2>

    <p className="about-description" style={{paddingTop:20}}>
       Our purpose is to nurture peace of mind, physical well-being, and a
  balanced way of life through yoga, meditation, and spiritual guidance.
  Mindful movement, breathing practices, and meditation can support stress
  management, focus, emotional balance, better sleep, and healthy daily
  routines.
    </p>
  </div>
  <section className="wellness-section">
  {/* Left side - Wave background */}
  <div
    className="wellness-wave"
    style={{ backgroundImage: `url(${wave})` }}
  >
    <div className="wellness-wave-overlay"></div>

    <div className="wellness-wave-content">
      <p className="wave-tag">A Moment of Calm</p>

      <h2>Listen. Breathe. Feel Free.</h2>

      <p>
        Take a quiet pause with the soothing rhythm of waves, gentle breathing,
        and the peaceful energy of nature.
      </p>

        <button
  type="button"
  className="sound-btn"
  onClick={handleAudio}
>
  <span className="play-icon">
    {isPlaying ? "⏸" : "▶"}
  </span>

  <span>
    {isPlaying ? "Pause Nature Sounds" : "Play Nature Sounds"}
    <small>Relax • Breathe • Let Go</small>
  </span>
</button>
      
      <audio ref={audioRef}>
        <source src={ohmAudio} type="audio/mpeg" />
      </audio>
    </div>
  </div>

  {/* Right side - Yoga / Buddha content */}
  <div className="yoga-panel">
    <img src={y1} alt="Yoga and meditation" className="yoga-image" />

    <div className="yoga-content">
      <p className="benefits-tag">Yoga & Well-Being</p>

      <h2>Balance Your Body and Mind</h2>

      <p className="yoga-description">
        Yoga combines gentle movement, mindful breathing, and relaxation to
        support a calm, healthy, and balanced lifestyle.
      </p>

      <ul className="yoga-list">
        <li>Improves flexibility and posture</li>
        <li>Supports focus and stress management</li>
        <li>Encourages healthy breathing habits</li>
        <li>Promotes relaxation and better sleep</li>
      </ul>
    <Link to="/trainings" className="benefits-btn" > Explore Yoga Programs <span>→</span></Link>
    </div>
  </div>
</section>
</section>

<Hcontent1/>
    </div>
  );
};

export default Home;