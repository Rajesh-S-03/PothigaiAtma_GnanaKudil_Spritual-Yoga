import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React from "react";
import "./Hcontent2.css";

import panchaboothaImg from "../../assets/panjapoothaimg1.jpg";
import suryaImg from "../../assets/yoga4.png";
import chandraImg from "../../assets/y1.jpg";
import nadhaanthaImg from "../../assets/nanthanaa.png";
import aadharaImg from "../../assets/y.jpg";
import uyirImg from "../../assets/yuirchaka.jpg";

// online class images

import onlineTrainingImg1 from "../../assets/panjapoothaimg.jpg";
import onlineTrainingImg2 from "../../assets/panjapoothaimg.jpg";
import onlineTrainingImg3 from "../../assets/panjapoothaimg.jpg";
import Hcontent3 from "./Hcontent3";

const Hcontent2 = () => {
  const trainingPrograms = [
    {
      title: "Panchabootha Amirtha Yoga",
      category: "Spiritual Wellness Practice",
      description:
        "A guided practice inspired by the five elements of nature, helping participants develop balance, energy, and inner harmony.",
      image: panchaboothaImg,
    },
    {
      title: "Surya Kala Training",
      category: "Energy & Discipline",
      description:
        "A focused training program that encourages positive energy, discipline, clarity, and a stronger daily spiritual routine.",
      image: suryaImg,
    },
    {
      title: "Chandra Kala Training",
      category: "Peace & Emotional Balance",
      description:
        "A calming practice that supports peaceful thinking, emotional balance, self-awareness, and inner stillness.",
      image: chandraImg,
    },
    {
      title: "Nadhaantha Training",
      category: "Inner Awareness Practice",
      description:
        "A spiritual training program that helps participants develop awareness through focused practice and inner reflection.",
      image: nadhaanthaImg,
    },
    {
      title: "Aadhara Chakra Training",
      category: "Energy Centre Awareness",
      description:
        "A guided program that supports understanding of inner energy centres and the development of personal awareness.",
      image: aadharaImg,
    },
    {
      title: "Uyir Chakra Training",
      category: "Life Energy Practice",
      description:
        "A mindful practice designed to support life energy, spiritual growth, and a deeper connection with oneself.",
      image: uyirImg,
    },
  ];

  return (
    <>
    <section className="training-section" id="training-programs">
      <div className="training-heading">
        <span>Trainings & Programs</span>

        <h2>Discover the Path to Inner Growth</h2>

        <p>
          Pothigai Atma Gnana Kudil offers spiritual training programs that
          guide individuals towards peace, discipline, self-awareness, and a
          balanced way of life.
        </p>

        <div className="heading-line"></div>
      </div>

      <div className="training-grid">
        {trainingPrograms.map((program) => (
          <article className="training-card" key={program.title}>
            <img
              src={program.image}
              alt={program.title}
              className="training-card-image"
            />

            <div className="training-overlay"></div>

            <div className="training-card-content">
              {/* <span>{program.category}</span> */}

              <h3>{program.title}</h3>

              <div className="training-line"></div>

              <p>{program.description}</p>
            </div>
          </article>
        ))}
      </div>

<Link to="/trainings" className="more-programs-btn">
  Explore More Spiritual Programs
  <span>→</span>
</Link>
    </section>
    <div className="online-programs-heading">
  <span>Learn From Anywhere</span>

  <h2>Online Spiritual Programs</h2>

  <p>
    Continue your spiritual journey from the comfort of your home through
    guided online sessions, meditation practices, prayer, and meaningful
    spiritual learning.
  </p>

  <div className="online-heading-line"></div>
</div>
    <section className="online-training-section">
  <div className="online-training-visual">
    <div className="online-main-image">
      <img src={onlineTrainingImg1} alt="Online spiritual training session" />
    </div>

    <div className="online-small-image online-small-image-one">
      <img src={onlineTrainingImg2} alt="Online training participants" />
    </div>

    <div className="online-small-image online-small-image-two">
      <img src={onlineTrainingImg3} alt="Online spiritual class" />
    </div>

    <div className="online-live-badge">
      <span></span>
      LIVE ONLINE
    </div>
  </div>

  <div className="online-training-content">
    <span className="online-label">Learn From Anywhere</span>

    <h2>Online Spiritual Training Programs</h2>

    <div className="online-title-line"></div>

    <p>
      Pothigai Atma Gnana Kudil conducts online spiritual training sessions
      for people who wish to continue their inner-growth journey from home.
      Through guided classes, prayer, meditation, and spiritual discussions,
      participants can stay connected from anywhere.
    </p>

    <div className="online-training-points">
      <div>
        <strong>01</strong>
        <span>Live guided spiritual sessions</span>
      </div>

      <div>
        <strong>02</strong>
        <span>Prayer, meditation and self-awareness practice</span>
      </div>

      <div>
        <strong>03</strong>
        <span>Join through online meeting platforms</span>
      </div>
    </div>

<HashLink
  smooth
  to="#register"
  className="online-training-btn"
  style={{ textDecoration: "none" }}
>
  Join an Online Training <span>→</span>
</HashLink>  
  </div>
</section>
<Hcontent3/>
</>
  );
};

export default Hcontent2;