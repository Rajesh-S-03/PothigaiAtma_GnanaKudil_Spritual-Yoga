import React, { useEffect, useState } from "react";
import Navbar from "../HomePageComponents/Navbar";
import "./Ec1.css";

const Ec1 = () => {
  // =========================
  // UPCOMING EVENTS
  // =========================

  const upcomingEvents = [
    {
      id: 1,
      day: "ஒவ்வொரு",
      month: "ஞாயிறு",
      year: "வாரம்",
      title: "பஞ்சபூத யோகம்",
      category: "வாராந்திர நிகழ்வு",
      description:
        "ஒவ்வொரு ஞாயிற்றுக்கிழமையும் அமிர்த உலகத்திற்கான அடிப்படை பயிற்சியாக பஞ்சபூத யோகம் பயிற்சி அளிக்கப்படும். இதில் தேர்ச்சி பெற்றவர்களுக்கு அடுத்தடுத்த மாதாந்திர மற்றும் வருடாந்திர அருள் உலக பயிற்சிகள் அளிக்கப்படும்.",
      time: "ஒவ்வொரு ஞாயிற்றுக்கிழமையும்",
      location: "அமிர்த உலகம்",
      date: "2026-09-13T06:00:00",
    },

    {
      id: 2,
      day: "01",
      month: "வியாழன்",
      year: "மாதம்",
      title: "சதுர் வியாழப் பயிற்சிகள்",
      category: "மாதாந்திர நிகழ்வு",
      description:
        "ஒவ்வொரு தமிழ் மாத வியாழக்கிழமையும் சித்தர்கள் அருள் உலக பயிற்சிகள் அளிக்கப்படும். முதல் வியாழன் – சூரிய கால யோகம், இரண்டாம் வியாழன் – சந்திர கால யோகம், மூன்றாம் வியாழன் – நாதாந்த யோகம், நான்காம் வியாழன் – ஆதார சக்கர மலர்ச்சி யோகம்.",
      time: "ஒவ்வொரு தமிழ் மாத வியாழக்கிழமையும்",
      location: "அமிர்த உலகம்",
      date: "2026-09-17T06:00:00",
    },

    {
      id: 3,
      day: "பௌர்",
      month: "ணமி",
      year: "காலம்",
      title: "பூரணி கால கூட்டு வழிபாடு",
      category: "மாதாந்திர நிகழ்வு",
      description:
        "ஒவ்வொரு தமிழ் மாத பௌர்ணமி காலங்களிலும் சித்தர்கள் அருள் உலகத்திற்கான கூட்டு வழிபாடு நிகழ்வு அமைந்திருக்கும்.",
      time: "ஒவ்வொரு தமிழ் மாத பௌர்ணமி காலம்",
      location: "அமிர்த உலகம்",
      date: "2026-09-26T18:00:00",
    },

    {
      id: 4,
      day: "காந்த",
      month: "அமிர்த",
      year: "யோகம்",
      title: "காந்தாமிர்த யோகம்",
      category: "மாதாந்திர நிகழ்வு",
      description:
        "சூரிய காந்த அமிர்த யோகம் – ஒவ்வொரு தமிழ் மாத பௌர்ணமி கால காலை வேளையில் பயிற்சி அளிக்கப்படும். சந்திர காந்த அமிர்த யோகம் – ஒவ்வொரு பௌர்ணமி கால மாலை வேளையில் பயிற்சி அளிக்கப்படும். அக்னி காந்த அமிர்த யோகம் – ஒவ்வொரு தமிழ் அமாவாசை கால மதிய வேளையில் பயிற்சி அளிக்கப்படும்.",
      time: "காலை / மாலை / மதியம்",
      location: "அமிர்த உலகம்",
      date: "2026-09-26T06:00:00",
    },

    {
      id: 5,
      day: "சூரிய",
      month: "கிரகணம்",
      year: "வருடாந்திரம்",
      title: "பிரபஞ்ச காந்தாமிர்த யோகம்",
      category: "வருடாந்திர நிகழ்வு",
      description:
        "ஒவ்வொரு ஆண்டின் சூரிய கிரகண காலங்களில் ஆடவர்களுக்கான பிரத்யேக பிரபஞ்ச காந்தாமிர்த யோகம் பயிற்சி அளிக்கப்படும்.",
      time: "சூரிய கிரகண காலம்",
      location: "அமிர்த உலகம்",
      date: "2026-09-01T06:00:00",
    },

    {
      id: 6,
      day: "சந்திர",
      month: "கிரகணம்",
      year: "வருடாந்திரம்",
      title: "பிரபஞ்ச காந்தாமிர்த யோகம்",
      category: "வருடாந்திர நிகழ்வு",
      description:
        "ஒவ்வொரு ஆண்டின் சந்திர கிரகண காலங்களில் பெண்களுக்கான பிரத்யேக பிரபஞ்ச காந்தாமிர்த யோகம் பயிற்சி அளிக்கப்படும்.",
      time: "சந்திர கிரகண காலம்",
      location: "அமிர்த உலகம்",
      date: "2026-09-01T18:00:00",
    },
  ];

  // =========================
  // PAST EVENTS
  // =========================

  const pastEvents = [
    {
      id: 1,
      title: "சூரிய கால யோகம்",
      date: "முதல் வியாழன்",
      category: "சதுர் வியாழப் பயிற்சி",
    },
    {
      id: 2,
      title: "சந்திர கால யோகம்",
      date: "இரண்டாம் வியாழன்",
      category: "சதுர் வியாழப் பயிற்சி",
    },
    {
      id: 3,
      title: "நாதாந்த யோகம்",
      date: "மூன்றாம் வியாழன்",
      category: "சதுர் வியாழப் பயிற்சி",
    },
    {
      id: 4,
      title: "ஆதார சக்கர மலர்ச்சி யோகம்",
      date: "நான்காம் வியாழன்",
      category: "சதுர் வியாழப் பயிற்சி",
    },
    {
      id: 5,
      title: "சூரிய காந்த அமிர்த யோகம்",
      date: "பௌர்ணமி – காலை",
      category: "காந்தாமிர்த யோகம்",
    },
    {
      id: 6,
      title: "சந்திர காந்த அமிர்த யோகம்",
      date: "பௌர்ணமி – மாலை",
      category: "காந்தாமிர்த யோகம்",
    },
    {
      id: 7,
      title: "அக்னி காந்த அமிர்த யோகம்",
      date: "அமாவாசை – மதியம்",
      category: "காந்தாமிர்த யோகம்",
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
      <Navbar />

      <main className="events-page">

        {/* =========================
            HERO
        ========================= */}

        {/*
        <section className="events-hero">

          <div className="events-hero-overlay"></div>

          <div className="events-hero-content">

            <span className="events-label">
              ✦ அமிர்த உலக நிகழ்வுகள் ✦
            </span>

            <h1>
              அமிர்த உலக <strong>நிகழ்வுகள்</strong>
            </h1>

            <p>
              வாராந்திர, மாதாந்திர மற்றும் வருடாந்திர அருள் உலக
              பயிற்சிகள் மற்றும் ஆன்மீக நிகழ்வுகளில் இணைந்து
              அருள் அனுபவத்தை பெறுங்கள்.
            </p>

            <a
              href="#upcoming-events"
              className="events-hero-btn"
            >
              நிகழ்வுகளை காண்க
              <span>↓</span>
            </a>

          </div>

        </section>
        */}


        {/* =========================
            INTRO
        ========================= */}

        <section className="events-intro">

          <span>அமிர்த உலக நிகழ்வுகள்</span>

          <h2>
            அருள் உலக <strong>நிகழ்வுகள்</strong>
          </h2>

          <p>
            ஓம் ஸ்ரீ குருவே சரணம் 🙏
            <br />
            நற்பவி 🙏
            <br />
            ஓம் ஸ்ரீ அகத்தீசாய நமோ நமஹா 🌸🙏🌸
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

            <span>அமிர்த உலக நிகழ்வுகள்</span>

            <h2>
              வாராந்திர & <strong>மாதாந்திர நிகழ்வுகள்</strong>
            </h2>

            <p>
              அமிர்த உலகத்திற்கான அடிப்படை பயிற்சிகள்,
              சித்தர்கள் அருள் உலக பயிற்சிகள் மற்றும்
              கூட்டு வழிபாட்டு நிகழ்வுகள் நடைபெறும்.
            </p>

          </div>


          {/* NEXT EVENT COUNTDOWN */}

          <div className="next-event">

            <div className="next-event-content">

              <span className="next-event-label">
                அடுத்த நிகழ்வு
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
                  பயிற்சி நடைபெறுகிறது
                </div>

              ) : (

                <>
                  <div className="count-box">
                    <strong>{timeLeft.days || 0}</strong>
                    <span>நாட்கள்</span>
                  </div>

                  <div className="count-box">
                    <strong>{timeLeft.hours || 0}</strong>
                    <span>மணிநேரம்</span>
                  </div>

                  <div className="count-box">
                    <strong>{timeLeft.minutes || 0}</strong>
                    <span>நிமிடங்கள்</span>
                  </div>

                  <div className="count-box">
                    <strong>{timeLeft.seconds || 0}</strong>
                    <span>விநாடிகள்</span>
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
                    className="register-btn"
                    onClick={() =>
                      alert(
                        `${event.title} நிகழ்விற்கான பதிவு விரைவில் தொடங்கும்.`
                      )
                    }
                  >
                    பதிவு செய்ய
                    <span>→</span>
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
            "ஓம் ஸ்ரீ குருவே சரணம்"
          </blockquote>

          <span>
            🙏 நற்பவி 🙏
          </span>

        </section>


        {/* =========================
            PAST EVENTS
        ========================= */}

        <section className="past-events">

          <div className="section-title">

            <span>அருள் உலக பயிற்சிகள்</span>

            <h2>
              சதுர் வியாழ & <strong>காந்தாமிர்த யோகங்கள்</strong>
            </h2>

            <p>
              சித்தர்கள் அருள் உலகத்திற்கான பல்வேறு
              யோகப் பயிற்சிகள் மற்றும் காந்தாமிர்த யோகப்
              பயிற்சிகள்.
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

            <span>ஓம் சத்குரு ஸ்ரீ காகபுஜண்ட தேவாய நமஹ 🌸🙏🌸</span>

            <h2>
              வருடாந்திர <strong>நிகழ்வுகள்</strong>
            </h2>

            <p>
              ஒவ்வொரு ஆண்டின் சூரிய மற்றும் சந்திர கிரகண
              காலங்களில் பிரத்யேக பிரபஞ்ச காந்தாமிர்த யோகம்
              பயிற்சிகள் அளிக்கப்படும்.
            </p>

          </div>


          <div className="past-events-grid">

            <div className="past-event-card">

              <div className="past-icon">
                ☀
              </div>

              <div>

                <span>
                  சூரிய கிரகண காலம்
                </span>

                <h3>
                  சூரிய கிரகண கால பிரபஞ்ச காந்தாமிர்த யோகம்
                </h3>

                <p>
                  ஆடவர்களுக்கான பிரத்யேக பிரபஞ்ச
                  காந்தாமிர்த யோகம் பயிற்சி
                </p>

              </div>

            </div>


            <div className="past-event-card">

              <div className="past-icon">
                ☾
              </div>

              <div>

                <span>
                  சந்திர கிரகண காலம்
                </span>

                <h3>
                  சந்திர கிரகண கால பிரபஞ்ச காந்தாமிர்த யோகம்
                </h3>

                <p>
                  பெண்களுக்கான பிரத்யேக பிரபஞ்ச
                  காந்தாமிர்த யோகம் பயிற்சி
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

export default Ec1;