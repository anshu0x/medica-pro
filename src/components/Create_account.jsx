import React, { useState } from "react";
import Navbar from "./Navbar";
import "./create_account.css";
import { NavLink, useHistory } from "react-router-dom";

function Create_account() {
  var history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  let name, value;
  const handleInputs = (e) => {
    //  setErrors(Validation(user));

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    // setErrors(Validation(user));
    e.preventDefault();
    //  setErrors(Validation(user));

    setDataIsCorrect(true);
    const { firstName, lastName, email, password, cpassword } = user;

    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("User already exist");
      console.log("invalid registration");
    } else if (res.status === 423) {
      window.alert("Password doesn't match ! Please re-enter it");
    } else if (res.status === 421) {
      window.alert("You have not entered any credentials");
    } else {
      window.alert("Registration Successful");
      console.log("registration successful");
      history.push("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="forms_login">
        <form action="">
          <div class="signupform-container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

            <label for="fname">
              <b>First Name</b>
            </label>
            <input
              type="text"
              placeholder="first name"
              name="firstName"
              value={user.firstName}
              id="fname"
              required
              onChange={handleInputs}
            />
            <label for="fname">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              placeholder="last name"
              name="lastName"
              value={user.lastName}
              id="lname"
              required
              onChange={handleInputs}
            />

            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="medicee@mail.com"
              name="email"
              value={user.email}
              id="email"
              required
              onChange={handleInputs}
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              name="password"
              value={user.password}
              id="psw"
              required
              onChange={handleInputs}
            />

            <label for="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              name="cpassword"
              value={user.cpassword}
              id="psw-repeat"
              required
              onChange={handleInputs}
            />

            <hr />
            <p>
              By creating an account you agree to our{" "}
              <a href="#">Terms & Privacy</a>.
            </p>

            <button type="submit" onClick={handleSubmit} class="registerbtn">
              Register
            </button>
          </div>

          <div class="signupform-container signin">
            <p>
              Already have an account? <NavLink to="/login">Sign in </NavLink>.
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Create_account;
