import React from "react";
import "./Footer.css";
const Footer = () => {
  const NewYear = new Date().getFullYear();
  console.log(NewYear);
  return <div className="footer"><h3>Medicee Corp &copy; {NewYear} </h3></div>;
};

export default Footer;
