import React from "react";
import Navbar from "./Navbar";
import Topspecialist from "./Topspecialist";
import "./Home.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaIdCard } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

import Contact from "./Contact";
function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="doctors_card">
          <div className="text_doctors">
            <h1>
              Find local <span> </span>
            </h1>
            <h1>who take your insurance</h1>
          </div>

          <div className="find_doctors">
            <div>
              <AiOutlineSearch />
              <input
                placeholder="Condition, procedure, doctor..."
                className="input_field"
                type="text"
              />
            </div>
            <div>
              <GoLocation />
              <input
                placeholder="City, state, or zip code"
                className="input_field"
                type="text"
              />
            </div>
            <div>
              <AiOutlineCalendar />
              <input placeholder="Today" className="input_field" type="date" />
            </div>
            <div>
              <FaIdCard />
              <input
                placeholder="Insurance carrier and plan"
                className="input_field"
                type="tel"
              />
            </div>
            <button id="search_inp_grid">
              {" "}
              <BsSearch />
            </button>
          </div>
        </div>
      </div>

      <Topspecialist />

      <Contact />
    </>
  );
}

export default Home;
