import React, { useState } from "react";
import "./dashboard.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useHistory } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../Navbar.css";
// import { BsFillCalendarPlusFill } from "react-icons/bs";
import { FaHospitalAlt } from "react-icons/fa";
import { AiTwotoneFileText } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FaMedrt } from "react-icons/fa";
import { FaNotesMedical } from "react-icons/fa";


function Admindashboard() {


  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const history = useHistory();
  const showappointment = () => {
    history.push('/showallappointment');
  }
  const getusers = () => {
    history.push('/getalluser');
  }
  const showhospitals = () => {
    history.push('/showallhospitals');
  }
  const addhospitals = () => {
    history.push('/addhospitals');
  }
  const clearsession = () => {
    sessionStorage.clear();
  }
  const eml = " Admin";

  return (
    <>
      {/* navbar starts from here */}
      <nav className="main-nav dashboard-nav">
        <div className="logo">
          <NavLink to="/">
            <FaMedrt />
            Medicee
          </NavLink>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">
                <AiFillHome />
                Home
              </NavLink>
            </li>



            <li>
              <NavLink to="/">
                <FaHospitalAlt />
                Hospital
              </NavLink>
            </li>



            <li>
              <NavLink to="/">
                <AiTwotoneFileText />
                Summary Reports
              </NavLink>
            </li>

            <li>

              <div className="dropdown">
                <button className="dropbtn">
                  <AccountCircleIcon />
                  {eml}
                </button>
                <div className="dropdown-content">

                  <a href="/">Home</a>
                  <a href="/">Setting</a>

                  <NavLink to="/" onClick={clearsession}>Logout </NavLink>
                </div>
              </div>

            </li>
          </ul>
        </div>

        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>

              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      {/* navbar ends from here */}

      <div className='services_other'  >

        <div className="dieseaseimg" onClick={showappointment}>
          <div className='othergridchild' >
            <h2>Show All Appointment</h2>
          </div>
        </div>
        <div className="dieseaseimg">

          <div className='othergridchild' >
            <h2>Add Appointment Details</h2>
          </div>
        </div>


        <div className="dieseaseimg" onClick={getusers}>


          <div className='othergridchild' >
            <h2>Show All Users</h2>
          </div>

        </div>
        <div className="dieseaseimg" >


          <div className='othergridchild' ><h2>Add Users Details</h2>
          </div>

        </div>
        <div className="dieseaseimg" onClick={showhospitals} >


          <div className='othergridchild' >
            <h2>Show All Hospitals</h2>
          </div>
        </div>

        <div className="dieseaseimg" onClick={addhospitals}>


          <div className='othergridchild' >
            <h2>Add Hospital Details</h2>
          </div>

        </div>
        <div >


        </div>

      </div>
    </>
  );
}

export default Admindashboard;
