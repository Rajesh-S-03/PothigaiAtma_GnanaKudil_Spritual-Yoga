import "./SC1.css";
import Navbar from "../HomePageComponents/Navbar";
import { HashLink } from "react-router-hash-link";
import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.png";
import food3 from "../../assets/f3.png";
import food4 from "../../assets/f4.png";

import blanket1 from "../../assets/blanket.jpg";
import blanket2 from "../../assets/blanket2.jpeg";
import blanket3 from "../../assets/wave.png";
import blanket4 from"../../assets/wave.png";

import preg1 from "../../assets/preg1.jpg";
import preg2 from "../../assets/preg3.jpg";
import preg3 from "../../assets/preg33.jpg";
import preg4 from "../../assets/preg4.jpg";

import nat1 from "../../assets/nature1.webp";
import nat2 from "../../assets/nature2.webp";
import nat3 from "../../assets/nature3.webp";
import nat4 from "../../assets/nature4.webp";

import ias1 from "../../assets/ias_institute1.jpeg";
import ias2 from "../../assets/ias2.jpg";
import ias3 from "../../assets/ias3.jpg";
import ias4 from "../../assets/institute3.jpg";

import research1 from "../../assets/research1.jpeg";
import research2 from "../../assets/research2.jpeg";
import research3 from "../../assets/research3.jpg";
import research4 from "../../assets/research4.jpg";

import republic1 from "../../assets/rebublic1.jpg";
import republic2 from "../../assets/rebublic1.jpg";
import republic3 from "../../assets/rebublic1.jpg";
import republic4 from "../../assets/rebublic1.jpg";

import tree1 from "../../assets/traditionaltree1.jpg";
import tree2 from "../../assets/traditionaltree2.jpg";
import tree3 from "../../assets/traditionaltree3.jpg";
import tree4 from "../../assets/traditionaltree4.jpg";

import covid1 from "../../assets/covid1.jpeg";
import covid2 from "../../assets/covid2.jpg";
import covid3 from "../../assets/covid3.jpeg";
import covid4 from "../../assets/covid4.jpeg";

import SC2 from "./SC2";


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

    images: [blanket1, blanket2],
  },

  {
    number: "03",
    title: "Pregnancy Wellness Program",
    content:
      "Working together with the Kadayan Primary Health Centre, Tenkasi District, weekly wellness sessions are conducted for pregnant women focusing on breathing practices, relaxation, and emotional well-being.",

    images: [preg1, preg2, preg3,preg4],
  },
  
{
  number: "04",
  title: "Green & Nature Initiative",
  content:
    "Encouraging people to connect with nature through tree planting and greenery initiatives. By nurturing plants and protecting our natural surroundings, we create a healthier, greener, and more harmonious environment for future generations.",
  images: [nat1, nat2, nat3, nat4],
},
{
  number: "05",
  title: "Free IAS Training Programme",
  content:
    "A free IAS training programme was organised for rural students in association with Iyarkai Rajjiyam and Mettalam Pagai Vivekananda Higher Secondary School. An entrance examination was conducted for students interested in competitive examinations, followed by regular training and weekly tests. The programme covered subjects such as Indian History, Geography, Polity, Economics, Science, Mathematics, General Intelligence and Current Affairs. This initiative helped rural students improve their knowledge, build confidence and gain awareness about government jobs and competitive examinations.",
  images: [ias1, ias2, ias3, ias4],
},
{
  number: "06",
  title: "Exhibiting New Innovations and Presenting Research Papers",
  content:
    "Science Day was celebrated by Iyarkai Rajjiyam and Vivekananda School in Tenkasi under the leadership of the Tenkasi Block Educational Officer. The programme provided students with an opportunity to exhibit their new scientific innovations and present their research projects. Students actively participated in the event, demonstrating their creativity, scientific knowledge and innovative ideas. The initiative aimed to encourage scientific thinking, research interest and innovation among young learners.",
  images: [research1, research2, research3, research4],
},
{
  number: "07",
  title: "Republic Day Celebration",
  content:
    "Republic Day was celebrated on 26 January 2020 at Mathalam Parai Vivekananda Middle School with various special events. As part of the celebration, speech, essay writing and drawing competitions were conducted for students of Classes 6, 7 and 8, with enthusiastic participation.The programme was presided over by the Headmistress, Mrs. Sujatha. Special guest Mr. Sujith, M.Sc., B.Ed., who secured the state-level first rank in the 2019 Chemist examination conducted by the Tamil Nadu Public Service Commission, delivered a special address and was honoured with a memento.At the conclusion of the programme, Iyarkai Rajjiyam – Government Service Training Group honoured the top three students in each competition with Gold, Silver and Bronze medals, while the first-place winners were also presented with special trophies. The event concluded with a vote of thanks by Mr. Subramanian and the distribution of sweets to all students.",
  images: [republic1, republic2, republic3, republic4],
},
{
  number: "08",
  title: "Traditional Tree Plantation & Conservation Project",
  content:
    "The Traditional Tree Plantation and Conservation Project was launched on 21 March 2020, on the occasion of World Forest Day, at Mathalamparai Village, Tenkasi District.The project aims to plant, protect, and preserve traditional native trees along highways and public areas with the support of local youth and the community. More than 100 traditional tree saplings, including Banyan, Fig, Indian Blackberry, Mango, Vilvam, Neem, and other native species, were provided with the support of government officials and local organizations.The initiative received technical, logistical, and field support from the Forest Department, Highways Department, Rural Development Department, Police Department, local Panchayats, banks, schools, and environmental organizations.Forest officials, government representatives, teachers, community members, and volunteers participated in the inauguration and encouraged the conservation of native trees and biodiversity.The event concluded with the planting and watering of traditional saplings, followed by a vote of thanks to all officials, volunteers, organizations, and community members who contributed to the successful implementation of the project.Organized by:THE NATURE KINGDOM FOUNDATION – இயற்கை ராஜ்ஜியம்",
  images: [tree1, tree2, tree3, tree4],
},
{
  number: "09",
  title: "COVID-19 Relief Assistance",
  content:
    "During the COVID-19 lockdown, the suspension of public transportation created severe difficulties for many people, particularly those in vulnerable situations and persons with disabilities.Recognizing the need for support, The Nature Kingdom Foundation – இயற்கை ராஜ்ஜியம் provided assistance to families in need at Mathalamparai. Essential supplies, including eye drops, cooking utensils, household necessities, and financial assistance, were distributed based on their immediate needs.The initiative was later extended through the support of teachers at Vivekananda Higher Secondary School, who organized COVID-19 relief materials for the families of their students. Members and volunteers of The Nature Kingdom – Government Training Group actively supported the distribution, ensuring that assistance reached each student’s family individually.The volunteers expressed a deep sense of satisfaction, compassion, and inner happiness in serving students, families, teachers, and the local community during this difficult period.",
  images: [covid1, covid2, covid3, covid4],
},
];

export default function SC1() {
  return (
    <>
      {/* <Navbar /> */}

      <section className="social-page">

        <div className="social-title">

          <span>Social Responsibility</span>

          <h1>
            Serving Humanity Through
            <br />
            Compassion & Spiritual Values
          </h1>

          <p>
           Amirthalogam believes spirituality becomes meaningful
            only when it transforms into service. Our volunteers from  Pothigai Athma Gnana Kudil, Nature Kingdom and Amirthalogam Service Center actively participate in community welfare programs that promote health, dignity and kindness.
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
      <SC2/>
      {/* Footer */}
<footer className="footer">

  <div className="footer-content">

    <p>
      © {new Date().getFullYear()} the nature kingdom
      All Rights Reserved.
    </p>

    <a href="mailto:amirthalogam@gmail.com">
      ✉ amirthalogam@gmail.com
    </a>

  </div>

</footer>
    </>
  );
}