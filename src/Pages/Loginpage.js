import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// function Copyright(props) {//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// async function loginUser(credentials) {
//   return fetch('', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }



function display(form) {
  console.log(form.email);
  console.log(form.password);
  if (form.email === "MR2022001") {
    if (form.password ==="123456") {
      
    window.location.href = '/Homepage2'
    } else {
      alert("Invalid Password");
    }
  } 
  else if (form.email === "MR2022002") {
    if (form.password ==="123456") {
      
    window.location.href = '/Homepage2'
    } else {
      alert("Invalid Password");
    }
  } 
  else {
    alert("Invalid Username");
  }
}

const theme = createTheme();

export default function SignIn() {
  //   const [email, setemail] = useState();
  // const [password, setPassword] = useState();

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     password,
  //     email
  //   });
  //   window.location.href = '/'
  // }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async e => {
    e.preventDefault();
    if (email === "MR2022001" ) {
      if (password ==="123456" ) {
        
      window.location.href = '/Home2'
      }
      else if (password ==="098765" ) {
        
        window.location.href = '/Home2'
        }
        else if (password ==="2345678" ) {
        
          window.location.href = '/Home2'
          }
        else {
        alert("Invalid Password");
      }
    } 
    else if (email==="MR2022002"){
    if (password ==="123456" ) {
        
      window.location.href = '/Home2'
      } else if (password ==="098765" ) {
        
        window.location.href = '/Home2'
        }
        else if (password ==="2345678" ) {
        
          window.location.href = '/Home2'
          }
          else {
        alert("Invalid Password");
      }
    } 
    else if (email==="MR2022003"){
      if (password ==="123456" ) {
          
        window.location.href = '/Home2'
        } else if (password ==="098765" ) {
        
          window.location.href = '/Home2'
          }
          else if (password ==="2345678" ) {
          
            window.location.href = '/Home2'
            }
            else {
          alert("Invalid Password");
        }
      } 
      else if (email==="MR2022004"){
        if (password ==="123456" ) {
            
          window.location.href = '/Home2'
          } 
          else if (password ==="098765" ) {
        
            window.location.href = '/Home2'
            }
            else if (password ==="2345678" ) {
            
              window.location.href = '/Home2'
              }
              else {
            alert("Invalid Password");
          }
        } 
        else if (email==="MR2022005"){
          if (password ==="123456" ) {
              
            window.location.href = '/Home2'
            } 
            else if (password ==="098765" ) {
        
              window.location.href = '/Home2'
              }
              else if (password ==="2345678" ) {
              
                window.location.href = '/Home2'
                }
                else {
              alert("Invalid Password");
            }
          } 
    else {
      alert("Invalid Username");
    }    
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box onSubmit={handleSubmit}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} // onClick={display(this.form)}
              >
              Sign In
            </Button>
            <Grid container>
              {/*
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
        */}
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}