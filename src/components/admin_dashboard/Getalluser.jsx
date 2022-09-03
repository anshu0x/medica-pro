import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from 'react-router-dom';
import '../Appointmentdetails.css';

function Appointmentdetail() {
    var header_slides = [];
    const eml=sessionStorage.getItem('emailid');

    const showdetail = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/getalluserdetails', {
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
    // const removedetail = async (email) => {
    //     const mail=email;
    //     console.log(mail);
    //     const res = await fetch(`http://localhost:3000/removedetail/${mail}`, {
    //         method: 'DELETE',
    //     });

    // }

    var history = useHistory();
    const goback = async (e) => {
        e.preventDefault();
        history.push('/admin_dashboard');
    }

    const getdetails = async () => {
        console.log(header_slides.length);
        let mid_box = document.querySelector('#tbodytr');
        let id=1;
        mid_box.innerHTML = '';
        for(let j=0;j<header_slides.length;j++){
             let email=header_slides[j]['email'];
            mid_box.innerHTML+=`<tr>
                                    <th scope="row">${id}</th>
                                    <td>${header_slides[j]['firstName']}</td>
                                    <td>${header_slides[j]['lastName']}</td>
                                    <td>${header_slides[j]['email']}</td>

                                     

                                </tr>`;
            id=id+1;

        }
    }

{/* <td><Button onClick=${removedetail(email)}>Remove</Button></td> */}

    return (
        <>

            <div className="container" style={{marginLeft:"250px",width:"60vw"}}>
                <body>
                    <h1>All Users</h1>
                    <div className="center">
                    <Button variant="contained" onClick={showdetail}>
                        Show Users Details
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
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            {/* <th scope="col">Action</th> */}
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

// import React, { useEffect, useState } from "react";
// function Appointmentdetail() {
//   const [user, setuser] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3000/getalluserdetails").then((resp) => {
//       console.warn(resp);
//       setuser(resp);
//     });
//   }, []);
//   console.warn(user);

//   return (
//     <div className="container" style={{ marginLeft: "250px", width: "60vw" }}>
//       <h1>Delete</h1>
//       <table>
//           <tbody>
             
//                   {
//                       user.map((item,i)=>
//                       <tr key={i}>
//                           <td>{item.email}</td>
//                           </tr>
//                       )
//                   }
              
//           </tbody>
//       </table>
//     </div>
//   );
// }
// export default Appointmentdetail;
