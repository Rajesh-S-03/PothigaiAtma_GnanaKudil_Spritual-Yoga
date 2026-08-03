import React from "react";
import "./TC1.css";
import Navbar from "../HomePageComponents/Navbar";
import { HashLink } from "react-router-hash-link";

import panjapootha from '../../assets/panjapoothaimg.jpg'
const trainings = [
  {
    id: 1,
    title: "Pancha Bhootha Amirtha Prayogam",
    image: panjapootha,
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    description:
      "Pancha Bhootha Amirtha Prayogam is a holistic spiritual practice that harmonizes the five natural elements—Earth, Water, Fire, Air, and Space—within the human body. This training helps participants reconnect with nature while improving physical vitality, emotional stability, and spiritual awareness.",

    benefits: [
      "Balances the five natural elements of the body.",
      "Promotes inner peace and emotional stability.",
      "Enhances physical vitality and immunity.",
      "Supports meditation and spiritual growth."
    ]
  },

  {
    id: 2,
    title: "Surya Kala Training",
    image: "/images/surya.jpg",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    description:
      "Surya Kala Training focuses on utilizing the positive energy of the sun to increase confidence, vitality, and mental strength. It combines breathing techniques, concentration, and energy practices for a healthy and balanced lifestyle.",

    benefits: [
      "Improves confidence and enthusiasm.",
      "Boosts physical energy.",
      "Strengthens concentration.",
      "Encourages a positive mindset."
    ]
  },

  {
    id: 3,
    title: "Chandra Kala Training",
    image: "/images/chandra.jpg",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    description:
      "Chandra Kala Training utilizes the calming energy associated with the moon to relax the mind and body. This practice is ideal for reducing stress, improving emotional balance, and enhancing mental clarity.",

    benefits: [
      "Reduces stress and anxiety.",
      "Improves emotional balance.",
      "Supports better sleep.",
      "Creates mental peace."
    ]
  },

  {
    id: 4,
    title: "Nadantha Training",
    image: "/images/nada.jpg",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    description:
      "Nadantha Training is based on sacred sound vibrations that improve concentration, meditation, and self-awareness. Participants experience deep relaxation through spiritual sound practices.",

    benefits: [
      "Improves concentration.",
      "Supports deep meditation.",
      "Enhances inner awareness.",
      "Creates mental calmness."
    ]
  },

  {
    id: 5,
    title: "Numerology Training",
    image: "/images/numerology.jpg",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    description:
      "Numerology Training explains the spiritual significance of numbers and how they influence personality, relationships, and important life decisions. It helps participants gain better self-understanding.",

    benefits: [
      "Improves self-awareness.",
      "Supports better decision making.",
      "Understands life patterns.",
      "Develops confidence."
    ]
  },
  {
  id: 6,
  title: "Chakra Awakening Training",
  image: "/images/chakra.jpg",
  video: "https://www.youtube.com/embed/ysz5S6PUM-U",
  description:
    "Chakra Awakening Training focuses on activating and balancing the seven primary energy centers of the body. Through guided meditation, breathing techniques, and spiritual practices, participants experience improved physical health, emotional stability, and spiritual awareness.",

  benefits: [
    "Balances the body's energy centers.",
    "Enhances emotional stability.",
    "Supports spiritual growth and awareness.",
    "Promotes inner harmony and peace."
  ]
},

{
  id: 7,
  title: "Uyir Chakra (Life Energy) Training",
  image: "/images/uyirchakra.jpg",
  video: "https://www.youtube.com/embed/ysz5S6PUM-U",
  description:
    "Uyir Chakra Training strengthens the body's life-force energy through specialized breathing, meditation, and energy activation techniques. It helps improve vitality, focus, and overall well-being while supporting a healthier lifestyle.",

  benefits: [
    "Boosts life-force energy.",
    "Improves physical vitality.",
    "Enhances concentration and focus.",
    "Supports overall wellness."
  ]
},

{
  id: 8,
  title: "Surya Kantha Amirtha Prayogam",
  image: "/images/suryakantha.jpg",
  video: "https://www.youtube.com/embed/ysz5S6PUM-U",
  description:
    "Surya Kantha Amirtha Prayogam is a spiritual practice that channels the positive magnetic energy of the sun to energize the body and mind. It promotes confidence, vitality, and a positive approach to everyday life.",

  benefits: [
    "Increases physical energy.",
    "Builds confidence and courage.",
    "Promotes positive thinking.",
    "Supports overall health and vitality."
  ]
},

{
  id: 9,
  title: "Chandra Kantha Amirtha Prayogam",
  image: "/images/chandrakantha.jpg",
  video: "https://www.youtube.com/embed/ysz5S6PUM-U",
  description:
    "Chandra Kantha Amirtha Prayogam utilizes the calming magnetic energy of the moon to create mental relaxation, emotional balance, and inner peace. It is especially beneficial for stress relief and meditation.",

  benefits: [
    "Relieves stress and anxiety.",
    "Improves emotional balance.",
    "Encourages restful sleep.",
    "Deepens meditation practice."
  ]
},

{
  id: 10,
  title: "Mangala Kantha Amirtha Prayogam",
  image: "/images/mangalakantha.jpg",
  video: "https://www.youtube.com/embed/ysz5S6PUM-U",
  description:
    "Mangala Kantha Amirtha Prayogam is designed to strengthen determination, courage, and self-confidence through focused spiritual practices. It helps participants face life's challenges with greater resilience and inner strength.",

  benefits: [
    "Builds courage and confidence.",
    "Strengthens mental resilience.",
    "Improves decision-making ability.",
    "Encourages personal growth."
  ]
},
];

const TC1 = () => {
  return (
    <>
    <Navbar/>
    <section className="training-page">

      <div className="training-hero">
        <h1>Training Programs</h1>

        <p>
          Pothigai Atma Gnana Kudil offers spiritual and wellness training
          programs designed to improve physical health, mental peace,
          self-awareness, and holistic living through yoga, meditation,
          breathing practices, and value-based education.
        </p>
      </div>

<div className="training-wrapper">

  {trainings.map((item, index) => (

    <div
      className={`training-row ${
        index % 2 === 0 ? "normal" : "reverse"
      }`}
      key={item.id}
    >

      <div className="training-content">

        <span className="program-count">
          Program {item.id}
        </span>

        <h2>{item.title}</h2>

        <p>{item.description}</p>

        <h4>Key Benefits</h4>

        <ul>
          {item.benefits.map((benefit, i) => (
            <li key={i}>✔ {benefit}</li>
          ))}
        </ul>

      </div>

      <div className="training-media">

        <img
          src={item.image}
          alt={item.title}
        />

        <iframe
          src={item.video}
          title={item.title}
          allowFullScreen
        ></iframe>

      </div>

    </div>

  ))}

</div>
{/* Explore More Section */}

<section className="more-programs">

  <div className="more-programs-content">

    <span className="more-tag" >
   🔥 Unlock More Spiritual Programs
</span>

    <h2>
      Discover Many More Spiritual & Wellness Programs
    </h2>

    <p>
      Pothigai Atma Gnana Kudil offers many additional training programs
      designed to support holistic well-being, spiritual growth, self-awareness,
      meditation, yoga, energy practices, and a balanced lifestyle.
      Join us to explore these unique learning experiences and begin your
      journey toward inner peace.
    </p>
<div className="more-btns">

  <a href="#register" className="explore-btn">
    Explore More Programs to Transform Your Lifestyle →
  </a>
<HashLink smooth to="/#register" className="register-btn">
  ✨ Register Now
</HashLink>

</div>

  </div>

</section>
    </section>
    <footer className="footer">

  <div className="footer-content">

    <p>
      © {new Date().getFullYear()} Pothigai Atma Gnana Kudil.
      All Rights Reserved.
    </p>

    <a href="mailto:info@pothigaiatma.org">
      ✉ info@pothigaiatma.org
    </a>

  </div>

</footer>

    </>
  );
};

export default TC1;