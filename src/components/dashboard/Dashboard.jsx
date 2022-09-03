import React, { useState } from "react";
import "./dashboard.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../Navbar.css";
// import { BsFillCalendarPlusFill } from "react-icons/bs";
import { FaHospitalAlt } from "react-icons/fa";
import { AiTwotoneFileText } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FaMedrt } from "react-icons/fa";
import { FaNotesMedical } from "react-icons/fa";
import Appointdata from "./Appointdata";
import data from "./data.json";
import Select from "react-select";

function Dashboard() {
  var header_slides = [];
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [cityList, setCityList] = useState([]);
  const [locality, setLocality] = useState();
  const [localityList, setLocalityList] = useState([]);
  const [hospital, setHospital] = useState();
  const [hospitalList, setHospitalList] = useState([]);
  const [num, setNum] = useState();
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();

  const getdetail = async () => {
    const lname = locality;
    const { cname } = lname;
    const res = await fetch(
      `http://localhost:3000/getareahspdetails/${cname}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        header_slides = data;
      });
    var arr = [];
    for (let i = 0; i < header_slides.length; i++) {
      const obj = {};
      obj["hospitalname"] = header_slides[i]["hospitalname"];
      arr.push(obj);
    }
    console.log(arr);
    setHospitalList(arr);
  };

  const handleStateChange = (obj) => {
    setState(obj);
    setCityList(obj.states);
    setCity([]);
  };

  // handle change event of the language dropdown
  const handleCityChange = (obj) => {
    setCity(obj);
    setLocalityList(obj.city);
    setLocality([]);
  };

  const handleLocalityChange = (obj) => {
    setLocality(obj);
    const p = getdetail();
    // setHospitalList(hospitals);
  };

  const handleHospitalChange = (obj) => {
    setHospital([]);
    setHospital(obj);
  };

  const handleClickOpen = async () => {
    var arr = [];
    setOpen(true);
    let hname = hospital;
    const { hospitalname } = hname;
    const res = await fetch(
      `http://localhost:3000/gethspdetails/${hospitalname}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        arr = data;
      });

    setNum(arr[0]);
    setNum1(arr[1]);
    setNum2(arr[2]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const clearsession = () => {
    sessionStorage.clear();
  };
  const eml = sessionStorage.getItem("emailid");

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
            {/* <li>
              <NavLink to="/">
                <AiFillHome />
                Home
              </NavLink>
            </li> */}

            <li>
              <NavLink to="/dashboard">
                <div className="dropdown">
                  <button className="dropbtn">
                    <FaNotesMedical />
                    Appointment
                  </button>
                  <div className="dropdown-content">
                    <NavLink to="/doctor_details"> Book Now</NavLink>
                    <a href="/">Cancel</a>
                    <NavLink to="/appointment_details"> History</NavLink>
                  </div>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/hospitalDetail">
                <FaHospitalAlt />
                Hospital
              </NavLink>
            </li>

            <li>
              <NavLink to="/summaryReport">
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
                  <a href="/">Setting</a>

                  <NavLink to="/" onClick={clearsession}>
                    Logout{" "}
                  </NavLink>
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

      <div>
        <div className="forms_login">
          <div className="container">
            <h1>Book an Appointment </h1>

            <form action="">
              <label htmlFor="psw">
                <b>Select State</b>
              </label>

              <Select
                required
                className="selectbox"
                value={state}
                options={data}
                onChange={handleStateChange}
                getOptionLabel={(option) => option.region}
                getOptionValue={(option) => option.country_code}
              ></Select>

              <label htmlFor="psw">
                <b>District</b>
              </label>

              <Select
                required
                className="selectbox"
                value={city}
                options={cityList}
                onChange={handleCityChange}
                getOptionLabel={(option) => option.sname}
                getOptionValue={(option) => option.scode}
              ></Select>

              <label htmlFor="psw">
                <b>Search by area</b>
              </label>

              <Select
                required
                className="selectbox"
                value={locality}
                options={localityList}
                onChange={handleLocalityChange}
                getOptionLabel={(option) => option.cname}
                getOptionValue={(option) => option.ccode}
                // name="locality"
                // value={mydata.locality}
                // onChange={inputhandler}
              ></Select>

              <label htmlFor="psw">
                <b>Search by hospital</b>
              </label>

              <Select
                required
                name="hspname"
                className="selectbox"
                value={hospital}
                options={hospitalList}
                onChange={handleHospitalChange}
                getOptionLabel={(x) => x.hospitalname}
                getOptionValue={(x) => x.hospitalname}
                // value={mydata.hspname}
                // onChange={inputhandler}
              >
                <option value="">Please select an item from the list</option>

                <option value="Nampaly Hydrebad">Nampaly Hydrebad</option>
                <option value="Care Hospital Pune">Care Hospital Pune</option>
                <option value="Nana Hospital Pune">
                  Nana Care Hospital Pune
                </option>
                <option value="Jai Kisan Hospital ">Jai Kisan Hospital</option>
              </Select>

              <hr />

              <div className="dhboardmin">
                <Appointdata
                  open={open}
                  handleFullWidthChange={handleFullWidthChange}
                  handleMaxWidthChange={handleMaxWidthChange}
                  handleClose={handleClose}
                  handleClickOpen={handleClickOpen}
                  statename={state}
                  cityname={city}
                  locality={locality}
                  hspname={hospital}
                  num={num}
                  num1={num1}
                  num2={num2}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
