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

// Images
import academyImg from "../../assets/instituteimg_1.jpg";
import founderImg from "../../assets/vamuskar3.jpeg";
import studentsImg from "../../assets/instituteimg_2.jpg";
import successImg from "../../assets/architecture&technology.png";
import classroomImg from "../../assets/institute3.jpg";
import achieverImage from "../../assets/govtcertificate.jpg";

const TC3 = () => {
  const achievers = [
    {
      name: "Sajin Raj",
      department: "Labour Welfare Department – Tirunelveli",
    },
    {
      name: "Parthiban",
      department: "Police Department – Radhapuram",
    },
    {
      name: "Deepan Raj",
      department: "Survey and Land Records Department – Tiruppur",
    },
    {
      name: "Shalini",
      department: "Revenue Department (DC) – Salem",
    },
    {
      name: "Vinu Preetha",
      department: "Local Fund Audit Department",
    },
    {
      name: "Prem",
      department: "Indian Defence Accounts Service (IDAS)",
    },
    {
      name: "Prabina",
      department: "Indian Police Service (IPS) – Haryana",
    },
    {
      name: "Tamil Oviya",
      department: "Indian Administrative Service (IAS) – West Bengal",
    },
    {
      name: "Vignesh",
      department: "Forest Department – Salem",
    },
    {
      name: "Silambarasan",
      department: "Commercial Taxes Department – Chennai",
    },
    {
      name: "Sakthivel",
      department: "Revenue Department",
    },
    {
      name: "Rajanithi",
      department: "Judicial Department",
    },
    {
      name: "Venkatesh",
      department: "Revenue Department",
    },
    {
      name: "Rajam",
      department: "Medical and Health Department",
    },
    {
      name: "Sujith",
      department: "School Education Department",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}

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
              Amirtheswarar IAS Academy
            </p>

            <p className="tc3-hero-description">
              A dedicated coaching centre that combines quality
              education, expert guidance, competitive examination
              preparation, and essential life values to help
              students achieve their goals.
            </p>

            <a href="#about" className="tc3-hero-btn">
              Learn More About Us
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
                An Academy Built
                <br />
                Through a Journey of Learning
              </h2>

              <div className="tc3-gold-line"></div>

              <p>
                Amirtheswarar IAS Academy was founded by
                Mr. Vamuskar Ayya, who belongs to
                Mathalamparai village in Tenkasi District,
                Tamil Nadu.
              </p>

              <p>
                From his early school days, he developed a
                strong interest in the Indian Administrative
                Service (IAS). After completing his undergraduate
                education, he began his focused journey towards
                competitive examinations.
              </p>

              <p>
                He gained valuable educational and competitive
                examination experience through training and
                learning at various centres across Tenkasi,
                Kanyakumari, Coimbatore, and Chennai.
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

              <h2 translate="no">
                Founder
                <br />
                Mr. Vamuskar Ayya (திரு.வமுஸ்கர் அய்யா)
              </h2>

              <div className="tc3-gold-line"></div>

              <p>
                Alongside pursuing his educational goals,
                he worked in various coaching institutions
                in different roles, including part-time and
                full-time teacher, staff member, officer,
                and coordinator.
              </p>

              <p>
                Throughout his educational career, he has
                served as a mentor, guide, and motivator to
                numerous students and fellow aspirants.
              </p>

              <p>
                Under his guidance, many students and
                friends have successfully cleared various
                government and competitive examinations
                and entered public service.
              </p>

              <div className="tc3-highlight-box">

                <FaLightbulb />

                <div>

                  <strong>
                    Education + Guidance + Life Skills
                  </strong>

                  <p>
                    A training approach focused on the
                    complete development of every student.
                  </p>

                </div>

              </div>

            </div>


            <div className="tc3-founder-image">

              <img
                src={founderImg}
                alt="Founder Mr. Vamuskar Ayya"
              />

              <div className="tc3-founder-card">

                <FaUserTie />

                <div>

                  <strong>
                    Founder
                  </strong>

                  <span translate="no">
                    Mr. Vamuskar Ayya (திரு.வமுஸ்கர் அய்யா)
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
                The Founder's Educational Experience
              </h2>

              <div className="tc3-gold-line center"></div>

              <p>
                A valuable collection of experience gained
                through various leading coaching institutions
                and competitive examination centres.
              </p>

            </div>


            <div className="tc3-experience-grid">

              <div className="tc3-experience-list">

                <div className="tc3-exp-item">

                  <span>01</span>

                  <div>

                    <h3>
                      Aakash Academy – Tenkasi
                    </h3>

                    <p>
                      Selected as a trainee through the
                      Merit List and gained valuable
                      competitive examination experience.
                    </p>

                  </div>

                </div>


                <div className="tc3-exp-item">

                  <span>02</span>

                  <div>

                    <h3>
                      Manithaneyam Foundation – Chennai
                    </h3>

                    <p>
                      Selected through the Merit List
                      as a competitive examination
                      trainee.
                    </p>

                  </div>

                </div>


                <div className="tc3-exp-item">

                  <span>03</span>

                  <div>

                    <h3>
                      Saint Paul IAS Academy
                    </h3>

                    <p>
                      Worked as a trainee and also
                      served as a teacher for TNPSC
                      aspirants.
                    </p>

                  </div>

                </div>


                <div className="tc3-exp-item">

                  <span>04</span>

                  <div>

                    <h3>
                      KPR IAS Academy – Coimbatore
                    </h3>

                    <p>
                      Selected through the Merit List
                      and gained experience as both a
                      trainee and teacher.
                    </p>

                  </div>

                </div>


                <div className="tc3-exp-item">

                  <span>05</span>

                  <div>

                    <h3>
                      KPR Academy – Tiruppur
                    </h3>

                    <p>
                      Served as a teacher and coordinator
                      for TNPSC aspirants.
                    </p>

                  </div>

                </div>


                <div className="tc3-exp-item">

                  <span>06</span>

                  <div>

                    <h3>
                      Aiyasamy Academy – Chennai
                    </h3>

                    <p>
                      Provided training as a part-time
                      freelance teacher for UPSC and
                      TNPSC aspirants.
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
                    Knowledge
                    <br />
                    Is the Foundation of Success
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
                Achievers –
                <br />
                A Reflection of Our Guidance
              </h2>

              <div className="tc3-gold-line center"></div>

              <p>
                Students and friends who have achieved
                success in various government departments
                and public services through the guidance
                and motivation provided by the founder.
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

                    <h3>
                      {person.name}
                    </h3>

                    <p>
                      {person.department}
                    </p>

                  </div>

                </div>

              ))}

            </div>


            {/* ================= GOVERNMENT EXAM ACHIEVER ================= */}
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
                  Government Examination Success
                </h3>

                <div className="tc3-gold-line"></div>

                <h4>
                  Mr. Rajam M
                </h4>

                <p>
                  With the guidance, training, and
                  encouragement provided by the founder,
                  he successfully cleared a government
                  competitive examination and secured a
                  position in public service.
                </p>


                <div className="tc3-achievement-details">

                  <div>

                    <span>
                      Examination
                    </span>

                    <strong>
                      TNPSC / UPSC
                    </strong>

                  </div>


                  <div>

                    <span>
                      Department
                    </span>

                    <strong>
                      Medical and Rural Health Services Department
                    </strong>

                  </div>


                  <div>

                    <span>
                      Year
                    </span>

                    <strong>
                      2024
                    </strong>

                  </div>

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
                Competitive Examination
                <br />
                Alongside Life Education
              </h2>

              <div className="tc3-gold-line"></div>

              <p>
                Our vision is not limited to providing
                students with IAS and competitive
                examination preparation. We believe that
                education should also prepare students
                with the essential knowledge and values
                required for everyday life.
              </p>

              <p>
                We strive to develop students with
                knowledge, discipline, responsibility,
                compassion, self-confidence, and strong
                life values so that they can become
                responsible and capable individuals.
              </p>


              <div className="tc3-life-points">

                <div>
                  <FaHeart />
                  <span>
                    Moral Values
                  </span>
                </div>

                <div>
                  <FaLightbulb />
                  <span>
                    Life Knowledge
                  </span>
                </div>

                <div>
                  <FaBullseye />
                  <span>
                    Goal Orientation
                  </span>
                </div>

                <div>
                  <FaGraduationCap />
                  <span>
                    Quality Education
                  </span>
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
                A New Beginning
                <br />
                Towards Greater Success
              </h2>

              <div className="tc3-gold-line"></div>

              <p>
                Believing that the knowledge and experience
                gained throughout his educational journey
                should not go unused, the founder has
                renewed his commitment to the IAS and
                competitive examination field.
              </p>

              <p>
                The aim is to make the strategies, knowledge,
                and techniques that have contributed to
                success available to many more aspirants
                who genuinely need guidance and support.
              </p>


              <div className="tc3-quote">

                <span>
                  "
                </span>

                <p>
                  Move towards your goal
                  <br />
                  with confidence and determination.
                  <br />
                  Let our guidance lead the way.
                </p>

                <span>
                  "
                </span>

              </div>

            </div>


            <div className="tc3-success-image">

              <img
                src={successImg}
                alt="Success"
              />

              <div className="tc3-success-badge">

                AIM

                <span>
                  ACT
                </span>

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
              Set a meaningful goal, take the right action,
              stay committed to the journey, and move
              confidently towards success.
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

                  <span>
                    Our Address
                  </span>

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

                  <span>
                    Contact Us
                  </span>

                  <p>
                    8300366411
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

            <span>
              IAS ACADEMY
            </span>

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
