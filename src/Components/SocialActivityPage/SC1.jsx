import "./SC1.css";
import Navbar from "../HomePageComponents/Navbar";
import { HashLink } from "react-router-hash-link";
import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.png";
import food3 from "../../assets/f3.png";
import food4 from "../../assets/f4.png";

import blanket1 from "../../assets/help1.png";
import blanket2 from "../../assets/y2.jpg";
import blanket3 from "../../assets/wave.png";
import blanket4 from"../../assets/wave.png";

import preg1 from "../../assets/wave.png";
import preg2 from "../../assets/wave.png";
import preg3 from "../../assets/wave.png";
import preg4 from "../../assets/wave.png";

const activities = [
  {
    number: "01",
    title: "Community Food Service",
    content:
      "In collaboration with Arutsudar Trust, our volunteers regularly organize Annadhanam (community food service) at Samayapuram. Nutritious meals are distributed with love and compassion to those in need, creating a culture of sharing and humanity.",

    images: [food1, food2, food3, food4],
  },

  {
    number: "02",
    title: "Blanket Distribution",
    content:
      "During winter seasons, our volunteers identify homeless and underprivileged people across Chennai and distribute blankets to protect them from harsh weather conditions.",

    images: [blanket1, blanket2, blanket3, blanket4],
  },

  {
    number: "03",
    title: "Pregnancy Wellness Program",
    content:
      "Working together with the Kadayan Primary Health Centre, Tenkasi District, weekly wellness sessions are conducted for pregnant women focusing on breathing practices, relaxation, and emotional well-being.",

    images: [preg1, preg2, preg3, preg4],
  },
];

export default function SC1() {
  return (
    <>
      <Navbar />

      <section className="social-page">

        <div className="social-title">

          <span>Social Responsibility</span>

          <h1>
            Serving Humanity Through
            <br />
            Compassion & Spiritual Values
          </h1>

          <p>
            Pothigai Atma Gnana Kudil believes spirituality becomes meaningful
            only when it transforms into service. Our volunteers actively
            participate in community welfare programs that promote health,
            dignity and kindness.
          </p>

        </div>

        <div className="timeline">

          {activities.map((item) => (

            <div className="timeline-item" key={item.number}>

              <div className="timeline-number">
                {item.number}
              </div>

              <div className="timeline-card">

                <h2>{item.title}</h2>

                <p>{item.content}</p>

                <div className="activity-gallery">

  {item.images.map((img, index) => (

    <img
      key={index}
      src={img}
      alt={item.title}
    />

  ))}

</div>

              </div>

            </div>

          ))}

        </div>

        <div className="impact">

          <div>
            <h2>1500+</h2>
            <p>People Served</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Families Supported</p>
          </div>

          <div>
            <h2>300+</h2>
            <p>Women Benefited</p>
          </div>

          <div>
            <h2>100+</h2>
            <p>Volunteers</p>
          </div>

        </div>

        <div className="volunteer">

          <h2>
            Every Small Act of Kindness Creates a Better Tomorrow
          </h2>

          <p>
            Join our volunteer community and become part of meaningful social
            service initiatives.
          </p>

        <HashLink  to="/#register" className="volunteer-btn">
         Become a Volunteer
       </HashLink>
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
  );
}