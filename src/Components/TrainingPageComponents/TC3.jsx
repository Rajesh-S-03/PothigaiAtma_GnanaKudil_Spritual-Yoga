import React from "react";
import {
  FaBullseye,
  FaGraduationCap,
  FaTrophy,
  FaUserTie,
  FaBookOpen,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLightbulb,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

import Navbar from "../HomePageComponents/Navbar";
import "./TC3.css";

// Change these image names according to your assets
import academyImg from "../../assets/instituteimg_1.jpg";
import founderImg from "../../assets/vamuskar.jpeg";
import studentsImg from "../../assets/instituteimg_2.jpg";
import successImg from "../../assets/architecture&technology.png";
import classroomImg from "../../assets/institute3.jpg";
import achieverImage from "../../assets/govtcertificate.jpg";

const TC3 = () => {
  const achievers = [
    {
      name: "சஜின் ராஜ்",
      department: "தொழிலாளர் நலத்துறை – திருநெல்வேலி",
    },
    {
      name: "பார்த்திபன்",
      department: "காவல்துறை – ராதாபுரம்",
    },
    {
      name: "தீபன் ராஜ்",
      department: "நில அளவை பதிவேடுகள் துறை – திருப்பூர்",
    },
    {
      name: "ஷாலினி",
      department: "வருவாய்த்துறை (DC) – சேலம்",
    },
    {
      name: "வினுப்ரீதா",
      department: "உள்ளாட்சி நிதி தணிக்கைத்துறை",
    },
    {
      name: "பிரேம்",
      department: "இந்திய பாதுகாப்பு கணக்குகள் சேவை (IDAS)",
    },
    {
      name: "பிரபினா",
      department: "இந்திய காவல் பணி (IPS) – ஹரியானா",
    },
    {
      name: "தமிழ் ஓவியா",
      department: "இந்திய ஆட்சிப் பணி (IAS) – மேற்கு வங்கம்",
    },
    {
      name: "விக்னேஷ்",
      department: "வனத்துறை – சேலம்",
    },
    {
      name: "சிலம்பரசன்",
      department: "வணிகவரி துறை – சென்னை",
    },
    {
      name: "சக்திவேல்",
      department: "வருவாய்த்துறை",
    },
    {
      name: "ராஜநீதி",
      department: "நீதித்துறை",
    },
    {
      name: "வெங்கடேஷ்",
      department: "வருவாய்த்துறை",
    },
    {
      name: "ராஜம்",
      department: "மருத்துவம் மற்றும் சுகாதாரத்துறை",
    },
    {
      name: "சுஜித்",
      department: "பள்ளிக்கல்வித்துறை",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="tc3-page">

        {/* ================= HERO ================= */}
        <section className="tc3-hero">

          <div className="tc3-hero-overlay"></div>

          <div className="tc3-hero-content">

            <div className="tc3-logo-circle">
              <FaGraduationCap />
            </div>

            <p className="tc3-small-title">
              AMIRTHESWARAR
            </p>

            <h1>
              IAS ACADEMY
            </h1>

            <div className="tc3-tagline">
              AIM <span>–</span> ACT <span>–</span> ACHIEVE
            </div>

            <p className="tc3-tamil-title">
              அமிர்தேஸ்வரர் ஐஏஎஸ் அகாடமி
            </p>

            <p className="tc3-hero-description">
              போட்டித் தேர்வுகளில் வெற்றி பெறுவதற்கான
              கல்வி, வழிகாட்டுதல் மற்றும் வாழ்வியல்
              நெறிகளை ஒருங்கிணைக்கும் பயிற்சி மையம்.
            </p>

            <a href="#about" className="tc3-hero-btn">
              எங்களை பற்றி அறிய
              <FaArrowRight />
            </a>

          </div>

        </section>


        {/* ================= INTRO ================= */}
        <section className="tc3-intro" id="about">

          <div className="tc3-container">

            <div className="tc3-intro-image">
              <img
                src={academyImg}
                alt="Amirtheswarar IAS Academy"
              />

              <div className="tc3-image-badge">
                <FaGraduationCap />
                <span>
                  AIM – ACT – ACHIEVE
                </span>
              </div>
            </div>


            <div className="tc3-intro-content">

              <span className="tc3-section-label">
                AMIRTHESWARAR IAS ACADEMY
              </span>

              <h2>
                வமுஸ்கர் ஐயாவின்
                <br />
                கல்விப் பயணத்தில் உருவான அகாடமி
              </h2>

              <div className="tc3-gold-line"></div>

              <p>
                அமிர்தேஸ்வரர் ஐஏஎஸ் அகாடமி நிறுவனர்
                திரு. வமுஸ்கர் ஐயா அவர்கள் தமிழகத்தின்
                தென்பகுதியான தென்காசி மாவட்டம்,
                மத்தளம்பாறை கிராமத்தை பூர்வீகமாக
                கொண்டவர்.
              </p>

              <p>
                ஆரம்ப கால பள்ளிப் பருவம் முதலே ஐஏஎஸ்
                மீது ஆர்வம் கொண்ட இவர், தனது இளங்கலை
                கல்லூரி கல்வியை நிறைவு செய்து ஐஏஎஸ்
                தேர்வுக்குத் தயாரானார்.
              </p>

              <p>
                தென்காசி, கன்னியாகுமரி, கோயம்புத்தூர்
                மற்றும் சென்னை ஆகிய பகுதிகளில் உள்ள
                பல்வேறு போட்டித் தேர்வு மையங்களில்
                தங்கி பயின்று தனது கல்வி அனுபவத்தை
                வளர்த்துக் கொண்டார்.
              </p>

            </div>

          </div>

        </section>


        {/* ================= FOUNDER ================= */}
        <section className="tc3-founder">

          <div className="tc3-container">

            <div className="tc3-founder-content">

              <span className="tc3-section-label">
                FOUNDER'S JOURNEY
              </span>

              <h2>
                நிறுவனர்
                <br />
                திரு. வமுஸ்கர் ஐயா
              </h2>

              <div className="tc3-gold-line"></div>

              <p>
                தனது வாழ்வியல் தேவைகளுக்காக பல்வேறு
                பயிற்சி நிறுவனங்களில் பகுதி மற்றும் முழு
                நேர ஆசிரியராகவும், ஊழியராகவும்,
                அலுவலராகவும், ஒருங்கிணைப்பாளராகவும்
                பணியாற்றியபடியே தனது கல்விப் பயணத்தை
                தொடர்ந்து வந்தார்.
              </p>

              <p>
                கல்வி அனுபவக் காலங்களில் பல்வேறு
                மாணவர்களுக்கும் நண்பர்களுக்கும் சிறந்த
                வழிகாட்டியாகவும் ஊக்குவிப்பாளராகவும்
                இருந்து வந்துள்ளார்.
              </p>

              <p>
                இவரது வழிகாட்டுதலின் மூலம் பல மாணவர்கள்
                அரசு மற்றும் போட்டித் தேர்வுகளில் வெற்றி
                பெற்று பணியில் சேர்ந்துள்ளனர்.
              </p>

              <div className="tc3-highlight-box">
                <FaLightbulb />

                <div>
                  <strong>
                    கல்வி + வழிகாட்டுதல் + வாழ்வியல்
                  </strong>

                  <p>
                    மாணவர்களின் முழுமையான வளர்ச்சியை
                    நோக்கமாகக் கொண்ட பயிற்சி.
                  </p>
                </div>
              </div>

            </div>


            <div className="tc3-founder-image">

              <img
                src={founderImg}
                alt="Founder"
              />

              <div className="tc3-founder-card">
                <FaUserTie />

                <div>
                  <strong>
                    நிறுவனர்
                  </strong>

                  <span>
                    திரு. வமுஸ்கர் ஐயா
                  </span>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}
        <section className="tc3-experience">

          <div className="tc3-container">

            <div className="tc3-heading-center">

              <span className="tc3-section-label">
                EDUCATIONAL EXPERIENCE
              </span>

              <h2>
                நிறுவனர் கல்வி அனுபவங்கள்
              </h2>

              <div className="tc3-gold-line center"></div>

              <p>
                பல்வேறு முன்னணி பயிற்சி நிறுவனங்களில்
                பெற்ற அனுபவங்களின் தொகுப்பு.
              </p>

            </div>


            <div className="tc3-experience-grid">

              <div className="tc3-experience-list">

                <div className="tc3-exp-item">
                  <span>01</span>
                  <div>
                    <h3>ஆகாஷ் அகாடமி – தென்காசி</h3>
                    <p>
                      Merit List மூலம் தேர்ந்தெடுக்கப்பட்ட
                      பயிற்சி மாணவர்.
                    </p>
                  </div>
                </div>

                <div className="tc3-exp-item">
                  <span>02</span>
                  <div>
                    <h3>மனிதநேயம் அறக்கட்டளை – சென்னை</h3>
                    <p>
                      Merit List மூலம் தேர்வு செய்யப்பட்ட
                      பயிற்சி மாணவர்.
                    </p>
                  </div>
                </div>

                <div className="tc3-exp-item">
                  <span>03</span>
                  <div>
                    <h3>Saint Paul IAS Academy</h3>
                    <p>
                      பயிற்சி மாணவராகவும் TNPSC
                      மாணவர்களுக்கு ஆசிரியராகவும்
                      பணியாற்றினார்.
                    </p>
                  </div>
                </div>

                <div className="tc3-exp-item">
                  <span>04</span>
                  <div>
                    <h3>KPR IAS Academy – கோயம்புத்தூர்</h3>
                    <p>
                      Merit List மூலம் தேர்வு செய்யப்பட்ட
                      பயிற்சி மாணவர் மற்றும் ஆசிரியர்.
                    </p>
                  </div>
                </div>

                <div className="tc3-exp-item">
                  <span>05</span>
                  <div>
                    <h3>திருப்பூர் KPR Academy</h3>
                    <p>
                      TNPSC மாணவர்களுக்கு ஆசிரியர் மற்றும்
                      ஒருங்கிணைப்பாளர்.
                    </p>
                  </div>
                </div>

                <div className="tc3-exp-item">
                  <span>06</span>
                  <div>
                    <h3>சென்னை ஐயாசாமி அகாடமி</h3>
                    <p>
                      UPSC மற்றும் TNPSC மாணவர்களுக்கு
                      பகுதி நேர Freelance ஆசிரியராக
                      பயிற்சி வழங்கினார்.
                    </p>
                  </div>
                </div>

              </div>


              <div className="tc3-classroom-image">

                <img
                  src={classroomImg}
                  alt="IAS Academy Classroom"
                />

                <div className="tc3-classroom-overlay">
                  <FaBookOpen />

                  <h3>
                    அறிவே
                    <br />
                    வெற்றியின் அடித்தளம்
                  </h3>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= SUCCESS ================= */}
        <section className="tc3-success">

          <div className="tc3-container">

            <div className="tc3-heading-center light">

              <span className="tc3-section-label">
                SUCCESS STORIES
              </span>

              <h2>
                வெற்றியாளர்கள் –
                <br />
                நம் ஊக்கத்தின் சாட்சி
              </h2>

              <div className="tc3-gold-line center"></div>

              <p>
                நிறுவனர் வழங்கிய வழிகாட்டுதலின் மூலம்
                பல்வேறு துறைகளில் வெற்றி பெற்ற
                மாணவர்கள் மற்றும் நண்பர்கள்.
              </p>

            </div>


            <div className="tc3-success-grid">

              {achievers.map((person, index) => (
                <div
                  className="tc3-achiever-card"
                  key={index}
                >

                  <div className="tc3-achiever-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="tc3-achiever-icon">
                    <FaTrophy />
                  </div>

                  <div>
                    <h3>{person.name}</h3>

                    <p>
                      {person.department}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>
          {/* Government Exam Achiever */}
<div className="tc3-govt-achiever">

  <div className="tc3-achiever-photo">
    <img
      src={achieverImage}
      alt="Government Exam Achiever"
    />
  </div>

  <div className="tc3-achiever-info">

    <span className="tc3-achiever-label">
      GOVERNMENT EXAM ACHIEVER
    </span>

    <h3>
      அரசு தேர்வில் வெற்றி பெற்றவர்
    </h3>

    <div className="tc3-gold-line"></div>

    <h4>
      திரு. [Rajam M]
    </h4>

    <p>
      நிறுவனர் வழங்கிய வழிகாட்டுதல் மற்றும்
      பயிற்சியின் மூலம் அரசு போட்டித் தேர்வில்
      வெற்றி பெற்று அரசு பணியில் இடம் பெற்றுள்ளார்.
    </p>

    <div className="tc3-achievement-details">

      <div>
        <span>தேர்வு</span>
        <strong>TNPSC / UPSC</strong>
      </div>

      <div>
        <span>பதவி</span>
        <strong>[Medical &Rural Health Service Department]</strong>
      </div>

      <div>
        <span>ஆண்டு</span>
        <strong>2026</strong>
      </div>

    </div>

  </div>

</div>

        </section>


        {/* ================= LIFE EDUCATION ================= */}
        <section className="tc3-life">

          <div className="tc3-container">

            <div className="tc3-life-image">

              <img
                src={studentsImg}
                alt="Students"
              />

            </div>


            <div className="tc3-life-content">

              <span className="tc3-section-label">
                LIFE EDUCATION
              </span>

              <h2>
                போட்டித் தேர்வுடன்
                <br />
                வாழ்வியல் கல்வியும்
              </h2>

              <div className="tc3-gold-line"></div>

              <p>
                மாணவர்களுக்கு ஐஏஎஸ் மற்றும் போட்டித்
                தேர்வு கல்வி அளிப்பது மட்டுமில்லாமல்,
                வாழ்வியலுக்குத் தேவையான அடிப்படை
                கல்வியையும் வழங்க வேண்டும் என்பதே
                நிறுவனத்தின் நோக்கம்.
              </p>

              <p>
                அறிவு, ஒழுக்கம், பொறுப்பு, மனிதநேயம்,
                தன்னம்பிக்கை மற்றும் வாழ்க்கை
                மதிப்பீடுகளை வளர்க்கும் வகையில்
                மாணவர்களை உருவாக்கும் முயற்சி
                மேற்கொள்ளப்படுகிறது.
              </p>


              <div className="tc3-life-points">

                <div>
                  <FaHeart />
                  <span>ஒழுக்க விழுமியங்கள்</span>
                </div>

                <div>
                  <FaLightbulb />
                  <span>வாழ்வியல் அறிவு</span>
                </div>

                <div>
                  <FaBullseye />
                  <span>இலக்கு நோக்கம்</span>
                </div>

                <div>
                  <FaGraduationCap />
                  <span>தரமான கல்வி</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= JOURNEY ================= */}
        <section className="tc3-journey">

          <div className="tc3-container">

            <div className="tc3-journey-content">

              <span className="tc3-section-label">
                A NEW BEGINNING
              </span>

              <h2>
                மீண்டும் ஒரு புதிய
                <br />
                துவக்கம்
              </h2>

              <div className="tc3-gold-line"></div>

              <p>
                கல்வித்துறையில் தான் கற்ற கல்வியும்,
                அனுபவமும் வீணாகிவிடக் கூடாது என்றும்,
                போட்டித் தேர்வு துறையில் தான் பயன்படுத்தி
                வந்த வெற்றிக்கான நுணுக்கங்கள் உண்மையான
                தேவை உள்ள பலருக்கும் பயன்பட வேண்டும்
                என்றும் எண்ணி மீண்டும் ஐஏஎஸ் அகாடமியை
                இயக்கி வருகிறார்.
              </p>

              <div className="tc3-quote">
                <span>“</span>

                <p>
                  உங்கள் இலக்கை நோக்கி
                  <br />
                  நம்பிக்கையுடன் பயணியுங்கள்.
                  <br />
                  வழிகாட்டுதல் எங்களிடமிருந்து.
                </p>

                <span>”</span>
              </div>

            </div>


            <div className="tc3-success-image">

              <img
                src={successImg}
                alt="Success"
              />

              <div className="tc3-success-badge">
                AIM
                <span>ACT</span>
                ACHIEVE
              </div>

            </div>

          </div>

        </section>


        {/* ================= VISION ================= */}
        <section className="tc3-vision">

          <div className="tc3-vision-overlay"></div>

          <div className="tc3-vision-content">

            <FaBullseye className="tc3-vision-icon" />

            <span>
              OUR VISION
            </span>

            <h2>
              Aim – Act – Achieve
            </h2>

            <p>
              உயர்ந்த இலக்கை நிர்ணயித்து,
              அதை அடைவதற்கான சரியான செயல்பாட்டுடன்
              வெற்றியை நோக்கி பயணிப்போம்.
            </p>

          </div>

        </section>


        {/* ================= CONTACT ================= */}
        <section className="tc3-contact">

          <div className="tc3-container">

            <div className="tc3-contact-box">

              <div className="tc3-contact-item">

                <FaMapMarkerAlt />

                <div>
                  <span>எங்கள் முகவரி</span>

                  <p>
                    11/268-1, Gandhipuram,
                    <br />
                    Mathalamparai,
                    <br />
                    Tenkasi District – 627814
                  </p>
                </div>

              </div>


              <div className="tc3-contact-item">

                <FaPhoneAlt />

                <div>
                  <span>தொடர்புக்கு</span>

                  <p>
                    77081 89427
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= FOOTER ================= */}
        <footer className="tc3-footer">

          <div className="tc3-footer-logo">
            AMIRTHESWARAR
            <span>IAS ACADEMY</span>
          </div>

          <p>
            AIM – ACT – ACHIEVE
          </p>

          <small>
            © {new Date().getFullYear()} Amirtheswarar IAS Academy.
            All Rights Reserved.
          </small>

        </footer>

      </main>
    </>
  );
};

export default TC3;