import React, { useState } from "react";
import Button from "@mui/material/Button";
import {useHistory } from 'react-router-dom';

function Doctor_details() {

    const eml=sessionStorage.getItem('emailid');

    var history = useHistory();
    const goback = async (e) => {
        e.preventDefault();
        history.push('/dashboard');
    }
    const [mydata, setformdata] = useState({
        hspname: "",
        date: "",
        doctorsname: "",
        address: "",
        email:eml,    
      });

    

    const inputhandler = (event) => {
        // setdata(e)
    
        const { name, value } = event.target;
       
        setformdata((prevValue) => {
          return {
            ...prevValue,
            [name]: value,
          };
        });
      };

      const bookappoint = async (e) =>{
    
        e.preventDefault();
       
        const {hspname,doctorsname,date,address,email} = mydata;
        
        const res = await fetch("http://localhost:3000/bookappointment", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
    
                hspname,doctorsname,date,address,email
     
            })
        });
    
        const data = await res.json();
    
        if( res.status === 422 || !data){
    
            window.alert("already booked on this date");
            console.log("invalid appointment");
        }
        else if(res.status === 421){
            window.alert("You have not entered any credentials")
        }else{
            window.alert("Appointement taken successfully");
            console.log("Appointment taken successfully");
        }
    
    }
   
    

    return (
        <>
            <div className="forms_login">
                <div class="container">
                    <h1>Book an Appointment </h1>

                    <form action="" onSubmit={bookappoint}>

                        <label for="psw">
                            <b>Select Hospital</b>
                        </label>

                        <select
                            required
                            className="selectbox"
                            name="hspname"
                            value={mydata.hspname}
                            onChange={inputhandler}
                        >
                            <option value="">Please select an item from the list</option>
                            <option value="Akshyawat">Akshyawat</option>
                            <option value="Jeevan Jyoti"> Jeevan Jyoti </option>
                            <option value="Sarthak Hospital"> Sarthak Hospital</option>
                        </select>

                        <label for="psw">
                            <b>Search by Doctor</b>
                        </label>

                        <select
                            required
                            className="selectbox"
                            name="doctorsname"
                            value={mydata.doctorsname}
                            onChange={inputhandler}
                        >
                            <option value="">Please select an item from the list</option>
                            <option value="DR. Manmohan Singh">DR. Manmohan Singh</option>
                            <option value="DR. Honey Singla"> DR. Honey Singla</option>
                            <option value="DR. Vatsh"> DR. Vatsh</option>
                            <option value="DR. Kiran Vedi">DR. Kiran Vedi</option>
                        </select>
                        <label for="date">
                            <b>*Select Appointment Date</b>
                        </label>
                        <input
                            required
                            value={mydata.date}
                            onChange={inputhandler}
                            className="selectbox"
                            type="date"
                            name="date"
                            id="date"

                        />

                        <label for="psw">
                            <b>* Address</b>
                        </label>

                        <select
                            required
                            className="selectbox"
                            name="address"
                            value={mydata.address}
                            onChange={inputhandler}
                        >
                            <option value="">Please select an item from the list</option>

                            <option value="Naini">Naini</option>
                            <option value="Ramnagar">Ramnagar</option>
                            <option value="Prayagraj">Prayagraj </option>
                        </select>
                        <div >
                           

                            <Button variant="contained" type="submit" style={{marginRight:"10px"}}>
                                Book Appointment
                            </Button>
                            <Button variant="contained" onClick={goback}>
                                Back
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}
export default Doctor_details;