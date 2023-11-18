import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";

function InventoryManageCard(props) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    props.handleSubmit(message);
  };

  return (
    <div className="overlay">
      <div className="modalContainer">
        <IconButton
          onClick={props.handleDismiss}
          sx={{
            color: "white",
            backgroundColor: "red",
            width: "30px",
            height: "30px",
            borderRadius: "100%",
            marginLeft: "auto",
          }}
        >
          <HighlightOffIcon />
        </IconButton>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            boxShadow: 2,
            padding: 2,
            maxHeight: "600px",
            overflowY: "auto",
            backgroundColor: "white",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              marginY: "10px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "black",
                textAlign: "center",
                fontFamily: "Roboto, sans-serif",
                marginBottom: "10px",
              }}
            >
              {`BloodBag ID: ${
                props.selectedBag.unique_id
                  ? props.selectedBag.unique_id
                  : props.selectedBag.id
              }`}
            </Typography>

            <Divider
              sx={{
                color: "black",
                borderWidth: "4px",
                height: "2px",
                width: "100%",
                background: "black",
                marginTop: "10px",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
                width: "100%",
              }}
            >
              <div
                style={{
                  alignSelf: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                }}
              ></div>
              <div
                style={{
                  alignSelf: "flex-end", // Align to bottom right
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      maxHeight: "100px",
                      overflowY: "auto",
                      marginRight: "10px",
                    }}
                  >
                    <TextField
                      label="Receiver's message"
                      variant="outlined"
                      fullWidth
                      multiline
                      margin="normal"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "black",
                          },
                          "&:focus-within fieldset": {
                            borderColor: "red",
                          },
                        },
                      }}
                    />
                  </div>
                  <IconButton
                    style={{
                      color: "white",
                      backgroundColor: "green",
                      height: "50px",
                      marginTop: "10px",
                      width: "50px",
                      transition: "background-color 0.3s",
                    }}
                    onClick={handleSubmit}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "lightgreen";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "green";
                    }}
                  >
                    <CheckBoxIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InventoryManageCard;
