import React, { useState } from "react";
import "./Login.css";
import { NavLink, useHistory } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  var kode = true;
  var history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginPage = async (e) => {
    e.preventDefault();

    if (email === "medicee@org.com" && password === "Medicee@1") {
      history.push("/admin_dashboard");
      window.alert("Logged in As Admin");
      kode = false;
    }
    if (kode === true) {
      const res = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = res.json().then((user) => {
        return user.userLoginMail.email;
      });

      const printuser = async () => {
        const a = await data;
        sessionStorage.setItem("emailid", a);
      };

      printuser();

      const eml = sessionStorage.getItem("emailid");
      console.log(eml);

      if (res.status === 400 || !data) {
        window.alert("Invalid Registartion");
        console.log("invalid registration");
      } else {
        history.push("/dashboard");
        //window.alert("Logged in Successful");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="forms_login">
          <form action="">
            <div className="formcontainer">
              <h1>Log In</h1>
              <label htmlFor="email">
                <b>Email</b>
              </label>
              `
              <input
                type="text"
                placeholder="medicee@mail.com"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                name="password"
                id="psw"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <hr />
              <button type="submit" className="registerbtn" onClick={loginPage}>
                Sign in
              </button>
            </div>

            <div className="formcontainer signin">
              <p>
                Create an account?{" "}
                <NavLink to="/create_account">Sign Up</NavLink>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
