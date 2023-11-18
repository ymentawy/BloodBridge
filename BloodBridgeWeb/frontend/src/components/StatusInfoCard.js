import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";

function StatusInfoCard(props) {
  let borderColor, backgroundColor, fontFamily;
  fontFamily = "Roboto, sans-serif";
  if (props.person.status === "Rejected") {
    borderColor = "red";
    backgroundColor = "lightcoral";
  } else if (props.person.status === "Pending") {
    borderColor = "orange";
    backgroundColor = "lightyellow";
  } else if (props.person.status === "Accepted") {
    borderColor = "green";
    backgroundColor = "lightgreen";
  }
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(0);

  const handleCheck = () => {
    setIsChecked(1);
    console.log(isChecked);
  };

  const handleReject = () => {
    setIsChecked(2);
    console.log(isChecked);
  };
  const handlePend = () => {
    setIsChecked(0);
    console.log(isChecked);
  };
  const handleDismiss = () => {
    props.handleDismiss();
  };
  const handleSubmit = () => {
    props.handleSubmit(isChecked, message);
  };

  return (
    <div className="overlay">
      <div className="modalContainer">
        <IconButton
          onClick={handleDismiss}
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
            transition: "0.3s",
            "&:hover": {
              boxShadow: 5,
            },
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
            <div style={{ alignSelf: "center", marginBottom: "10px" }}>
              <Avatar
                alt="O"
                src="/static/images/avatar/1.jpg"
                style={{ textAlign: "center" }}
              />
            </div>
            <Typography
              variant="body1"
              sx={{
                color: "black",
                textAlign: "center",
                fontFamily: fontFamily,
                marginBottom: "10px",
              }}
            >
              {`Name: ${props.person.name}`}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "black",
                textAlign: "center",
                fontFamily: fontFamily,
                marginBottom: "10px",
              }}
            >
              {`Age: ${props.person.age}`}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "black",
                textAlign: "center",
                fontFamily: fontFamily,
                marginBottom: "10px",
              }}
            >
              {`Blood Type: ${props.person.bloodtype}`}
            </Typography>
            <div style={{ alignSelf: "center" }}>
              <Box
                sx={{
                  border: `2px solid ${borderColor}`,
                  borderRadius: "5px",
                  backgroundColor: backgroundColor,
                  width: "100px",
                  textAlign: "center",
                  fontFamily: fontFamily,
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  color="black"
                  sx={{ fontFamily: fontFamily }}
                >
                  {props.person.status}
                </Typography>
              </Box>
            </div>
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
              }}
            >
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    alignSelf: "center",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div style={{ cursor: "pointer" }} onClick={handleCheck}>
                    <CheckIcon
                      sx={{
                        fontSize: 64,
                        color: isChecked === 1 ? "green" : "gray",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <div style={{ cursor: "pointer" }} onClick={handlePend}>
                    <AccessTimeIcon
                      sx={{
                        fontSize: 64,
                        color: isChecked === 0 ? "yellow" : "gray",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <div style={{ cursor: "pointer" }} onClick={handleReject}>
                    <ClearIcon
                      sx={{
                        fontSize: 64,
                        color: isChecked === 2 ? "red" : "grey",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "center",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div style={{ maxHeight: "100px", overflowY: "auto" }}>
                    <TextField
                      label="Input Reason"
                      variant="outlined"
                      fullWidth
                      border="red"
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
                  <Button
                    style={{ backgroundColor: "#f40000" }}
                    sx={{
                      width: "100px",
                      height: "30px",
                      marginLeft: "10px",
                    }}
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default StatusInfoCard;
