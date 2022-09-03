import React from "react";
import Navbar from "../Navbar";
import "./About.css";
import Ourvision from "./Ourvision";

import about1 from "../About/about/about1.svg";
import about2 from "../About/about/about2.svg";
import about3 from "../About/about/about3.svg";
import about4 from "../About/about/about4.svg";
import about5 from "../About/about/about5.svg";
import Hpartner from "./Hpartner";

function About() {
  return (
    <div>
      <Navbar />

      <Hpartner />

      <Ourvision />

      <div className="parentaboutgrid">
        <div className="aboutgrid">
          <div className="aboutgridchild">
            <img src={about1} alt="" />

            <div>
              <h3> Collabarotion </h3>

              <p>
                {" "}
                We work together to achieve our mission with humanity & genuine
                respect for each member of our team{" "}
              </p>
            </div>
          </div>

          <div className="aboutgridchild">
            <img src={about2} alt="" />

            <div>
              <h3> Excellence </h3>

              <p>
                Breaking boundaries & doing more than what is expected is what
                we are known for.
              </p>
            </div>
          </div>

          <div className="aboutgridchild">
            <img src={about3} alt="" />

            <div>
              <h3> Emphaty </h3>

              <p>
                We are commited to being the customrer's true ally in their
                lifelong pursuit of better health & well-being.
              </p>
            </div>
          </div>
        </div>

        <div className="parentgridl">
          <div className="aboutgridchild1">
            <img src={about4} alt="" />

            <div>
              <h3>Inoovation</h3>
              <p>We are smart innovative & inspiring changemakers.</p>
            </div>
          </div>

          <div className="aboutgridchild1">
            <img src={about5} alt="" />

            <div>
              <h3>Cultures & Values</h3>
              <p>
                Challenge the norm, poineer the new normal and share opinions
                freely with colleagues and leader alike. We create a
                high-impact, supportive culture to empower and encourage people
                to achieve more than they could elsesomewhere . Hence , if you
                are fanatical about creating a lasting impact and obsessive
                about innovation, then join us to make healthcare affordable,
                accesible and transparent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
