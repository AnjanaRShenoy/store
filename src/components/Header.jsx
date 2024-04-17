"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { CiBag1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div
        style={{
          width: "100vw",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            color: "red",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <p style={{ lineHeight: "40px" }}>Lorem ipsum dolor</p>
          <p style={{ lineHeight: "40px" }}>Lorem ipsum dolor</p>
          <p style={{ lineHeight: "40px" }}>Lorem ipsum dolor</p>
        </div>
      </div>
      <div
        style={{
          //   height: "170px",
          width: "100vw",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop:"15px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://clipartcraft.com/images/daisy-clipart-petal-4.png"
          />

          <p
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "35px",
              fontWeight: "bold",
              marginLeft: "10px", // Adjust margin as needed
            }}
          >
            LOGO
          </p>

          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "5px" }}>
              <CiSearch />
            </p>
            <p style={{ marginRight: "5px" }}>
              <IoHeartOutline />
            </p>
            <p style={{ marginRight: "5px" }}>
              <CiBag1 />
            </p>
            <p style={{ marginRight: "5px" }}>
              <CiUser />
            </p>
            ENG▼
          </div>
        </div>

        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  style={{ color: "black", fontWeight: "bold" }}
                  href="#shop"
                >
                  SHOP
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black", fontWeight: "bold" }}
                  href="#skills"
                >
                  SKILLS
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black", fontWeight: "bold" }}
                  href="#stories"
                >
                  STORIES
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black", fontWeight: "bold" }}
                  href="#about"
                >
                  ABOUT
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black", fontWeight: "bold" }}
                  href="#contact"
                >
                  CONTACT US
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div
        style={{
          //   height: "250px",
          width: "100vw",
          backgroundColor: "white",
          border: "0.5px solid #e2dbdb",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p style={{ fontFamily: "monospace", fontSize: "42px" }}>
          DISCOVER OUR PRODUCTS
        </p>
        <p style={{ width: "40vw", fontSize: "18px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta
          dapibus.
        </p>
      </div>
    </div>
  );
};

export default Header;
