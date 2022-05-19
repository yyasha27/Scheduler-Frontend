import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../Styles/homestyle.css";

import {Link} from "react-router-dom"


const Homepage = () => {
  return (
    <div className="container">
      <div className="center">
        <Stack spacing={2} direction="row">
        <Button style={{minWidth:"200px",minHeight:"70px"}}  className="click" variant="contained">
              <Link exact to="/signup"  style={{ color: '#FFF' , textDecoration:"none"}}>ADMIN</Link>
            
            </Button>
          <Button style={{minWidth:"200px",minHeight:"70px"}}  className="click" variant="contained">
          <Link exact to="/login" style={{ color: '#FFF' , textDecoration:"none" }}>USER</Link>
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Homepage;
