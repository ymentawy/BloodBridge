import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import {
  Inbox,
  People,
  LocalHospital,
  DirectionsBus,
  Bloodtype,
  PersonPin,
  Logout,
  ShowChart,
} from "@mui/icons-material";

export const SideBarSlot = [
  { title: "Donors", icon: <People />, link: "/donors" },
  { title: "Inventory", icon: <Inbox />, link: "/inventory" },
  { title: "Request", icon: <Bloodtype />, link: "/request" },
  { title: "BloodMobile", icon: <DirectionsBus />, link: "/bloodmobile" },
  { title: "Statistics", icon: <ShowChart />, link: "/statistics" },
  { title: "Profile", icon: <PersonPin />, link: "/profile" },
  { title: "Log Out", icon: <Logout />, link: "/logout" },
];
