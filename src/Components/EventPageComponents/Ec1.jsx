import React, { useEffect, useState } from "react";
import "./Ec1.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../HomePageComponents/Navbar";

const Ec1 = () => {

    const navigate = useNavigate();
  
    const goToRegister = () => {
      navigate("/", {
        state: {
          scrollToRegister: true,
        },
      });
    };
  // =========================
  // UPCOMING EVENTS
  // =========================

  const upcomingEvents = [
    {
      id: 1,
      day: "Every",
      month: "Sunday",
      year: "Week",
      title: "Pancha Bhoota Amirtha Yogam",
      category: "Weekly Event",
      description:
        "Every Sunday, Pancha Bhoota Yogam is taught as the foundational training for Amirtha Ulagam. Those who master this will go on to receive the subsequent monthly and annual Arul Ulaga trainings.",
      time: "Every Sunday",
      location: "Amirtha Ulagam",
      date: "2026-09-13T06:00:00",
    },

    {
      id: 2,
      day: "01",
      month: "Thursday",
      year: "Month",
      title: "Four Thursdays Training",
      category: "Monthly Event",
      description:
        "On every Thursday of the Tamil month, the Siddhars' Arul Ulaga trainings are given. First Thursday – Surya Kala Yogam, Second Thursday – Chandra Kala Yogam, Third Thursday – Nadhantha Yogam, Fourth Thursday – Adhara Chakra Blossoming Yogam.",
      time: "Every Thursday of the Tamil month",
      location: "Amirtha Ulagam",
      date: "2026-09-17T06:00:00",
    },

    {
      id: 3,
      day: "Full",
      month: "Moon",
      year: "Time",
      title: "Full Moon Group Worship",
      category: "Monthly Event",
      description:
        "On every Full Moon day of the Tamil month, a group worship event for the Siddhars' Arul Ulagam is held.",
      time: "Every Full Moon day of the Tamil month",
      location: "Amirtha Ulagam",
      date: "2026-09-26T18:00:00",
    },

    {
      id: 4,
      day: "Kaantha",
      month: "Amirtha",
      year: "Yogam",
      title: "Kaantha Amirtha Yogam",
      category: "Monthly Event",
      description:
        "Surya Kantha Amirtha Yogam – trained every Full Moon morning of the Tamil month. Chandra Kantha Amirtha Yogam – trained every Full Moon evening. Agni Kantha Amirtha Yogam – trained every New Moon noon of the Tamil month.",
      time: "Morning / Evening / Noon",
      location: "Amirtha Ulagam",
      date: "2026-09-26T06:00:00",
    },

    {
      id: 5,
      day: "Solar",
      month: "Eclipse",
      year: "Annual",
      title: "Cosmic Kaantha amirtha Yogam",
      category: "Annual Event",
      description:
        "During each year's solar eclipse periods, a special Cosmic Kanthamirtha Yogam training is given for men.",
      time: "Solar eclipse period",
      location: "Amirtha Ulagam",
      date: "2026-09-01T06:00:00",
    },

    {
      id: 6,
      day: "Lunar",
      month: "Eclipse",
      year: "Annual",
      title: "Cosmic Kaantha amirtha Yogam",
      category: "Annual Event",
      description:
        "During each year's lunar eclipse periods, a special Cosmic Kanthamirtha Yogam training is given for women.",
      time: "Lunar eclipse period",
      location: "Amirtha Ulagam",
      date: "2026-09-01T18:00:00",
    },
  ];

  // =========================
  // PAST EVENTS
  // =========================

  const pastEvents = [
    {
      id: 1,
      title: "Surya Kaala Yogam",
      date: "First Thursday",
      category: "Four Thursdays Training",
    },
    {
      id: 2,
      title: "Chandra Kaala Yogam",
      date: "Second Thursday",
      category: "Four Thursdays Training",
    },
    {
      id: 3,
      title: "Naadhantha Yogam",
      date: "Third Thursday",
      category: "Four Thursdays Training",
    },
    {
      id: 4,
      title: "Adhara Chakra Blossoming Yogam",
      date: "Fourth Thursday",
      category: "Four Thursdays Training",
    },
    {
      id: 5,
      title: "Surya Kaantha Amirtha Yogam",
      date: "Full Moon – Morning",
      category: "Kanthamirtha Yogam",
    },
    {
      id: 6,
      title: "Chandra Kaantha Amirtha Yogam",
      date: "Full Moon – Evening",
      category: "Kanthamirtha Yogam",
    },
    {
      id: 7,
      title: "Agni Kaantha Amirtha Yogam",
      date: "New Moon – Noon",
      category: "Kanthamirtha Yogam",
    },
  ];

  // =========================
  // COUNTDOWN
  // =========================

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const nextEvent = upcomingEvents[0];

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const eventTime = new Date(nextEvent.date).getTime();

      const difference = eventTime - now;

      if (difference <= 0) {
        setTimeLeft({
          expired: true,
        });

        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* <Navbar/> */}

      <main className="events-page">

        {/* =========================
            HERO
        ========================= */}

        {/*
        <section className="events-hero">

          <div className="events-hero-overlay"></div>

          <div className="events-hero-content">

            <span className="events-label">
              ✦ Amirtha Ulaga Events ✦
            </span>

            <h1>
              Amirtha Ulaga <strong>Events</strong>
            </h1>

            <p>
              Join our weekly, monthly, and annual Arul Ulaga
              trainings and spiritual events to receive the
              experience of grace.
            </p>

            <a
              href="#upcoming-events"
              className="events-hero-btn"
            >
              View Events
              <span>↓</span>
            </a>

          </div>

        </section>
        */}


        {/* =========================
            INTRO
        ========================= */}

        <section className="events-intro">

          <span>Amirtha Ulaga Events</span>

          <h2>
            Arul Ulaga <strong>Events</strong>
          </h2>

          <p>
            Om Sri Guruve Saranam 🙏
            <br />
            Natpavi 🙏
            <br />
            Om Sri Agathisaya Namo Namaha 🌸🙏🌸
          </p>

        </section>


        {/* =========================
            UPCOMING EVENTS
        ========================= */}

        <section
          className="upcoming-events"
          id="upcoming-events"
        >

          <div className="section-title">

            <span>Amirtha Ulaga Events</span>

            <h2>
              Weekly & <strong>Monthly Events</strong>
            </h2>

            <p>
              Foundational trainings for Amirtha Ulagam, the
              Siddhars' Arul Ulaga trainings, and group worship
              events take place here.
            </p>

          </div>


          {/* NEXT EVENT COUNTDOWN */}

          <div className="next-event">

            <div className="next-event-content">

              <span className="next-event-label">
                Next Event
              </span>

              <h3>
                {upcomingEvents[0].title}
              </h3>

              <p>
                {upcomingEvents[0].description}
              </p>

            </div>


            <div className="countdown">

              {timeLeft.expired ? (

                <div className="event-live">
                  Training in progress
                </div>

              ) : (

                <>
                  <div className="count-box">
                    <strong>{timeLeft.days || 0}</strong>
                    <span>Days</span>
                  </div>

                  <div className="count-box">
                    <strong>{timeLeft.hours || 0}</strong>
                    <span>Hours</span>
                  </div>

                  <div className="count-box">
                    <strong>{timeLeft.minutes || 0}</strong>
                    <span>Minutes</span>
                  </div>

                  <div className="count-box">
                    <strong>{timeLeft.seconds || 0}</strong>
                    <span>Seconds</span>
                  </div>
                </>

              )}

            </div>

          </div>


          {/* EVENT CARDS */}

          <div className="events-grid">

            {upcomingEvents.map((event) => (

              <article
                className="event-card"
                key={event.id}
              >

                {/* Date */}

                <div className="event-date">

                  <strong>{event.day}</strong>

                  <span>{event.month}</span>

                  <small>{event.year}</small>

                </div>


                {/* Content */}

                <div className="event-content">

                  <span className="event-category">
                    {event.category}
                  </span>

                  <h3>
                    {event.title}
                  </h3>

                  <p>
                    {event.description}
                  </p>


                  <div className="event-info">

                    <div>
                      <span>◷</span>
                      {event.time}
                    </div>

                    <div>
                      <span>⌖</span>
                      {event.location}
                    </div>

                  </div>


                 <button
              type="button"
              className="buy-book-btn"
              onClick={goToRegister}
            >
              Register Here
            </button>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =========================
            SPIRITUAL QUOTE
        ========================= */}

        <section className="events-quote">

          <div className="quote-symbol">
            ❝
          </div>

          <blockquote>
            "Om Sri Guruve Saranam"
          </blockquote>

          <span>
            🙏 Natpavi 🙏
          </span>

        </section>


        {/* =========================
            PAST EVENTS
        ========================= */}

        <section className="past-events">

          <div className="section-title">

            <span>Arul Ulaga Trainings</span>

            <h2>
              Four Thursdays & <strong>Kanthamirtha Yogams</strong>
            </h2>

            <p>
              Various yoga trainings and Kanthamirtha Yogam
              trainings for the Siddhars' Arul Ulagam.
            </p>

          </div>


          <div className="past-events-grid">

            {pastEvents.map((event) => (

              <div
                className="past-event-card"
                key={event.id}
              >

                <div className="past-icon">
                  ✦
                </div>

                <div>

                  <span>
                    {event.category}
                  </span>

                  <h3>
                    {event.title}
                  </h3>

                  <p>
                    {event.date}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =========================
            YEARLY EVENTS
        ========================= */}

        <section className="past-events">

          <div className="section-title">

            <span>Om Sathguru Sri Kakabhujandar Devaya Namaha 🌸🙏🌸</span>

            <h2>
              Annual <strong>Events</strong>
            </h2>

            <p>
              Special Cosmic Kanthamirtha Yogam trainings are
              given during each year's solar and lunar eclipse
              periods.
            </p>

          </div>


          <div className="past-events-grid">

            <div className="past-event-card">

              <div className="past-icon">
                ☀
              </div>

              <div>

                <span>
                  Solar Eclipse Time
                </span>

                <h3>
                  Solar Eclipse Time Cosmic Kanthamirtha Yogam
                </h3>

                <p>
                  Special Cosmic Kanthamirtha Yogam training
                  for men
                </p>

              </div>

            </div>


            <div className="past-event-card">

              <div className="past-icon">
                ☾
              </div>

              <div>

                <span>
                  Lunar Eclipse Time
                </span>

                <h3>
                  Lunar Eclipse Time Cosmic Kanthamirtha Yogam
                </h3>

                <p>
                  Special Cosmic Kanthamirtha Yogam training
                  for women
                </p>

              </div>

            </div>

          </div>

        </section>


      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-content">

          <p>
            © {new Date().getFullYear()} Amirthalogam
            All Rights Reserved.
          </p>

          <a href="mailto:info@pothigaiatma.org">
            ✉ amirthalogam@gmail.com
          </a>

        </div>

      </footer>

    </>
  );
};

export default Ec1;
