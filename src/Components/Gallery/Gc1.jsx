import React, { useState } from "react";
import Navbar from "../HomePageComponents/Navbar";
import "./Gc1.css";

import gallery1 from "../../assets/ChatGPT Image Jul 2, 2026, 10_15_51 AM.png";
import gallery2 from "../../assets/ChatGPT Image Jul 3, 2026, 01_04_28 PM.png";
import gallery3 from "../../assets/ChatGPT Image Jul 3, 2026, 11_02_34 AM.png";
import gallery4 from "../../assets/instituteimg_1.jpg";
import gallery5 from "../../assets/instituteimg_2.jpg";
import gallery6 from "../../assets/ChatGPT Image Jul 3, 2026, 11_02_34 AM.png";
import gallery7 from "../../assets/ChatGPT Image Jul 3, 2026, 10_22_06 AM.png";
import gallery8 from "../../assets/ChatGPT Image Jun 26, 2026, 03_43_35 PM.png";

const Gc1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const galleryImages = [
    {
      image: gallery1,
      category: "Yoga",
      title: "Morning Yoga"
    },
    {
      image: gallery2,
      category: "Meditation",
      title: "Mindful Meditation"
    },
    {
      image: gallery3,
      category: "Yoga",
      title: "Peaceful Practice"
    },
    {
      image: gallery4,
      category: "Wellness",
      title: "Healthy Living"
    },
    {
      image: gallery5,
      category: "Meditation",
      title: "Inner Peace"
    },
    {
      image: gallery6,
      category: "Yoga",
      title: "Yoga Session"
    },
    {
      image: gallery7,
      category: "Wellness",
      title: "Wellness Journey"
    },
    {
      image: gallery8,
      category: "Yoga",
      title: "Balance & Harmony"
    }
  ];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === filter
        );

  return (
    <>
      <Navbar />

      <section className="yoga-gallery">

        {/* Gallery Content */}
        <div className="yoga-gallery-container">

          <div className="yoga-gallery-intro">
            <span>OUR JOURNEY</span>

            <h2>
              Moments of <strong>Peace & Wellness</strong>
            </h2>

            <p>
              Discover our yoga sessions, meditation practices
              and wellness experiences designed to bring balance
              to body, mind and soul.
            </p>
          </div>

          {/* Filters */}
          <div className="yoga-gallery-filters">

            {["All", "Yoga", "Meditation", "Wellness"].map(
              (category) => (
                <button
                  key={category}
                  className={
                    filter === category ? "active" : ""
                  }
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              )
            )}

          </div>

          {/* Gallery */}
          <div className="yoga-gallery-grid">

            {filteredImages.map((item, index) => (

              <div
                className="yoga-gallery-card"
                key={index}
                onClick={() =>
                  setSelectedImage(item.image)
                }
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="yoga-gallery-overlay">

                  <div className="yoga-gallery-info">

                    <span>{item.category}</span>

                    <h3>{item.title}</h3>

                  </div>

                  <div className="yoga-gallery-plus">
                    +
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="yoga-lightbox"
            onClick={() => setSelectedImage(null)}
          >

            <button
              className="yoga-lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Yoga gallery preview"
            />

          </div>
        )}

      </section>
    </>
  );
};

export default Gc1;