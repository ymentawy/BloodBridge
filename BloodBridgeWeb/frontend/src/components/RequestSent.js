import { React, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Card, CardContent, Button, Typography } from "@mui/material";

function RequestSent(props) {
  const handleDismiss = () => {
    props.handleDismiss();
  };
  useEffect(() => {
    window.location.reload();
  }, []);
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
              alignItems: "center",
              justifyContent: "center",
              marginY: "10px",
            }}
          >
            {props.check ? (
              <>
                <Typography variant="h5" color="text.primary" gutterBottom>
                  Request Sent!
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Your request has been sent successfully.
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="h5" color="error" gutterBottom>
                  Unsuccessful Request
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Nothing was selected.
                </Typography>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default RequestSent;
