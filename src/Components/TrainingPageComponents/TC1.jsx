import React from "react";
import "./TC1.css";
import Navbar from "../HomePageComponents/Navbar";
import { HashLink } from "react-router-hash-link";

import panjapootha from "../../assets/panchapoothaamirthayogam.jpeg";
import suryakala from "../../assets/sooryakalaimg.jpg";
import chandrakala from "../../assets/moonm.jpg";
import nandana from "../../assets/nanthanaa.png";
import numerology from "../../assets/numerology.jpg";
import chakra from "../../assets/y.jpg";
import uyirchakra from "../../assets/yuirchakra.jpg";
import suryakantha from "../../assets/suryakanthayogam.jpg";
import chandrakantha from "../../assets/chandrakantha.jpg";
import mangalakantha from "../../assets/mangalakantha.jpg";

import TC2 from "./TC2";

const trainings = [
  {
    id: 1,
    title: "Pancha Bhootha Amirtha Yogam",
    image: panjapootha,
    description:
      "Pancha Bhootha Amirtha Yogam is a holistic spiritual practice that harmonizes the five natural elements—Earth, Water, Fire, Air, and Space—within the human body. This training helps participants reconnect with nature while improving physical vitality, emotional stability, and spiritual awareness.",

    benefits: [
      "Balances the five natural elements of the body.",
      "Promotes inner peace and emotional stability.",
      "Enhances physical vitality and immunity.",
      "Supports meditation and spiritual growth.",
    ],
  },

  {
    id: 2,
    title: "Surya Kaala Training",
    image: suryakala,
    description:
      "Surya Kala Training focuses on utilizing the positive energy of the sun to increase confidence, vitality, and mental strength. It combines breathing techniques, concentration, and energy practices for a healthy and balanced lifestyle.",

    benefits: [
      "Improves confidence and enthusiasm.",
      "Boosts physical energy.",
      "Strengthens concentration.",
      "Encourages a positive mindset.",
    ],
  },

  {
    id: 3,
    title: "Chandra Kaala Training",
    image: chandrakala,
    description:
      "Chandra Kala Training utilizes the calming energy associated with the moon to relax the mind and body. This practice is ideal for reducing stress, improving emotional balance, and enhancing mental clarity.",

    benefits: [
      "Reduces stress and anxiety.",
      "Improves emotional balance.",
      "Supports better sleep.",
      "Creates mental peace.",
    ],
  },

  {
    id: 4,
    title: "Naadhaantha Training",
    image: nandana,
    description:
      "Naadhaantha  Training is based on sacred sound vibrations that improve concentration, meditation, and self-awareness. Participants experience deep relaxation through spiritual sound practices.",

    benefits: [
      "Improves concentration.",
      "Supports deep meditation.",
      "Enhances inner awareness.",
      "Creates mental calmness.",
    ],
  },

  {
    id: 5,
    title: "Numerology Training",
    image: numerology,
    description:
      "Numerology Training explains the spiritual significance of numbers and how they influence personality, relationships, and important life decisions. It helps participants gain better self-understanding.",

    benefits: [
      "Improves self-awareness.",
      "Supports better decision making.",
      "Understands life patterns.",
      "Develops confidence.",
    ],
  },

  {
    id: 6,
    title: "Chakra Awakening Training",
    image: chakra,
    description:
      "Chakra Awakening Training focuses on activating and balancing the seven primary energy centers of the body. Through guided meditation, breathing techniques, and spiritual practices, participants experience improved physical health, emotional stability, and spiritual awareness.",

    benefits: [
      "Balances the body's energy centers.",
      "Enhances emotional stability.",
      "Supports spiritual growth and awareness.",
      "Promotes inner harmony and peace.",
    ],
  },

  {
    id: 7,
    title: "Uyir Chakra (Life Energy) Training",
    image: uyirchakra,
    description:
      "Uyir Chakra Training strengthens the body's life-force energy through specialized breathing, meditation, and energy activation techniques. It helps improve vitality, focus, and overall well-being while supporting a healthier lifestyle.",

    benefits: [
      "Boosts life-force energy.",
      "Improves physical vitality.",
      "Enhances concentration and focus.",
      "Supports overall wellness.",
    ],
  },

  // {
  //   id: 8,
  //   title: "Surya Kantha Yogam",
  //   image: suryakantha,
  //   description:
  //     "Surya Kantha Yogam is a spiritual practice that channels the positive magnetic energy of the sun to energize the body and mind. It promotes confidence, vitality, and a positive approach to everyday life.",

  //   benefits: [
  //     "Increases physical energy.",
  //     "Builds confidence and courage.",
  //     "Promotes positive thinking.",
  //     "Supports overall health and vitality.",
  //   ],
  // },

  // {
  //   id: 9,
  //   title: "Chandra Kantha Yogam",
  //   image: chandrakantha,
  //   description:
  //     "Chandra Kantha Yogam utilizes the calming magnetic energy of the moon to create mental relaxation, emotional balance, and inner peace. It is especially beneficial for stress relief and meditation.",

  //   benefits: [
  //     "Relieves stress and anxiety.",
  //     "Improves emotional balance.",
  //     "Encourages restful sleep.",
  //     "Deepens meditation practice.",
  //   ],
  // },

  // {
  //   id: 10,
  //   title: "Mangala Kantha Yogam",
  //   image: mangalakantha,
  //   description:
  //     "Mangala Kantha Yogam is designed to strengthen determination, courage, and self-confidence through focused spiritual practices. It helps participants face life's challenges with greater resilience and inner strength.",

  //   benefits: [
  //     "Builds courage and confidence.",
  //     "Strengthens mental resilience.",
  //     "Improves decision-making ability.",
  //     "Encourages personal growth.",
  //   ],
  // },
];

const Tc1 = () => {
  return (
    <>
      {/* <Navbar /> */}

      <section className="training-page">

        {/* ================= HERO ================= */}

        <div className="training-hero">

          <span className="training-tag">
            ✨ Spiritual Learning
          </span>

          <h1>Training Programs</h1>

          <p>
            Amirthalogam offers spiritual and wellness training
            programs designed to improve physical health, mental peace,
            self-awareness, and holistic living through yoga, meditation,
            breathing practices, and value-based education.
            
          </p>
          <br></br>

<div className="mantra" translate="no">
  <div className="mantra-line main-mantra">
    ஓம் ஸ்ரீ குருவே சரணம்
  </div>

  <div className="mantra-small">
    🙏 நற்பவி 🙏
  </div>

  <div className="mantra-line">
    🌸 ஓம் ஸ்ரீ அகத்தீசாய நமோ நமஹா 🌸
  </div>

  <div className="mantra-poem">
    <p>அன்பில் உறை அமிர்தம் போற்றி</p>
    <p>அமைதியில் உறை அமிர்தம் போற்றி</p>
    <p>ஆனந்தத்தில் உறை அமிர்தம் போற்றி</p>
    <p>ஆழ்நிம்மதியில் நிறை அமிர்தம் போற்றி போற்றியே</p>

    <br />

    <p>அறிவை மகிழ்த்தும் சூரியாமிர்தம் போற்றி</p>
    <p>மனதை மகிழ்த்தும் சந்திராமிர்தம் போற்றி</p>
    <p>ஞானத்தை மகிழ்த்தும் புவியமிர்தம் போற்றி</p>
    <p>உயிரை மகிழ்த்தும் வாலாமிர்தம் போற்றி போற்றியே</p>
  </div>

  <div className="mantra-line">
    🌸 ஓம் கம் கணபதியே நம 🌸
  </div>

  <div className="mantra-line">
    🌸 ஓம் சத்குரு ஸ்ரீ காகபுஜண்டர் தேவாய நமஹ 🌸
  </div>

  <div className="mantra-line last-mantra">
    🌸 ஓம் அனைத்து சித்த ரிஷி குருமார்களும் போற்றி போற்றியே 🌸
  </div>
</div>
        </div>


        {/* ================= TRAINING PROGRAMS ================= */}

        <div className="training-wrapper">

          {trainings.map((item, index) => (

            <div
              className={`training-row ${
                index % 2 === 0 ? "normal" : "reverse"
              }`}
              key={item.id}
            >

              {/* ================= IMAGE ================= */}

              <div className="training-media">

                <div className="image-card">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                </div>

              </div>


              {/* ================= CONTENT ================= */}

              <div className="training-content">

                <span className="program-count">
                  Program {item.id}
                </span>

                <h2>{item.title}</h2>

                <p>{item.description}</p>

                <h4>Key Benefits</h4>

                <ul>

                  {item.benefits.map((benefit, i) => (

                    <li key={i}>

                      <span className="benefit-check">
                        ✓
                      </span>

                      <span>
                        {benefit}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>


        {/* ================= MORE PROGRAMS ================= */}

        <section className="more-programs">

          <div className="more-programs-content">

            <span className="more-tag">
              🔥 Unlock More Spiritual Programs
            </span>

            <h2>
              Discover Many More Spiritual & Wellness Programs
            </h2>

            <p>
              Amirthalogam offers many additional training
              programs designed to support holistic well-being, spiritual
              growth, self-awareness, meditation, yoga, energy practices,
              and a balanced lifestyle. Join us to explore these unique
              learning experiences and begin your journey toward inner peace.
            </p>


            <TC2 />


            {/* ================= BUTTONS ================= */}

            {/* <div className="more-btns">

              <a
                href="#register"
                className="explore-btn"
              >
                Explore More Programs to Transform Your Lifestyle →
              </a>

              <HashLink
                smooth
                to="/#register"
                className="register-btn"
              >
                ✨ Register Now
              </HashLink>

            </div> */}

          </div>

        </section>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-content">

          <p>
            © {new Date().getFullYear()} Amirthalogam
            All Rights Reserved.
          </p>

          <a href="mailto:amirthalogam@gmail.com">
            ✉ amirthalogam@gmail.com
          </a>

        </div>

      </footer>

    </>
  );
};

export default Tc1;