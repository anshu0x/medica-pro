import React from "react";
import "./Contact.css";

import call from "../assets/call.svg";
import clock from "../assets/clock.svg";
import mailbox from "../assets/mailbox.svg";
import location from "../assets/location.svg";

function Contact() {
  return (
    <>
      <h1 id="contat-us">Contact Us</h1>

      <div className="grid_paren">
        <div className="grid_child">
          <img src={call} alt="" />
          <h3>Emergency</h3>
          <p> (237) 681-812-255 </p>
        </div>
        <div className="grid_child">
          <img src={clock} alt="" />

          <h3>Location</h3>
          <p> 0123 Some place </p>
        </div>
        <div className="grid_child">
          <img src={mailbox} alt="" />

          <h3>Email</h3>
          <p> hello@gmil.com </p>
        </div>
        <div className="grid_child">
          <img src={location} alt="" />

          <h3>Working Hours</h3>
          <p> Mon-Sat 09:00-20:00 </p>
        </div>
        
      </div>
    </>
  );
}

export default Contact;
