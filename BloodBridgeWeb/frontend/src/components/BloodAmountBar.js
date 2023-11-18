import { React, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography"; // Import Typography
import BloodTypeButton from "./BloodTypeButton";
import "../App.css";
import { Button } from "@mui/material";

function BloodAmountBar(props) {
  let fontFamily;
  let allTypes;
  allTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  fontFamily = "Roboto, sans-serif";
  const handleButtonClick = (bloodType) => {
    if (props.selectedButtons.includes(bloodType)) {
      props.setSelectedButtons(
        props.selectedButtons.filter((type) => type !== bloodType)
      );
    } else {
      props.setSelectedButtons([...props.selectedButtons, bloodType]);
    }
  };
  const handleButtonAll = () => {
    if (props.selectedButtons.length !== 8) {
      props.setSelectedButtons(allTypes);
    } else {
      props.setSelectedButtons([]);
    }
  };
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {allTypes.map((type) => (
            <BloodTypeButton
              key={type}
              value={type}
              buttonClick={handleButtonClick}
              selectedButtons={props.selectedButtons}
            />
          ))}
          <Button
            variant="contained"
            style={{
              borderRadius: 100,
              backgroundColor: "black",
            }}
            onClick={handleButtonAll}
          >
            All
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default BloodAmountBar;
