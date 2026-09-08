import React from 'react'
import { useState } from "react";
import { useEffect} from "react";

import './HContent.css'
import {FaBookOpen, FaHandHoldingHeart,} from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { FaPeopleGroup,FaPersonPraying } from "react-icons/fa6";
import { GiMeditation } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import kamuskarimg from '../../assets/vamuskar.jpeg'
import schoolTrainingImg from "../../assets/nathantha.jpg";
import pasumaiImg from "../../assets/green.jpeg";
import annadhanamImg from "../../assets/food2.png";
import blanketImg from "../../assets/help1.png";
import onlineClassImg from "../../assets/onlineclass1.jpg";
import meditationImg from "../../assets/sooryakalaimg.jpg";
import Hcontent2 from './Hcontent2';


const Hcontent1 = () => {
const visionPoints = [
  "Spread spiritual awareness and positive values",
  "Promote inner peace through yoga and meditation",
  "Guide young people with good values and life skills",
  "Serve society through compassion and community support",
  "Build a community filled with love, peace, and unity",
];

const [activeEvent, setActiveEvent] = useState(0);

useEffect(() => {
  const autoSlide = setInterval(() => {
    nextEvent();
  }, 4000);

  return () => clearInterval(autoSlide);
}, [activeEvent]);

const events = [
  {
    title: "School Students Training",
    subtitle: "Body & Mind Wellness Program",
    description:
      "Training sessions were conducted for school students to support physical fitness, mental well-being, discipline, good habits, and positive values.",
    image: schoolTrainingImg,
  },
  {
    title: "Village Green Project",
    subtitle: "Pasumai Initiative",
    description:
      "A village-focused green initiative that encourages nature care, environmental awareness, and a healthier community.",
    image: pasumaiImg,
  },
  {
    title: "Annadhanam Service",
    subtitle: "Food Service for the Community",
    description:
      "Food service activities were conducted with the support of Gurukul members to serve people with care and compassion.",
    image: annadhanamImg,
  },
  {
    title: "Winter Blanket Distribution",
    subtitle: "Support for People in Need",
    description:
      "Blankets were distributed to support people in need during the winter season through community service activities.",
    image: blanketImg,
  },
  {
    title: "Online Spiritual Classes",
    subtitle: "Learning Beyond Boundaries",
    description:
      "Spiritual training sessions were conducted online through Zoom and Google Meet, connecting devotees from different places.",
    image: onlineClassImg,
  },
  {
    title: "Full Moon Group Meditation",
    subtitle: "Prayer & Spiritual Practice",
    description:
      "Special group prayer and meditation sessions were conducted during full-moon days and other meaningful occasions.",
    image: meditationImg,
  },
];

const previousEvent = () => {
  setActiveEvent((prev) => (prev === 0 ? events.length - 1 : prev - 1));
};

const nextEvent = () => {
  setActiveEvent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
};
  return (
    <div className='Hcontent1-container'>
       <div className="service-logos">
  <div className="service-card">
    <GiMeditation className="service-card-logo" />

    <div className="contents">
      <h3>Yogam & Meditation</h3>
      <p>
        Find inner peace through guided prayer and move closer to calmness,
        faith, and balance.
      </p>
    </div>
  </div>

  <div className="service-card">
    <GiOpenBook className="service-card-logo" />

    <div className="contents">
      <h3>Education & Training</h3>
      <p>
        Learn meaningful values and practical life skills for a better future.
      </p>
    </div>
  </div>

  <div className="service-card">
    <FaHandHoldingHeart className="service-card-logo" />

    <div className="contents">
      <h3>Social Service</h3>
      <p>
        Serving people with compassion through care, support, and community
        service.
      </p>
    </div>
  </div>

  <div className="service-card">
    <MdGroups className="service-card-logo" />

    <div className="contents">
      <h3>Spiritual Community</h3>
      <p>
        Join a caring community that grows together in peace, love, and faith.
      </p>
    </div>
  </div>
</div>

<section className="vision-section">
  <div className="vision-heading">
    <span>Our Vision</span>
    <h2>Building a Peaceful and United Community</h2>
    <div className="heading-line"></div>
  </div>

  <div className="vision-card">
    {/* Left Side */}
    <div className="vision-left">
      <ul className="vision-list">
        {visionPoints.map((point, index) => (
          <li key={index}>
            <FaCheckCircle className="check-icon" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Right Side */}
    <div className="vision-right">
      <div className="vision-contents">
        <span className="vision-small-title">SPIRITUAL GUIDE</span>

        {/* <h3>Pothigai Siddhar</h3> */}

        <div className="small-line"></div>

        <p>
          A spiritual guide who inspires people to live with love, peace,
          compassion, and selfless service.
        </p>

        <button className="vision-btn" ><a href='about' style={{textDecoration:"none",color:"white"}}>Learn More About Him</a></button>
      </div>

      <div className="kumuskarimg">
        <img src={kamuskarimg} alt="Pothigai Siddhar" />
      </div>
    </div>
  </div>
</section>
<section className="events-section" id='events'>
  <div className="events-heading">
    <span>Our Events</span>
    <h2>Serving, Learning and Growing Together</h2>
    <p>
      Our activities bring spiritual learning, wellness, service, and
      community care to people of all ages.
    </p>
    <div className="heading-line"></div>
  </div>

  <div className="event-slider-wrapper">
    <button
      className="event-arrow event-arrow-left"
      onClick={previousEvent}
      aria-label="Previous event"
    >
      <FaChevronLeft />
    </button>

    <div className="event-slider">
      {events.map((event, index) => {
        let position = "hidden";

        if (index === activeEvent) {
          position = "active";
        } else if (
          index === (activeEvent - 1 + events.length) % events.length
        ) {
          position = "previous";
        } else if (index === (activeEvent + 1) % events.length) {
          position = "next";
        }

        return (
          <div className={`event-slide ${position}`} key={event.title}>
            <div className="event-photo">
              <img src={event.image} alt={event.title} />
            </div>

            <div className="event-details">
              <span>{event.subtitle}</span>
              <h3>{event.title}</h3>
              <div className="event-small-line"></div>
              <p>{event.description}</p>
              <button className="event-read-btn"><a href='events' style={{textDecoration:"none"}}>Learn More</a></button>
            </div>
          </div>
        );
      })}
    </div>

    <button
      className="event-arrow event-arrow-right"
      onClick={nextEvent}
      aria-label="Next event"
    >
      <FaChevronRight />
    </button>
  </div>

  <div className="event-dots">
    {events.map((event, index) => (
      <button
        key={event.title}
        className={index === activeEvent ? "dot active-dot" : "dot"}
        onClick={() => setActiveEvent(index)}
        aria-label={`Show ${event.title}`}
      ></button>
    ))}
  </div>
</section>

<Hcontent2/>
    </div>
  )
}

export default Hcontent1