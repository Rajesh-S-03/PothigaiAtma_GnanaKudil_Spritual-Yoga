import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

import "./Hcontent3.css";

import annadhanamImg from "../../assets/food1.png";
import studentTrainingImg from "../../assets/students2.png";
import healthSupportImg from "../../assets/health.png";
import greeneryImg from "../../assets/green.jpeg";
const Hcontent3 = () => {
  const location = useLocation();

useEffect(() => {
  if (location.state?.scrollToRegister) {
    const timer = setTimeout(() => {
      const registerSection = document.getElementById("register");

      if (registerSection) {
        registerSection.scrollIntoView({
          block: "start",
        });
      }
    }, 200);

    return () => clearTimeout(timer);
  }
}, [location.state]);

const handleSubmit = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const phone = e.target.phone.value;
  const city = e.target.city.value;

  const subject = "Registration Interest - Amirthalogam";

  const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}
City: ${city}

Message:
I am interested in learning more about your programs and would like to get in touch with your team. Please contact me at your earliest convenience.
  `;

  const mailtoLink = `mailto:amirthalogam@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  e.target.reset();
};
  const socialActivities = [
    {
      title: "Annadhanam Service",
      description:
        "Providing food with care and dignity to people who need support.",
      image: annadhanamImg,
    },
    {
      title: "Student Wellness Training",
      description:
        "Guiding school students through body, mind, values, and well-being sessions.",
      image: studentTrainingImg,
    },
    {
      title: "Health & Community Support",
      description:
        "Supporting community health initiatives and helping families in need.",
      image: healthSupportImg,
    },
    {
      title: "Green Village Initiative",
      description:
        "Encouraging environmental care through greenery and community action.",
      image: greeneryImg,
    },
  ];

  const testimonials = [
    {
      name: "By Damayanti Amma",
      role: "Spiritual Training Participant",
      message:
        "Om Shri Guruve Saranam We all in this universe are full of divine energy, Guru energy, nectar energy, and when we practice Panchabhuta Amritha Yoga daily, we can feel it. Today's Panchabhuta Amritha practice is very good. I am very grateful to Guru Sir Vamuskar Sir. Narpavi Sir.",
      initial: "M",
    },
    {
      name: "By. Manjula Amma",
      role: "Online Program Participant",
      message:
        "Dear friends...For those of you who are practicing the natural worship that our guide and guru, Mr. Vamuskar, will surely be supported by Jesus and the Siddhas and will continue to guide us in this life.Those who have failed to do this, have made many promises, like a parrot telling a parrot how a human being should live in this world.If you live as he said, you can easily escape from this suffering.Take advantage and help all souls reach the shore. ",
      initial: "K",
    },
    // {
    //   name: "V. Lakshmi",
    //   role: "Community Service Volunteer",
    //   message:
    //     "Being part of the social service activities gave me a meaningful opportunity to serve people with compassion.",
    //   initial: "L",
    // },
    // {
    //   name: "A. Praveen",
    //   role: "Yoga Training Participant",
    //   message:
    //     "The yoga and self-awareness practices improved my routine and helped me understand the value of inner balance.",
    //   initial: "P",
    // },
  ];

const [activeIndex, setActiveIndex] = useState(0);

const showPrevious = () => {
  setActiveIndex((previousIndex) =>
    previousIndex === 0
      ? testimonials.length - 1
      : previousIndex - 1
  );
};

const showNext = () => {
  setActiveIndex((previousIndex) =>
    previousIndex === testimonials.length - 1
      ? 0
      : previousIndex + 1
  );
};

const visibleTestimonials = [
  testimonials[activeIndex],
  testimonials[(activeIndex + 1) % testimonials.length],
];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Social Activities */}
      <section className="social-activities-section">
        <div className="social-activities-heading">
          <span>Serving With Compassion</span>

          <h2>Our Social Welfare Activities</h2>

          <p>
            At Pothigai Atma Gnana Kudil, spirituality is expressed through
            compassionate action. We support communities through food service,
            student wellness, health initiatives, and environmental care.
          </p>

          <div className="social-heading-line"></div>
        </div>

        <div className="social-activities-grid">
          {socialActivities.map((activity) => (
            <article className="social-activity-card" key={activity.title}>
              <div className="social-card-image">
                <img src={activity.image} alt={activity.title} />
              </div>

              <div className="social-card-content">
                <h3>{activity.title}</h3>
                <div className="social-card-line"></div>
                <p>{activity.description}</p>
              </div>
            </article>
          ))}
        </div>
        <Link to="/activities" className="social-more-btn"> Explore All Social Activities <span>→</span></Link>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-heading">
          <span>Words From Our Community</span>

          <h2>Testimonials</h2>

          <p>
            Hear from participants, volunteers, and members who have
            experienced spiritual growth, peace, and positive change through
            our programs.
          </p>

          <div className="testimonials-heading-line"></div>
        </div>

        <div className="testimonial-slider-wrapper">
          <button
            className="testimonial-arrow testimonial-arrow-left"
            onClick={showPrevious}
            aria-label="Previous testimonials"
          >
            <FaChevronLeft />
          </button>

          <div className="testimonial-cards">
            {visibleTestimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <FaQuoteLeft className="testimonial-quote-icon" />

                <p className="testimonial-message">
                  “{testimonial.message}”
                </p>

                <div className="testimonial-person">
                  <div className="testimonial-avatar">
                    {testimonial.initial}
                  </div>

                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            className="testimonial-arrow testimonial-arrow-right"
            onClick={showNext}
            aria-label="Next testimonials"
          >
            <FaChevronRight />
          </button>
        </div>

       <div className="testimonial-dots">
  <button
    className={`testimonial-dot ${
      activeIndex === 0 ? "active-testimonial-dot" : ""
    }`}
    onClick={() => setActiveIndex(0)}
    aria-label="Show first testimonial"
  ></button>

  <button
    className={`testimonial-dot ${
      activeIndex === 1 ? "active-testimonial-dot" : ""
    }`}
    onClick={() => setActiveIndex(1)}
    aria-label="Show second testimonial"
  ></button>
</div>
      </section>


    {/* Registration Section */}
<section className="register-section" id="register" >
  <div className="register-content" >
    <span className="register-label">Begin Your Inner Journey</span>

    <h2>Ready to Bring Peace and Control to Your Mind?</h2>

    <p>
      Register your interest to begin a meaningful journey of self-awareness,
      inner peace, meditation, and spiritual growth with Pothigai Atma Gnana
      Kudil.
    </p>

    <div className="register-points">
      <div>
        <span>01</span>
        Guided spiritual training
      </div>

      <div>
        <span>02</span>
        Mindfulness and meditation practices
      </div>

      <div>
        <span>03</span>
        Supportive spiritual community
      </div>
    </div>
  </div>

  <div className="register-form-box">
    <h3>Register Your Interest</h3>
    <p>Fill in your details and our team will contact you.</p>

    <form className="register-form" id="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            required
          />
        </div>
      </div>

      <button type="submit" className="register-submit-btn">
        Register Now <span>→</span>
      </button>
    </form>
  </div>
</section>

 <footer className="footer-section">
      <div className="footer-top">
        {/* Organization Details */}
        <div className="footer-column footer-about">
          <h2>Amirthalogam</h2>

          <div className="footer-title-line"></div>

          <p>
            A spiritual community guiding individuals towards inner peace,
            self-awareness, discipline, compassion, and a meaningful way of
            life.
          </p>

          <div className="footer-social-icons">
            <a href="/" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="/" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="/" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="/" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#trainings">Trainings</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#activities">Social Activities</a>
            </li>
            <li>
              <a href="#register">Register Now</a>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div className="footer-column">
          <h3>Our Programs</h3>

          <ul className="footer-links">
            <li>
              <a href="">Panchabootha Amirtha Yoga</a>
            </li>
            <li>
              <a href="">Surya Kala Training</a>
            </li>
            <li>
              <a href="">Chandra Kala Training</a>
            </li>
            <li>
              <a href="">Nadhaantha Training</a>
            </li>
            <li>
              <a href="">Online Programs</a>
            </li>
            <li>
              <a href="">Pournami Meditation</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <div className="footer-contact-item">
            <FaMapMarkerAlt />
            <p>
              Mathalamparai – 627 814,
              <br />
              Tenkasi District, Tamil Nadu, India.
            </p>
          </div>

          <div className="footer-contact-item">
            <FaPhoneAlt />
            <a href="tel:8300366411">+918300366411 </a>
          </div>

          <div className="footer-contact-item">
            <FaEnvelope />
            <a href="mailto:amirthalogam@gmail.com">
              amirthalogam@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Amirthalogam. All Rights
          Reserved.
        </p>

        {/* <p>
          Designed by <span>❤</span><a href="https://oramate.com/"> Oramate Technology</a>
        </p> */}
      </div>

      <button
        className="scroll-top-btn"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
    </>
  );
};

export default Hcontent3;