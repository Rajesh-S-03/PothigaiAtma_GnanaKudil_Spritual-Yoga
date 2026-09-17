import React from "react";
import "./Ac1.css";
import pdf from "../../assets/pothigai.pdf"
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import bookImage from "../../assets/book.png";

const Ac1 = () => {
  const [showPdf, setShowPdf] = useState(false);
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/", {
      state: {
        scrollToRegister: true,
      },
    });
  };

  return (
    <>
      {/* ================= ORGANIZATION SECTION ================= */}

      <section className="organization-section">
        <div className="organization-heading">
          <span>About the Organization</span>

          <h2>Amirthalogam</h2>

          <div className="heading-line"></div>
        </div>

        {/* Introduction */}
        <div className="organization-card">
          <h3>Introduction</h3>

          <p>
            Introduction --

Amirthalogam focuses on three key areas of activity: spirituality, Education, and Social welfare. In the spiritual realm, 'Arul Amirtha' practices—designed to foster Virtue ( Aram) , Wealth (Porul) ,  Happiness (Inbam) , and ultimate liberation (Moksha) —are offered across four levels: Basic, Advanced, Higher, and Supreme.

Educational offerings encompass basic, Life-skills, Civil service, and Amirthalogam International education.

Social welfare initiatives are carried out through the 'Nature Kingdom' (Iyarkai Rajjiyam), the 'Pothigai Atma Gnana Kudil' and the Amirthalogam Social Welfare Service Centre.
<br></br>
அறிமுகம் --

அமிர்தலோகத்தின் மூன்று முக்கிய செயல்பாடுகள் ஆன்மீகம், கல்வியகம் மற்றும் சமூக நலம் ஆகும்.  ஆன்மீகத்தில் அறம் பொருள் இன்பம் வீடுபேறு நல்கும் அருள் அமிர்த பயிற்சிகளாக அடிப்படை, உயர்நிலை, மேல்நிலை மற்றும் உன்னத பயிற்சிகள் வழங்கப்படுகின்றன. 

கல்வியகத்தில் அடிப்படை, வாழ்வியல், அரசுப்பணி மற்றும் சர்வதேச கல்வி வழங்கப்படுகின்றன. 

சமூக நலத்தில்  இயற்கை ராஜ்ஜியம், பொதிகை ஆத்ம ஞானக் குடில் மற்றும் அமிர்த லோகம் சமூக நல சேவை மையம் மூலம் இதர சேவைகளும் நடைபெற்று வருகின்றன.
          </p>
        </div>

        {/* Founder */}
        <div className="organization-card" notranslate>
          <h3>The Journey of the Founder</h3>

          <p>
          From an early age, the founder pursued spirituality, education, and social welfare individually through dedicated organizations:
 * Pothigai Aathma Gnana Kudil for spiritual training and practices.
 * Vamuskar IAS Academy for coaching aspirants toward government service careers.
 * Nature Kingdom (Iyarkai Raajjiyam) to drive community and social welfare initiatives.
To integrate these three core pillars, the founder established Amirthalokam, which currently advances:
 * Spiritual Growth: Offering Arul Amirtha spiritual practices.
 * Education: Implementing structured, progressive learning frameworks.
 * Social Welfare: Channeling community welfare through the Amirthalokam Social Welfare Service Centre, uniting the efforts of Nature Kingdom (Iyarkai Raajjiyam) and Pothigai Aathma Gnana Kudil.
          </p>
        </div>

        {/* Purpose */}
        <div className="organization-card">
          <h3>Purpose</h3>

          <p>
            To preserve the timeless wisdom of the Siddhars and present it in a
            practical way for modern society, helping people discover inner
            peace, self-awareness, and spiritual enlightenment.
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

            <span translate="no">Thiru. Vamuskar Ayya (திரு.வமுஸ்கர் அய்யா)</span>

            <small>Tenkasi, Tamil Nadu</small>

            <p>
              Provides spiritual leadership and oversees the vision, mission,
              and administration of the organization.
            </p>
          </div>

          <div className="member-card">
            <h4>Managing Director & Treasurer</h4>

            <span>Thirumathi. Karthika Amma</span>

            <small>Tenkasi, Tamil Nadu</small>

            <p>
              Responsible for financial management and the execution of
              spiritual and community service activities.
            </p>
          </div>
        </div>

        {/* Advisory */}
        <div className="organization-card">
          <h3>Advisory Committee</h3>

          <div className="advisor-grid">
            <div className="advisor-card">
              <h4>Finance & Audit Advisor</h4>

              <span>Thiru. Sundara Selvan Ayya</span>

              <small>Tamil Nadu, India</small>

              <p>
                Advises on financial planning, accounting, and auditing.
              </p>
            </div>

            {/* <div className="advisor-card">
              <h4>Legal Advisor</h4>

              <span>Thiru. Rajagopal Ayya</span>

              <small>Telangana, India</small>

              <p>
                Coordinates devotees across India and provides legal guidance.
              </p>
            </div> */}
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
            <img
              src={bookImage}
              alt="Pothigai Atma Gnana Kudil Book"
            />
          </div>

          <div className="book-content">
            <h3 translate="no">Nayanmar Venba (நாயன்மார் வெண்பா)</h3>

            <p>
              This book introduces readers to the inspiring history of the
              63 Nayanmars, their devotion, spiritual journey, sacrifices,
              and contributions to Shaivism. It presents their remarkable
              lives and teachings in a simple and meaningful way, inspiring
              readers to understand devotion, faith, service, and the path
              of spiritual life.
            </p>

            <ul>
              <li>✔ History of the 63 Nayanmars</li>
              <li>✔ Lives and Devotion of the Nayanmars</li>
              <li>✔ Stories of Faith, Sacrifice & Service</li>
              <li>✔ Spiritual Teachings & Shaivite Heritage</li>
            </ul>

            {/* BUY BOOK BUTTON */}
            <button
              type="button"
              className="buy-book-btn"
              onClick={goToRegister}
            >
              ✨ Buy This Book
            </button>
          </div>
        </div>
        <button
        className="sc2-explore-btn"
        onClick={() => setShowPdf(true)}
      >
        Click Here For More detail About Pothigai Atma Gnana Kudil
      </button>
      {showPdf && (
              <div className="sc2-pdf-overlay">
      
                <div className="sc2-pdf-container">
      
                  {/* PDF Header */}
                  <div className="sc2-pdf-header">
                    <h3>POTHIGAI – ATMA GNANA KUDIL</h3>
      
                    <button
                      className="sc2-pdf-close"
                      onClick={() => setShowPdf(false)}
                    >
                      ✕
                    </button>
                  </div>
      
                  {/* PDF */}
                  <iframe
                    src={pdf}
                    title="Nature Kingdom Foundation PDF"
                    className="sc2-pdf-viewer"
                  />
      
                </div>
              </div>
            )}
      </section>

      {/* ================= FOOTER ================= */}

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

export default Ac1;