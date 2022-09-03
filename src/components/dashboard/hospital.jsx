import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from 'react-router-dom';
import '../Appointmentdetails.css';


function Appointmentdetail() {
    var header_slides = [];
    const eml=sessionStorage.getItem('emailid');

    const showdetail = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/getallhspdetails', {
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
                                    <td>${header_slides[j]['hospitalname']}</td>
                                    <td>${header_slides[j]['locality']},${header_slides[j]['cityname']},${header_slides[j]['statename']}</td> 
                                    <td>${header_slides[j]['hspblood']} Litre,${header_slides[j]['hspoxygen']} Cylinder,${header_slides[j]['hspbed']} Bed</td>
                                    <td>${header_slides[j]['hspdoctor']}</td>
                                    <td>${header_slides[j]['hspservices']}</td>
                                </tr>`;
            id=id+1;

        }
    }
    



    return (
        <>
           
            <div className="container" style={{marginLeft:"250px",width:"60vw"}}>
                <body>
                    <h1>All Hospitals</h1>
                    <div className="center">
                    <Button variant="contained" onClick={showdetail}>
                        Show All Hospitals
                    </Button>
                    </div>
                    <div className="side">
                    <Button variant="contained" onClick={goback}>
                        Back
                    </Button>
                    </div>
                    <table className="table" >
                        <thead className="thead-dark">
                          <tr>
                            <th scope="row">Id</th>
                            <th scope="col">Hospital Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Hospital Resources</th>
                            <th scope="col">Doctor's List</th>
                            <th scope="col">Services</th>
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