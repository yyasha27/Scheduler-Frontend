import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import "../Styles/Liststyle.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import { render } from "@testing-library/react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [doctors,setdoctorname] = useState([])
  const [serial_number, setserialnumber] = useState("");
  const [area, setarea] = useState("");
  const [city, setcity] = useState("");
  const [doctorname, setdoctor] = useState("");
  const [speciality, setspeciality] = useState("");
  const [status, setstatus] = useState("");
  const [pincode, setpincode] = useState("");
  const [street_name, setstreet] = useState("");
  const [workspace, setworkspace] = useState("");
  const [state, setstate] = useState("");
  

  
  useEffect(() => {
    const getdoctors = async () => {
      const res = await fetch("http://localhost:8080/doctor/getdoctordetails");
      const getdata = await res.json();
      setdoctorname(getdata);
      setdoctor(getdata.doctorname);
      setserialnumber(getdata.serial_number);
      setspeciality(getdata.speciality);
      setarea(getdata.area);
      setworkspace(getdata.workspace);
      setpincode(getdata.pincode);
      setstate(getdata.state);
      setstreet(getdata.street_name);
      setcity(getdata.city);
      setstatus(getdata.status);
      // console.log(getdata);
  };
  getdoctors();
},[]);


  async function getdoctors(item) {
    return fetch('http://localhost:8080/doctor/getdoctordetails', {
      method: ' GET',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify(item)
    })
      .then(data => data.json())
   }

  function updatedoctor()
  {
    let item={doctorname,serial_number,speciality,area,workspace,pincode,state,street_name,city,status}
    console.warn("item",item)
    fetch(`http://localhost:8080/doctor/doctordetails/${serial_number}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getdoctors(item.doctorname)
      })
    })
  }

  function selectdoctor(id)
  {
    let item=doctors[id-1];
          setdoctor(item.doctorname)
          setserialnumber(item.serial_number)
          setspeciality(item.speciality)
          setarea(item.area)
          setworkspace(item.workspace)
          setpincode(item.pincode)
          setstate(item.state)
          setstreet(item.street_name)
          setcity(item.city)
          setstatus(item.status)
  }


  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <input type="button" value="Click to Open Popup" onClick={togglePopup} /> */}
      <h1>LIST DOCTORS</h1>
      <Grid item>
      <button class="buttonstyle" type="button" style={{minWidth : "100px",minHeight:"30px", textDecoration:"none"}} > <Link href="/doctormaster" variant="body1" style={{ color: '#000000' , textDecoration:"none"}} classname="link" >
          {"DOCTOR DETAILS"}
        </Link> </button>
       
      </Grid>
      <br></br>
      
      <table id="customers">
        <tbody>
          <tr>
          <th>SERIAL NUMBER</th>
          <th>DOCTOR</th>
          <th>SPECIALITY</th>
          <th>WORKSPACE</th>
          <th>STREET</th>
          <th>AREA</th>
          <th>CITY</th>
          <th>STATE</th>
          <th>PINCODE</th>
          <th>STATUS</th>
          </tr>
          {
            doctors.map((item, i) =>
            <tr key={i}>
              <td>{item.serial_number}</td>
              <td>{item.doctorname}</td>
              <td>{item.speciality}</td>
              <td>{item.workspace}</td>
              <td>{item.street_name}</td>
              <td>{item.area}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.pincode}</td>
              <td>{item.status}</td>

              
            </tr>
             )
          }
        </tbody>
        <br></br><br></br>
        <button class="buttonstyle" type="button" style={{minWidth : "100px",fontSize:"15px" ,minHeight:"30px", textDecoration:"none"}} onClick={togglePopup}>UPDATE </button>
      </table>
      {isOpen && (
        <Popup
          content={
            <>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div id="popupbox">
        <TextField
          id="filled-required"
          label="SERIAL NUMBER:"
          value={serial_number}
          onChange={(e)=>{setserialnumber(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="DOCTOR NAME:"
          value={doctorname}
          onChange={(e)=>{setdoctor(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="WORKSPACE:"
          value={workspace}
          onChange={(e)=>{setworkspace(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="SPECIALITY:"
          value={speciality}
          onChange={(e)=>{setspeciality(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="STATUS:"
          value={status}
          onChange={(e)=>{setstatus(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="STREET NAME:"
          value={street_name}
          onChange={(e)=>{setstreet(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="AREA:"
          value={area}
          onChange={(e)=>{setarea(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="CITY:"
          value={city}
          onChange={(e)=>{setcity(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="STATE:"
          value={state}
          onChange={(e)=>{setstate(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="PINCODE:"
          value={pincode}
          onChange={(e)=>{setpincode(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
      </div>
    </Box>
      <button onClick={updatedoctor} >Update User</button> 
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default App;