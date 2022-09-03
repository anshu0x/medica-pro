import React, { useState } from 'react'
import '../create_account.css'
import { useHistory } from 'react-router-dom'
import Button from "@mui/material/Button";

function Addhospital() {
    var history = useHistory();
    const [hospital, setHospital] = useState({

       statename:"",
       cityname:"",
       locality:"",
       hospitalname:"",
       hspblood:0,
       hspoxygen:0,
       hspbed:0,
       hspdoctor:[],
       hspservices:[]
    }); 
    const[dataIsCorrect, setDataIsCorrect] = useState(false);

    let name, value;
    const handleInputs = (e) => {
        //  setErrors(Validation(user));
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setHospital({ ...hospital, [name]: value });
    }

    const goback = async (e) => {
        e.preventDefault();
        history.push('/admin_dashboard');
    }

    const handleSubmit = async (e) => {
        // setErrors(Validation(user));
        e.preventDefault();
        //  setErrors(Validation(user));

        setDataIsCorrect(true);
        const { statename,cityname,locality,hospitalname,hspblood,hspoxygen,hspbed,hspdoctor,hspservices } = hospital;

        const res = await fetch("http://localhost:3000/postdetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                statename,cityname,locality,hospitalname,hspblood,hspoxygen,hspbed,hspdoctor,hspservices

            })
        });

        const data = await res.json();

        if (res.status === 422 || !data) {

            window.alert("Hospital already exist");
            console.log("invalid registration");
        } 
        else if (res.status === 421) {
            window.alert("You have not entered any credentials")
        } 
        else {
            window.alert("Registration Successful");
            console.log("registration successful");
        }

    }

    return (
        <div>
            <div>
                <div className='forms_login'>

                    <form action="">
                        <div class="container">
                            <h1>Register A Hospital</h1>
                            

                            <label for="sname"><b>State</b></label>
                            <input type="text" placeholder="Enter State Name" name="statename" value={hospital.statename} id="sname" required onChange={handleInputs} />
                            
                            <label for="cname"><b>City</b></label>
                            <input type="text" placeholder="Enter City Name" name="cityname" value={hospital.cityname} id="cname" required onChange={handleInputs} />

                            <label for="local"><b>Locality</b></label>
                            <input type="text" placeholder="Enter Locality" name="locality" value={hospital.locality} id="local" required onChange={handleInputs} />

                            <label for="hspname"><b>Hospital Name</b></label>
                            <input type="text" placeholder="Enter Hospital Name" name="hospitalname" value={hospital.hospitalname} id="hspname" required onChange={handleInputs} />

                            <label for="hspblood"><b>Blood Availability</b></label>
                            <input type="number" className='number' placeholder="0" name="hspblood" value={hospital.hspblood} id="hspblood" required onChange={handleInputs} />

                            <label for="hspoxygen"><b>Oxygen Availability</b></label>
                            <input type="number" className='number' placeholder="0" name="hspoxygen" value={hospital.hspoxygen} id="hspoxygen" required onChange={handleInputs} />

                            <label for="hspbed"><b>Bed Availability</b></label>
                            <input type="number" className='number' placeholder="0" name="hspbed" value={hospital.hspbed} id="hspbed" required onChange={handleInputs} />
                            
                            <label for="hspdoctor"><b>Doctor's List</b></label>
                            <input type="text" placeholder="Doctor's name" name="hspdoctor" value={hospital.hspdoctor} id="hspdoctor" required onChange={handleInputs} />
                            
                            <label for="hspservices"><b>Services</b></label>
                            <input type="text" placeholder="Services" name="hspservices" value={hospital.hspservices} id="hspservices" required onChange={handleInputs} />
                            
                            <hr />
                        

                            <button type="submit" onClick={handleSubmit} class="registerbtn">Register</button>
                            <Button onClick={goback} style={{backgroundColor:'InfoBackground'}} >Back</Button>
                        </div>

                    
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Addhospital