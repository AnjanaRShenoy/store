import React from "react";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ height: "600px", backgroundColor: "black" }}>
      <div style={{display:"flex", flexDirection:"row"}} >
        <div>
          <p style={{ color: "white" }}>BE THE FIRST ONE TO KNOW</p>
          <p style={{ color: "white" }}>Sign up for updates from metta muse</p>
          <input type="text" placeholder="Enter your e-mail ..." />
          <Button variant="outline-secondary">SUBSCRIBE</Button>{" "}
        </div>
        <div>
          <p style={{ color: "white" }}>CONTACT US</p>
          <p style={{ color: "white" }}>+44 213 331 5640</p>
          <p style={{ color: "white" }}>customercare@mettamuse.com</p>
          <p style={{ color: "white" }}>CURRENCY</p>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://cdn3.iconfinder.com/data/icons/flags-of-countries-3/128/USA-1024.png"
          />
          <p style={{ color: "white" }}>customercare@mettamuse.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
