import React from "react";
import "./Healthcare.css";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import partners from "../assets/partners.png";
import three from "../assets/3.jpg";
function Healthcare() {
  return (
    <div>
      <div className="healthcarec">
        <h1>Medicee is Healthcare, But in a Easier Way</h1>
        <div className="outergrid">
          <div className="grid_pic">
            <div>
              <img loading="lazy" className="img-grid" src={one} alt="" />
            </div>
            <div>
              <img loading="lazy" className="img-grid" src={two} alt="" />
            </div>
            <div>
              <img loading="lazy" className="img-grid" src={three} alt="" />
            </div>
          </div>
        </div>

        <div className="partnership">
          <div>
            <p>
              <h4>Medicee is for Health System</h4>
            </p>
            <div id="partners">
              <a href="#">Parthner with Us</a>
            </div>
          </div>

          <div className="par">
            <img loading="lazy" src={partners} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Healthcare;
