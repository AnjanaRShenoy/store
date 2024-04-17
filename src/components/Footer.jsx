import React from "react";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ height: "600px", backgroundColor: "black" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          borderBottom: "0.5px white solid",
        }}
      >
        <div>
          <p style={{ color: "white" }}>BE THE FIRST ONE TO KNOW</p>
          <p style={{ color: "white" }}>Sign up for updates from metta muse</p>
          <input
            style={{ marginRight: "10px", height: "37px" }}
            type="text"
            placeholder="Enter your e-mail ..."
          />
          <Button variant="outline-secondary">SUBSCRIBE</Button>{" "}
        </div>
        <div>
          <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
            CONTACT US
          </p>
          <p style={{ color: "white" }}>+44 213 331 5640</p>
          <p style={{ color: "white" }}>customercare@mettamuse.com</p>
          <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
            CURRENCY
          </p>
          <div
            style={{ flexDirection: "row", display: "flex", color: "white" }}
          >
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://cdn3.iconfinder.com/data/icons/flags-of-countries-3/128/USA-1024.png"
            />
            <p> &#9670; USD</p>
          </div>
          <p style={{ color: "white", fontSize: "12px" }}>
            Transactions will completed in Euros and currency reference is
            available on hover
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <p style={{ color: "white" }}>Metta muse</p>
          <p style={{ color: "white" }}>About Us</p>
          <p style={{ color: "white" }}>Stories</p>
          <p style={{ color: "white" }}>Artisans</p>
          <p style={{ color: "white" }}>Boutiques</p>
          <p style={{ color: "white" }}>Contact us</p>
          <p style={{ color: "white" }}>EU Complaiances Docs</p>
        </div>
        <div>
          <p style={{ color: "white" }}>Order & Shipping</p>
          <p style={{ color: "white" }}>Join/Login as a Seller</p>
          <p style={{ color: "white" }}>Payment & Pricing</p>
          <p style={{ color: "white" }}>Return & Refunds</p>
          <p style={{ color: "white" }}>FAQs</p>
          <p style={{ color: "white" }}>Privacy Policy</p>
          <p style={{ color: "white" }}>Terms & Conditions</p>
        </div>
        <div>
          <p style={{ color: "white" }}>FOLLOW US</p>
          <img
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "10px",
              marginRight: "15px",
            }}
            src="https://clipartcraft.com/images/instagram-clipart-logo-icon-8.png"
            alt="instagram"
          />
          <img
            style={{ height: "30px", width: "30px", borderRadius: "10px" }}
            src="https://www.pinclipart.com/picdir/middle/56-564631_linkedin-icon-linkedin-white-icon-svg-clipart.png"
            alt="linkedin"
          />
          <p style={{ color: "white" }}>metta muse ACCEPTS</p>
          <img
            style={{
              height: "30px",
              width: "50px",
              borderRadius: "10px",
              marginRight: "10px",
            }}
            src="https://logodix.com/logo/410210.png"
            alt="google pay"
          />
          <img
            style={{
              height: "30px",
              width: "50px",
              borderRadius: "10px",
              marginRight: "10px",
            }}
            src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-2019-present.jpg"
            alt="mastercard"
          />
          <img
            style={{
              height: "30px",
              width: "50px",
              borderRadius: "10px",
              marginRight: "10px",
            }}
            src="https://inspirationfeed.com/wp-content/uploads/2020/05/Official-Paypal-Logo.jpg"
            alt="paypal"
          />
          <img
            style={{
              height: "30px",
              width: "50px",
              borderRadius: "10px",
              marginRight: "10px",
            }}
            src="https://vignette.wikia.nocookie.net/logopedia/images/5/57/AMEX.svg/revision/latest?cb=20180430021859"
            alt="amex"
          />
          <img
            style={{ height: "30px", width: "50px",marginRight:'10px', borderRadius: "10px" }}
            src="https://pluspng.com/img-png/apple-pay-logo-png-friday-five-apple-pay-is-easy-to-use-very-secure-and-1709x1114.png"
            alt="apple pay"
          />
          <img
            style={{ height: "30px", width: "50px", borderRadius: "10px" }}
            src="http://pluspng.com/img-png/logo-bidu-png-baidu-png-300.png"
            alt="bidu pay"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
