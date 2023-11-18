import React from "react";
import { Button } from "@mui/material";
import "../App.css";

function BloodTypeButton(props) {
  return (
    <Button
      variant="contained"
      style={{
        borderRadius: 100,
        width: "20px",
        backgroundColor: props.selectedButtons.includes(props.value)
          ? "red"
          : "grey",
      }}
      onClick={() => props.buttonClick(props.value)}
    >
      {props.value}
    </Button>
  );
}

export default BloodTypeButton;
