import React, { useEffect, useState } from "react";
import { Card, CardContent, Button, Typography, Chip } from "@mui/material";
import RequestSent from "./RequestSent";

const mockDonors = [
  {
    name: "Donor 1",
    bloodtype: "A+",
    id: 1,
    email: "donor1@example.com",
    age: 25,
  },
  {
    name: "Donor 2",
    bloodtype: "B+",
    id: 2,
    email: "donor2@example.com",
    age: 30,
  },
];

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const countDonorsByType = (donors) => {
  const counts = {};
  bloodTypes.forEach((type) => (counts[type] = 0));

  donors.forEach((donor) => {
    const { bloodtype } = donor;
    counts[bloodtype]++;
  });

  return counts;
};

function RequestBlood(props) {
  const [selectedBloodTypes, setSelectedBloodTypes] = useState([]);
  const [isSent, setisSent] = useState(false);
  const [isEmpty, setisEmpty] = useState(true);
  useEffect(() => {
    console.log(selectedBloodTypes.length);
    setisEmpty(selectedBloodTypes.length === 0);
    console.log(isEmpty);
  }, [selectedBloodTypes]);
  const donorCounts = countDonorsByType(mockDonors);
  const handleDismiss = () => {
    setisSent(!isSent);
    setSelectedBloodTypes([]);
  };

  const handleBloodTypeSelect = (bloodType) => {
    if (selectedBloodTypes.includes(bloodType)) {
      setSelectedBloodTypes(
        selectedBloodTypes.filter((type) => type !== bloodType)
      );
    } else {
      setSelectedBloodTypes([...selectedBloodTypes, bloodType]);
    }
  };

  const handleRequestButtonClick = () => {
    console.log(`Requesting blood types: ${selectedBloodTypes.join(", ")}`);
    setisSent(true);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {isSent && (
        <RequestSent
          handleDismiss={handleDismiss}
          check={!isEmpty}
          donorCounts={donorCounts}
        />
      )}
      <Card
        style={{
          width: "80%",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginTop: "16px",
        }}
      >
        <CardContent
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Select Blood Types</Typography>
          {bloodTypes.map((bloodType) => (
            <Chip
              key={bloodType}
              label={`${bloodType}: ${donorCounts[bloodType]}`}
              onClick={() => handleBloodTypeSelect(bloodType)}
              color={
                selectedBloodTypes.includes(bloodType) ? "primary" : "default"
              }
              style={{
                width: "100%",
                height: "50px",
                marginBottom: "8px",
                backgroundColor: selectedBloodTypes.includes(bloodType)
                  ? "#ff4d4d"
                  : "#ffc0c0",
                borderRadius: "0", // Set border-radius to 0 for squared corners
              }}
            />
          ))}
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        onClick={handleRequestButtonClick}
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          backgroundColor: "#ff4d4d",
        }}
      >
        Request
      </Button>
    </div>
  );
}

export default RequestBlood;
