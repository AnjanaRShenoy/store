
import React, { useState } from "react";
import Body from "./Body";


const Customize = () => {
  const [category, setCategory] = useState(false);
  const [checked, setChecked] = useState([]);

  const handleCategory = () => {
    setCategory((prevState) => !prevState);
  };

  const unselect = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const handleCheckboxClick = (event) => {
    const { value, checked: isChecked } = event.target;
    if (isChecked) {
      setChecked((prevChecked) => [...prevChecked, value]);
    } else {
      setChecked((prevChecked) => prevChecked.filter((item) => item !== value));
    }
  };

  return (
    <div>
      
      <div>
        <label>
          <input type="checkbox" />{" "}
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>
            CUSTOMIZABLE
          </span>
        </label>
        <hr />

        {category ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p>IDEAL FOR</p>
              <p onClick={handleCategory} style={{ cursor: "pointer" }}>
                ⮞
              </p>
            </div>
            <p onClick={unselect} style={{ cursor: "pointer" }}>
              unselect all
            </p>
            <hr />
            <label>
              <input type="checkbox" />{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                All
              </span>
            </label>
            <label>
              <input
                type="checkbox"
                value="MEN"
                onClick={handleCheckboxClick}
                checked={checked.includes("MEN")}
              />{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                MEN
              </span>
            </label>
            <label>
              <input
                type="checkbox"
                value="Women"
                onClick={handleCheckboxClick}
                checked={checked.includes("Women")}
              />{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                WOMEN
              </span>
            </label>
            <label>
              <input
                type="checkbox"
                value="Electronics"
                onClick={handleCheckboxClick}
                checked={checked.includes("Electronics")}
              />{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                ELECTRONICS
              </span>
            </label>
            <label>
              <input
                type="checkbox"
                value="Jewelery"
                onClick={handleCheckboxClick}
                checked={checked.includes("Jewelery")}
              />{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                JEWELERY
              </span>
            </label>
            {/* <Body category={checked}/> */}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p>IDEAL FOR </p>
            <p onClick={handleCategory} style={{ cursor: "pointer" }}>
              ▼
            </p>
          </div>
        )}
         <hr />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>OCCATION </p>
          <p>▼</p>
        </div>
        <hr />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>WORK </p>
          <p>▼</p>
        </div>
        <hr />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>FABRIC </p>
          <p>▼</p>
        </div>
        <hr />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>SEGMENT </p>
          <p>▼</p>
        </div>
        <hr />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>SUITABLE FOR </p>
          <p>▼</p>
        </div>
        <hr />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>RAW MATERIALS </p>
          <p>▼</p>
        </div>
        <hr />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>PATTERN </p>
          <p>▼</p>
        </div>
      </div>
      
    </div>
  );
};

export default Customize