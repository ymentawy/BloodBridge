import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

function DonorCard(props) {
  let borderColor, backgroundColor, fontFamily;
  fontFamily = "Comic Sans MS, sans-serif";
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
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 8,
        boxShadow: 2,
        marginY: 2,
        padding: 2,
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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex",
        }}
      >
        <Avatar
          alt="O"
          src="/static/images/avatar/1.jpg"
          style={{ textAlign: "center" }}
          sx={{ marginRight: "20px" }}
        />
        <Divider
          orientation="vertical"
          sx={{
            color: "black",
            borderWidth: "4px",
            height: "40px",
            marginRight: "20px",
            background: "black",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            width: "400px",
            color: "black",
            textAlign: "center",
            fontFamily: fontFamily,
          }}
        >
          {props.person.name}
        </Typography>
        <Divider
          orientation="vertical"
          sx={{
            color: "black",
            borderWidth: "4px",
            height: "40px",
            marginX: "10px",
            background: "black",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            width: "40px",
            color: "black",
            textAlign: "center",
            fontFamily: fontFamily,
          }}
        >
          {props.person.age}
        </Typography>
        <Divider
          orientation="vertical"
          sx={{
            color: "black",
            borderWidth: "4px",
            height: "40px",
            marginX: "10px",
            background: "black",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            width: "100px",
            color: "black",
            textAlign: "center",
            fontFamily: fontFamily,
          }}
        >
          {props.person.bloodtype}
        </Typography>
        <Divider
          orientation="vertical"
          sx={{
            color: "black",
            borderWidth: "4px",
            height: "40px",
            marginRight: "20px",
            background: "black",
          }}
        />
        <Box
          sx={{
            border: `2px solid ${borderColor}`,
            borderRadius: "5px",
            backgroundColor: backgroundColor,
            width: "100px",
            textAlign: "center",
            fontFamily: fontFamily,
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
      </CardContent>
    </Card>
  );
}

export default DonorCard;
