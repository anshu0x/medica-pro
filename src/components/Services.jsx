import React from "react";
import Navbar from "./Navbar";
import "./Services.css";
import covid_consultation from "../assets/services/covid_consultation.svg";
import dermatologist from "../assets/services/dermatologist.svg";
import ic_general_medicine from "../assets/services/ic_general_medicine.svg";
import ic_paediatrics from "../assets/services/ic_paediatrics.svg";
import one from "../assets/services/1.jpg";
import two from "../assets/services/2.jpg";
import three from "../assets/services/3.webp";
import four from "../assets/services/4.jpg";
import five from "../assets/services/5.jpg";
import six from "../assets/services/6.jpg";

function Services() {
  return (
    <div className="heroservice">
      <Navbar />
      <div className="services_main">
        <h1>TOP SPECIALTIES</h1>

        <div className="services_grid">
          <div className="services_doct">
            {" "}
            <h5>Covid Consultation</h5>{" "}
            <img
              className="servicescdoctosimg"
              src={covid_consultation}
              alt=""
            />{" "}
            <p>Treatment of covid-19</p> <h6> Cough, Fever, Breathnessless</h6>{" "}
          </div>
          <div className="services_doct">
            {" "}
            <h5>Dermatologist</h5>{" "}
            <img className="servicescdoctosimg" src={dermatologist} alt="" />{" "}
            <p>Treatment of Skin</p> <h6> Pimple, Skin Disorder, Hair Loss</h6>{" "}
          </div>
          <div className="services_doct">
            {" "}
            <h5>Otolaryngology</h5>{" "}
            <img
              className="servicescdoctosimg"
              src={ic_general_medicine}
              alt=""
            />{" "}
            <p>Treatment of ENT </p> <h6>Eyestrain, Nazal Pain, Allergies </h6>{" "}
          </div>
          <div className="services_doct">
            {" "}
            <h5>Pediatrician</h5>{" "}
            <img className="servicescdoctosimg" src={ic_paediatrics} alt="" />{" "}
            <p>Treatment of Child </p>{" "}
            <h6> Physical, Mental and Behavioral Issues </h6>{" "}
          </div>
        </div>
      </div>

      <h1>OTHER SPECIALTIES</h1>

      <div className="services_other">
        <div className="dieseaseimg">
          <img src={one} alt="" />

          <div className="othergridchild">
            {" "}
            <h5> Allergic and clinical Immunologist</h5>{" "}
            <p>Manage Allergic and treat immunity</p>
            <h5>Recurring Infections, Immnunity deficiency</h5>
          </div>
        </div>

        <div className="dieseaseimg">
          <img src={two} alt="" />
          <div className="othergridchild">
            {" "}
            <h5> Gastroenterologist</h5> <p>Care for Immunity System</p>
            <h5>Teatment for Digestive Organs</h5>
          </div>
        </div>
        <div className="dieseaseimg">
          <img src={three} alt="" />
          <div className="othergridchild">
            <h5>Dentist</h5> <p>Care for Teeths</p>
            <h5>Teeth Infections, Gum bleeding, Cavities</h5>
          </div>
        </div>
        <div className="dieseaseimg">
          <img src={four} alt="" />
          <div className="othergridchild">
            {" "}
            <h5>Cardiologist</h5> <p>For Heart Pateint</p>
            <h5>Treatment of heart attack, Heart failure and Arrhythmia</h5>
          </div>
        </div>
        <div className="dieseaseimg">
          <img src={five} alt="" />

          <div className="othergridchild">
            {" "}
            <h5>Oncologist</h5> <p>For Cancer Pateint</p>
            <h5>Treatment of cancer, administering chemotherapy </h5>
          </div>
        </div>

        <div className="dieseaseimg">
          <img src={six} alt="" />

          <div className="othergridchild">
            <h5>Neurologist</h5> <p>Care for Nervous System</p>
            <h5>Treatment of Brain, Nerves and Spinal cord</h5>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Services;
