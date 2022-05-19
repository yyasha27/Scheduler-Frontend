import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../Styles/homestyle.css"
import { BrowserRouter as Router,Route, Link,NavLink,Switch } from "react-router-dom";


const Homepage = () => {
  return (
    <div className="container">
      <div className="center">
        <Stack spacing={2} direction="row">
        <Button style={{minWidth:"200px",minHeight:"70px"}} className="click" variant="contained">
            <Link exact to="/doctormaster" style={{ color: '#FFF' , textDecoration:"none"}}>DOCTOR MASTER</Link>
          </Button>
          <Button style={{minWidth:"200px",minHeight:"70px"}}  className="click" variant="contained">
            <Link exact to="/scheduler" style={{ color: '#FFF' , textDecoration:"none" }}>SCHEDULER</Link>
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Homepage;
