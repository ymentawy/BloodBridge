import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../App.css";

function InventoryCard(props) {
  let fontFamily;
  const [isHovered, setIsHovered] = useState(false);
  fontFamily = "Roboto, sans-serif";
  const cardStyle = {
    userSelect: "none",
    backgroundColor: isHovered ? "#e0e0e0" : "#inherit",
    transition: "background-color 0.3s",
  };
  return (
    <Card
      sx={cardStyle}
      onClick={props.onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent>
        <Typography color="textSecondary">
          <strong>Unique ID:</strong> {props.id}
        </Typography>
        <Typography color="textSecondary">
          <strong>Donor Name:</strong> {props.donorName}
        </Typography>
        <Typography color="textSecondary">
          <strong>Blood Type:</strong> {props.donorBloodType}
        </Typography>
        <Typography color="textSecondary">
          <strong>Retrival Date:</strong> {props.creationDate}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default InventoryCard;
