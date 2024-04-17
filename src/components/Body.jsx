"use client";
import React, { useState, useEffect } from "react";
import styles from "../../public/css/body.css";
import { IoHeartOutline } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import Customize from "./Customize";

const Body = ({category}) => {
  const [filter, setFilter] = useState(false);
  const [selectedItem, setSelectedItem] = useState("RECOMMENDED");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);

        const newData = await response.json();
        console.log(newData);
        setProducts(newData);
        console.log(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(()=>{
    console.log(category,"category");
  },[category])

  const truncateTitle = (title, maxLength) => {
    var x = title.toUpperCase();
    if (title.length > maxLength) {
      return x.substring(0, maxLength) + "...";
    } else {
      return x;
    }
  };

  const handleFilter = () => {
    filter ? setFilter(false) : setFilter(true);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <div
        style={{
          borderBottom: "0.3px solid #e2dbdb",
          marginBottom: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ fontWeight: "bold", margin: "10px" }}>3425 ITEMS</p>
          {filter ? (
            <p
              onClick={handleFilter}
              style={{ margin: "10px", cursor: "pointer", color: "gray" }}
            >
              &lt; hide filter
            </p>
          ) : (
            <p
              onClick={handleFilter}
              style={{ margin: "10px", cursor: "pointer", color: "gray" }}
            >
              &gt; show filter
            </p>
          )}
        </div>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle
            style={{
              backgroundColor: "white",
              color: "black",
              border: "none",
              fontSize: "14px",
            }}
          >
            {selectedItem}
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ fontSize: "14px" }}>
            <Dropdown.Item eventKey="RECOMMENDED">RECOMMENDED</Dropdown.Item>
            <Dropdown.Item eventKey="NEWEST FIRST">NEWEST FIRST</Dropdown.Item>
            <Dropdown.Item eventKey="POPULAR">POPULAR</Dropdown.Item>
            <Dropdown.Item eventKey="PRICE:HIGH TO LOW">
              PRICE: HIGH TO LOW
            </Dropdown.Item>
            <Dropdown.Item eventKey="PRICE:LOW TO HIGH">
              PRICE: LOW TO HIGH
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {filter ? <Customize /> : null}

        <div
          className={styles.gridContainer}
          style={{
            display: "grid",
            gridTemplateColumns: filter
              ? "repeat(3, 280px)"
              : "repeat(4, 280px)",
            gap: "10px",
            cursor: "pointer",
            justifyContent: "space-evenly",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                //   alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "280px",
                  height: "300px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <p
                  style={{
                    fontFamily: "inherit",
                    fontWeight: "bold",
                    marginBottom: "5px",
                    //   textAlign: "left", // Align title to the left
                  }}
                >
                  {truncateTitle(product.title, 23)}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between", // Distribute content evenly along the row
                    alignItems: "center", // Align items vertically
                  }}
                >
                  <p style={{ fontSize: "10px", color: "gray" }}>
                    <span
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Sign in
                    </span>{" "}
                    or Create an account to see pricing
                  </p>
                  <IoHeartOutline /> {/* Heart icon aligned to the right */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
