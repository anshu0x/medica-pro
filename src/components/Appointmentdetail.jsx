import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from 'react-router-dom';
import './Appointmentdetails.css';
import { alignProperty } from "@mui/material/styles/cssUtils";

function Appointmentdetail() {
    var header_slides = [];
    const eml=sessionStorage.getItem('emailid');

    const showdetail = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/showappointment/${eml}`, {
            method: 'GET',
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                header_slides = data;
                getdetails();

            });
    }


   

    var history = useHistory();
    const goback = async (e) => {
        e.preventDefault();
        history.push('/dashboard');
    }

    const getdetails = async () => {
        console.log(header_slides.length);
        let mid_box = document.querySelector('#tbodytr');
        let id=1;
        mid_box.innerHTML = '';
        for(let j=0;j<header_slides.length;j++){
            mid_box.innerHTML+=`<tr>
                                    <th scope="row">${id}</th>
                                    <td>${header_slides[j]['hspname']}</td>
                                    <td>${header_slides[j]['doctorsname']}</td>
                                    <td>${header_slides[j]['date']}</td>
                                    <td>${header_slides[j]['address']}</td>

                                </tr>`;
            id=id+1;

        }
    }
    



    return (
        <>
           
            <div className="container" style={{marginLeft:"250px",width:"60vw"}}>
                <body>
                    <h1>Your Appointments</h1>
                    <div className="center">
                        <Button variant="contained" onClick={showdetail}>
                            Show Appointment Detail
                        </Button>
                        </div>
                        <div className="side">
                        <Button variant="contained" onClick={goback} >
                            Back
                        </Button>
                    </div>
                    <table className="table" >
                        <thead className="thead-dark">
                          <tr>
                            <th scope="row">Id</th>
                            <th scope="col">Hospital Name</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Address</th>
                          </tr>
                        </thead>
                        <tbody id="tbodytr">
                    
                        </tbody>
                      </table>
                </body>
            </div>
        </>
    )
}
export default Appointmentdetail