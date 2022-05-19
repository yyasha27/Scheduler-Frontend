import React, { useState } from "react";
//import Popup from "./Popup";
import "../Styles/Liststyle.css";
//import Box from "@mui/material/Box";
//import TextField from "@mui/material/TextField";
//import Listdoct from "../api/Listdoct";
//import Viewdoctors from "../mappingpages/Viewdoctors"
//import Link from "@mui/material/Link";
//import Grid from "@mui/material/Grid";


export default function Doctorspage() {

//   const [serial_number, setserial_number] = useState();
//   const [doctorname, setdoctorname] = useState();
//   const [workspace, setworkspace] = useState();
//   const [speciality, setspeciality] = useState();
//   const [status, setstatus] = useState();
//   const [street_name, setstreet_name] = useState();
//   const [area, setarea] = useState();
//   const [city, setcity] = useState();
//   const [state, setstate] = useState();
//   const [pincode, setpincode] = useState();


//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await Popupwindow({
//       serial_number,
//       doctorname,
//       workspace,
//       speciality,
//       status,
//       street_name,
//       area,
//       city,
//       state,
//       pincode,
//     });
//   }

return (
  <div>
      <h1>List Doctors</h1>

      <table id="customers">
        <tr>
          <th>SERIAL ID</th>
          <th>DOCTOR</th>
          <th>SPECIALITY</th>
          <th>AREA</th>
          <th>WORKSPACE</th>
          <th>STATUS</th>
          <th>STREET NAME</th>
          <th>STATE</th>
          <th>CITY</th>
          <th>PINCODE</th>
        </tr>
        {/* <Viewdoctors/> */}
      </table>
    </div>
  );
}