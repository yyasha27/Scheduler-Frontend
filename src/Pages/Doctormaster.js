import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';



async function loginUser(credentials) {
  return fetch('http://localhost:8080/doctor/docdetails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
//const theme = createTheme();

export default function Doctormaster() {

  const [serial_number, setserial_number] = useState();
  const [area, setarea] = useState();
  const [city, setcity] = useState();
  const [doctorname, setdoctorname] = useState();
  const [speciality, setspeciality] = useState();
  const [status, setstatus] = useState();
  const [pincode, setpincode] = useState();
  const [street_name, setstreet] = useState();
  const [workspace, setworkspace] = useState();
  const [state, setstate] = useState();



  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      serial_number,
      area,
      city,
      doctorname,
      speciality,
      status,
      pincode,
      street_name,
      workspace,
      state
    });
    window.location.href = '/doctormaster'
  }

  return (
    //<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LocalHospitalIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Doctor Details
          </Typography>
          <Grid item>
              <button class="buttonstyle" type="button" style={{minWidth : "100px",minHeight:"30px", textDecoration:"none"}} > 
                <Link href="/pop" variant="body1" style={{ color: '#000000' , textDecoration:"none"}} classname="link" >
                    {"VIEW"}
                </Link> 
              </button>
              <span> </span>
              <button class="buttonstyle" type="button" style={{minWidth : "100px",minHeight:"30px", textDecoration:"none"}} > 
                <Link href="/map" variant="body1" style={{ color: '#000000' , textDecoration:"none"}} classname="link" >
                    {"MAP"}
                </Link> 
              </button>
              </Grid>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="serialid"
                  type="text"
                  required
                  fullWidth
                  id="serialid"
                  label="Serial Id"
                  autoFocus
                  onChange={e => setserial_number(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="doctorname"
                  label="Doctor Name"
                  name="doctorname"
                  onChange={e => setdoctorname(e.target.value)}
                />
                 </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="workspace"
                  label="Work Space"
                  name="workspace"
                  onChange={e => setworkspace(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="speciality"
                  label="Speciality"
                  type="text"
                  id="speciality"
                  onChange={e => setspeciality(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type = "text"
                  id="area"
                  label="Area"
                  name="area"
                  onChange={e => setarea(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  name="city"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  autoFocus
                  onChange={e => setcity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  maxlength="6"
                  id="pincode"
                  label="Pin Code"
                  name="pincode"
                  onChange={e => setpincode(e.target.value)}
                />
              </Grid>
            <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type = "text"
                  id="state"
                  label="State"
                  name="state"
                  onChange={e => setstate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type = "text"
                  id="street"
                  label="Street"
                  name="street"
                  onChange={e => setstreet(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type = "text"
                  id="status"
                  label="Status"
                  name="status"
                  onChange={e => setstatus(e.target.value)}
                />
              </Grid>
             </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">

            </Grid>
          </Box>
        </Box>
      </Container>
    //</ThemeProvider>
  );
}