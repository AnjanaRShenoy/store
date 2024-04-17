import React, { useState } from "react";

const YourComponent = () => {
    const [category, setCategory] = useState(false);
    const [check, setCheck] = useState(false);
  
    const handleCategory = () => {
      category ? setCategory(false) : setCategory(true);
    };
  
    const unselect=()=>{
  
    }
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
              <p onClick={handleCategory}>⮞</p>
            </div>
            <p onClick={unselect} style={{color:"gray"}}> unselect all</p>
            <hr />
            <label>
              <input type="checkbox" />{" "}
              <span style={{ fontWeight: "bold", fontSize: "14px" }}>All</span>
            </label>
            <label>
              <input type="checkbox" />{" "}
              <span style={{ fontWeight: "bold", fontSize: "14px" }}>MEN</span>
            </label>
            <label>
              <input type="checkbox" />{" "}
              <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                WOMEN
              </span>
            </label>
            <label>
              <input type="checkbox" />{" "}
              <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                CHILDREN
              </span>
            </label>
      </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p>IDEAL FOR </p>
            <p onClick={handleCategory}>▼</p>
          </div>
        )}
        <hr/>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <p>OCCATION </p>
            <p>▼</p>
          </div>
          <hr/>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <p>WORK </p>
            <p>▼</p>
          </div>
          <hr/>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <p>FABRIC </p>
            <p>▼</p>
          </div>
          <hr/>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <p>SEGMENT </p>
            <p>▼</p>
          </div>
          <hr/>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <p>SUITABLE FOR </p>
            <p>▼</p>
          </div>
          <hr/>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <p>RAW MATERIALS </p>
            <p>▼</p>
          </div>
          <hr/>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <p>PATTERN </p>
            <p>▼</p>
          </div>
      </div>
      
    </div>
  );
};

export default YourComponent;

