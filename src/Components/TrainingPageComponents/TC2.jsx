import React from "react";
import { useNavigate } from "react-router-dom";
import "./TC2.css";
import { useRef } from "react";


import mathematics from "../../assets/lifemaths.jpg";
import english from "../../assets/life english.jpg";
import tamil from "../../assets/life tamil.jpg";
import society from "../../assets/life_society.jpg";
import science from "../../assets/life_science.jpg";
import architecture from "../../assets/architecture&technology.png";
import culinary from "../../assets/cooking_class.jpg";
import drawing from "../../assets/art_class.jpg";
import healthcare from "../../assets/life_medicine.jpg";
import yoga from "../../assets/life_yoga.jpg";
import TC3 from "./TC3";

const TC2 = () => {
  const navigate = useNavigate();
  const programsScrollRef = useRef(null);
    const scrollCards = (direction) => {
    if (programsScrollRef.current) {
      const scrollAmount = 320;
       programsScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };  

  const programs = [
    {
      id: 1,
      image: mathematics,
      title: "Life Mathematics",
      description:
        "Learn practical mathematics and understand how numbers are used in everyday life.",
    },
    {
      id: 2,
      image: english,
      title: "Life English",
      description:
        "Develop English language skills for effective communication in everyday life.",
    },
    {
      id: 3,
      image: tamil,
      title: "Life Tamil",
      description:
        "Learn and explore the Tamil language, literature, and its importance in daily life.",
    },
    {
      id: 4,
      image: society,
      title: "Life & Society",
      description:
        "Understand society, relationships, culture, and our responsibilities as individuals.",
    },
    {
      id: 5,
      image: science,
      title: "Life Science",
      description:
        "Explore science through everyday experiences and understand the world around us.",
    },
    {
      id: 6,
      image: architecture,
      title: "Architecture & Technology",
      description:
        "Discover architecture, construction, technology, and their applications in everyday life.",
    },
    {
      id: 7,
      image: culinary,
      title: "Culinary Arts",
      description:
        "Learn cooking techniques, traditional food preparation, and the art of culinary skills.",
    },
    {
      id: 8,
      image: drawing,
      title: "Drawing & Art",
      description:
        "Develop creativity through drawing, painting, artistic expression, and visual design.",
    },
    {
      id: 9,
      image: healthcare,
      title: "Healthcare",
      description:
        "Learn about health, wellness, basic healthcare practices, and maintaining a healthy lifestyle.",
    },
    {
      id: 10,
      image: yoga,
      title: "Yoga",
      description:
        "Practice yoga to improve physical fitness, flexibility, concentration, and mental well-being.",
    },
  ];

  return (
    <>
    <section className="programs-section">

      {/* Heading */}
      <div className="programs-heading">
        <span className="programs-small-title">
          Explore & Learn
        </span>

        <h2>
          Our <strong>Learning Programs</strong>
        </h2>

        <p>
          Amirthalogam Basic Education integrates functional literacy with practical daily application across four core pillars:
        </p>
      </div>

      {/* Cards */}
     {/* Cards */}
<div className="programs-wrapper">

  {/* LEFT ARROW */}
  <button
    className="program-arrow program-arrow-left"
    onClick={() => scrollCards("left")}
    aria-label="Previous programs"
  >
    &#10094;
  </button>

  <div
    className="programs-scroll"
    ref={programsScrollRef}
  >

    {programs.map((item) => (
      <div className="program-card" key={item.id}>

        {/* Image */}
        <div className="program-image">
          <img src={item.image} alt={item.title} />

          <span className="program-number">
            {String(item.id).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="program-content">

          <h3>{item.title}</h3>

          <p>{item.description}</p>

        </div>

      </div>
    ))}

  </div>

  {/* RIGHT ARROW */}
  <button
    className="program-arrow program-arrow-right"
    onClick={() => scrollCards("right")}
    aria-label="Next programs"
  >
    &#10095;
  </button>

</div>


    </section>
    <TC3 />
    </>
  );
};

export default TC2;