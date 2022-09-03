import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import "./App.css";
import Create_account from "./components/Create_account";
import Login from "./components/Login";
import { Route, Switch, BrowserRouter as Routes } from "react-router-dom";
import About from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Dashboard from "./components/dashboard/Dashboard";
import Doctor_details from "./components/doctor_details";
import Appointmentdetail from "./components/Appointmentdetail";
import Admindashboard from "./components/admin_dashboard/Admin_dashboard";
import Showallappointment from "./components/admin_dashboard/Showallappointment";
import Getalluser from "./components/admin_dashboard/Getalluser";
import Showallhospital from "./components/admin_dashboard/Showallhospital";
import Addhospital from "./components/admin_dashboard/Addhospital";
import HospitalDetail from "./components/dashboard/hospital";
import SummaryReport from "./components/dashboard/summaryreport";



function App() {
  return (
    <>
      <Routes>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/create_account" component={Create_account} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/doctor_details" component={Doctor_details} />
          <Route
            exact
            path="/appointment_details"
            component={Appointmentdetail}
          />
          <Route exact path="/admin_dashboard" component={Admindashboard} />
          <Route
            exact
            path="/showallappointment"
            component={Showallappointment}
          />
          <Route exact path="/getalluser" component={Getalluser} />
          <Route exact path="/showallhospitals" component={Showallhospital} />
          <Route exact path="/addhospitals" component={Addhospital} />
          <Route exact path="/hospitalDetail" component={HospitalDetail} />
          <Route exact path="/summaryReport" component={SummaryReport} />
        </Switch>
      </Routes>
    </>
  );
}

export default App;
