import React from 'react'
import './Ac1.css'
import { HashLink } from "react-router-hash-link";
import bookImage from '../../assets/book.png'

const Ac1 = () => {
  return (
    <>


<section className="organization-section">

  <div className="organization-heading">
    <span>About the Organization</span>
    <h2>Pothigai Atma Gnana Kudil</h2>
    <div className="heading-line"></div>
  </div>

  {/* Introduction */}
  <div className="organization-card">
    <h3>Introduction</h3>
    <p>
      Pothigai Atma Gnana Kudil is a spiritual organization established in
      Pazhaya Kutralam, Tenkasi District, Tamil Nadu, to spread spiritual
      awareness through yoga, meditation, self-realization, and community
      service. Founded by <strong>Thiru. Vamuskar Ayya</strong>, the
      organization guides individuals towards a peaceful and meaningful life.
    </p>
  </div>

  {/* Founder */}
  <div className="organization-card">
    <h3>The Journey of the Founder</h3>

    <p>
      While preparing for the Civil Services examination, Thiru. Vamuskar
      Ayya developed a deep interest in spirituality through visits to
      temples, Jeeva Samadhis, and spiritual centers across Tamil Nadu.
      During the COVID-19 period, he began conducting online spiritual
      training sessions which later evolved into
      <strong> Pothigai Atma Gnana Kudil</strong>.
    </p>
  </div>

  {/* Purpose */}
  <div className="organization-card">
    <h3>Purpose</h3>

    <p>
      To preserve the timeless wisdom of the Siddhars and present it in a
      practical way for modern society, helping people discover inner peace,
      self-awareness, and spiritual enlightenment.
    </p>
  </div>

  {/* Goal */}
  <div className="organization-card">
    <h3>Goal</h3>

    <p>
      To guide individuals towards righteousness, prosperity, happiness,
      and spiritual fulfillment through Guru Kulam training, enabling
      personal growth and higher spiritual awareness.
    </p>
  </div>

  {/* Management */}
  <div className="organization-card">
    <h3>Management Committee</h3>

    <div className="member-card">
      <h4>Founder & Managing Trustee</h4>
      <span>Thiru. Vamuskar Ayya</span>
      <small>Tenkasi, Tamil Nadu</small>

      <p>
        Provides spiritual leadership and oversees the vision, mission, and
        administration of the organization.
      </p>
    </div>

    <div className="member-card">
      <h4>Managing Director & Treasurer</h4>
      <span>Thirumathi. Karthika Amma</span>
      <small>Tenkasi, Tamil Nadu</small>

      <p>
        Responsible for financial management and the execution of spiritual
        and community service activities.
      </p>
    </div>
  </div>

  {/* Advisory */}
  <div className="organization-card">
    <h3>Advisory Committee</h3>

    <div className="advisor-grid">

      {/* <div className="advisor-card">
        <h4>International Coordination</h4>

        <span>Thiru. Nachiyappan Ayya</span>

        <small>Singapore</small>

        <p>
          Oversees international devotee coordination and provides
          administrative guidance.
        </p>
      </div> */}

      <div className="advisor-card">
        <h4>Finance & Audit Advisor</h4>

        <span>Thiru. Sundara Selvan Ayya</span>

        <small>Tamil Nadu, India</small>

        <p>
          Advises on financial planning, accounting, and auditing.
        </p>
      </div>

      <div className="advisor-card">
        <h4>Legal Advisor</h4>

        <span>Thiru. Rajagopal Ayya</span>

        <small>Telangana, India</small>

        <p>
          Coordinates devotees across India and provides legal guidance.
        </p>
      </div>

    </div>
  </div>

</section>

{/* ================= BOOK SECTION ================= */}

<section className="book-section">

    <div className="book-heading">

        <span>Published Book</span>

        <h2>Spreading Spiritual Wisdom Through Literature</h2>

        <p>
            As part of our mission to share spiritual knowledge with society,
            Pothigai Atma Gnana Kudil has published a book that presents
            timeless Siddhar wisdom, meditation practices, and practical
            guidance for peaceful living.
        </p>

    </div>

    <div className="book-container">

        <div className="book-image">

            <img src={bookImage} alt="Pothigai Atma Gnana Kudil Book" />

        </div>

        <div className="book-content">

            <h3>Journey Towards Inner Awakening</h3>

            <p>
                This book introduces readers to the path of self-discovery,
                spiritual awareness, meditation, and Siddhar philosophy in a
                simple and practical manner. It is designed to inspire people
                of all ages to experience inner peace and lead a meaningful
                life.
            </p>

            <ul>

                <li>✔ Siddhar Spiritual Wisdom</li>

                <li>✔ Meditation & Yoga Guidance</li>

                <li>✔ Practical Spiritual Practices</li>

                <li>✔ Suitable for Every Age Group</li>

            </ul>

            <HashLink smooth to="/#register" className="buy-book-btn">
              ✨Buy This Book
            </HashLink>

        </div>

    </div>

</section>

{/* ================= FEEDBACK ================= */}

<section className="feedback-section">

    <div className="feedback-heading">

        <span>Readers Experience</span>

        <h2>What Readers Say</h2>

    </div>

    <div className="feedback-grid">

        <div className="feedback-card">

            <p>
                "A wonderful spiritual guide that transformed my way of
                thinking. Every chapter is filled with practical wisdom."
            </p>

            <h4>★★★★★</h4>

            <span>R. Kumar</span>

        </div>

        <div className="feedback-card">

            <p>
                "Simple language, deep spiritual meaning, and inspiring life
                lessons. Highly recommended for every family."
            </p>

            <h4>★★★★★</h4>

            <span>Lakshmi Devi</span>

        </div>

        <div className="feedback-card">

            <p>
                "The meditation practices explained in this book brought peace
                and clarity to my daily life."
            </p>

            <h4>★★★★★</h4>

            <span>Suresh Kumar</span>

        </div>

    </div>

</section>
{/* Footer */}
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
  )
}

export default Ac1