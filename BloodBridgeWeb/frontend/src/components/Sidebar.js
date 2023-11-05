import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { SideBarSlot } from "./SidebarSlot";
import logo from "../assets/logo_white.png";
import { Avatar } from "@mui/material";
function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  useEffect(() => {
    console.log(hoveredItem);
  }, [hoveredItem]);
  let SidebarMap = () => {
    return SideBarSlot.map((val, key) => {
      const isSelect =
        key === hoveredItem || val.link === window.location.pathname;
      const isLastItem = key === SideBarSlot.length - 1;

      const listItemStyle = {
        listStyle: "none",
        width: "100%",
        color: "white",
        backgroundColor: isSelect ? "#6f0000" : "#af0000",
        padding: "20px",
        margin: "0px",
        marginTop: isLastItem ? "auto" : "0px",
        transition: "background-color 0.1s ease",
        userSelect: "none",
      };

      return (
        <ul
          key={key}
          style={listItemStyle}
          onMouseEnter={() => setHoveredItem(key)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => {
            window.location.pathname = val.link;
          }}
        >
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ flex: "30%", textAlign: "center" }}>{val.icon}</div>
              <div style={{ flex: "50%", textAlign: "left" }}>{val.title}</div>
            </div>
          </li>
        </ul>
      );
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "flex-start",
        backgroundColor: "#af0000",
        position: "sticky",
        height: "100vh",
        width: "200px",
        padding: "0px",
        zIndex: 999,
        top: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Avatar src={logo} alt="Logo" sx={{ width: 150, height: 150 }} />
      </div>
      {SidebarMap()}
    </div>
  );
}

export default Sidebar;
