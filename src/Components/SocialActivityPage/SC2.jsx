import React, { useState } from "react";
import "./SC2.css";

import plant1 from "../../assets/peacock.jpeg";
import plant2 from "../../assets/gplant.jpeg";
import plant3 from "../../assets/nature3.webp";
import plant4 from "../../assets/research1.jpeg";
import pdf from "../../assets/nature_kingdom.pdf"

const SC2 = () => {
  const [showPdf, setShowPdf] = useState(false);

  const initiatives = [
    {
      image: plant1,
      title: "National Bird Peacock Rescue",
      content:
        "A National Bird Peacock was found injured and unable to fly after coming into contact with an electric line near a coconut grove on the eastern side of the Tenkasi Main Road at Kandamangalam, Ambai. With the support of The Nature Kingdom Foundation – இயற்கை ராஜ்ஜியம், the injured peacock was rescued and safely transported to the Forest Department veterinary hospital for treatment. The Nature Kingdom Foundation sincerely thanks the Forest Department officials, volunteers, and everyone involved in the successful rescue and rehabilitation of the national bird.",
    },
    {
      image: plant2,
      title: "Recovery of Traditional Tree Protection Nets",
      content:
        "On 27 July 2020, stolen protective nets placed around traditional tree saplings at Courtallam–Mathalamparai were reported to the Police Department. Following the complaint, the police promptly investigated the matter, identified the person responsible, and recovered the stolen nets. Local residents, volunteers, and the Police Department reaffirmed their commitment to protecting traditional trees and preserving nature.",
    },
    {
      image: plant3,
      title: "Village Green Initiative – Mathalamparai",
      content:
        "The Village Green Initiative was proposed on 27 July 2020 to create a healthier and more positive community environment in Mathalamparai. The initiative classifies village development into three stages: Red – Negative, Yellow – Neutral, and Green – Positive. The goal is to transform communities into Green Villages with improved physical and mental well-being. Nature-based physical and psychological training programs, including Sun and Moon-based practices, are planned for children and young people in natural surroundings.",
    },
    {
      image: plant4,
      title: "Vivekananda Middle School – Special Training Programme",
      content:
        "The Nature Kingdom Foundation – இயற்கை ராஜ்ஜியம் organized a special 10-week training programme at Vivekananda Middle School, focusing on Government and Competitive Examination preparation. The programme covered Indian Polity and Constitution, Indian History and Culture, Indian Geography, Indian Economy, Indian National Movement, Tamil Nadu History and Development, Tamil Nadu Growth and Governance, General Science, Current Affairs, General Knowledge, Revision and Full-Length Examinations.",
    },
  ];

  return (
    <section className="sc2-section">
      <div className="sc2-container">

        {/* Heading */}
        <div className="sc2-heading">
          <span className="sc2-small-title">OUR INITIATIVE</span>

          <h2> The Nature Kingdom</h2>

          <div className="sc2-line"></div>

          <p>
            Nurturing nature today for a greener and healthier tomorrow.
          </p>
        </div>

        {/* Scroll Cards */}
        <div className="sc2-scroll-wrapper">
          <div className="sc2-cards">

            {initiatives.map((item, index) => (
              <div className="sc2-card" key={index}>

                {/* Image */}
                <div className="sc2-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="sc2-image"
                  />
                </div>

                {/* Content Bottom */}
                <div className="sc2-card-content">

                  <h3>{item.title}</h3>

                  <p>{item.content}</p>

                  <span className="sc2-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Explore More Button */}
      <button
        className="sc2-explore-btn"
        onClick={() => setShowPdf(true)}
      >
        Click Here For Detail View
      </button>

      {/* PDF Viewer */}
      {showPdf && (
        <div className="sc2-pdf-overlay">

          <div className="sc2-pdf-container">

            {/* PDF Header */}
            <div className="sc2-pdf-header">
              <h3>Nature Kingdom Foundation</h3>

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
  );
};

export default SC2;
