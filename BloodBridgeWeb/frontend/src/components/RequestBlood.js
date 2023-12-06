import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent, Button, Typography, Chip } from "@mui/material";
import RequestSent from "./RequestSent";
// const mockDonors = [
//   {
//     name: "Donor 1",
//     bloodtype: "A+",
//     id: 1,
//     email: "donor1@example.com",
//     age: 25,
//   },
//   {
//     name: "Donor 2",
//     bloodtype: "B+",
//     id: 2,
//     email: "donor2@example.com",
//     age: 30,
//   },
// ];

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const countDonorsByType = (don) => {
  const counts = {};
  bloodTypes.forEach((type) => (counts[type] = 0));

  don.forEach((don) => {
    const { bloodtype } = don;
    counts[bloodtype]++;
  });

  return counts;
};

function RequestBlood(props) {
  const [selectedBloodTypes, setSelectedBloodTypes] = useState([]);
  const [isSent, setisSent] = useState(false);
  const [isEmpty, setisEmpty] = useState(true);
  const [donors, setDonors] = useState([]);
  const [isNameAvailable, setIsNameAvailable] = useState(false);
  useEffect(() => {
    const fetchDonors = async () => {
      const response = await fetch(
        `http://localhost:8000/api/inventory/getallrecords/${props.name}/`
      );
      const data = await response.json();
      if (data && data.details && data.details.length > 0) {
        const transformedDonors = data.details.map((record) => ({
          name: record.name,
          bloodtype: record.type,
          id: record.id,
          email: record.email,
          age: record.age,
          status: record.status,
        }));
        setDonors(transformedDonors);
      } else {
        console.error("No donors found in the response.");
      }
    };
    if (isNameAvailable) {
      {
        fetchDonors();
      }
    }
  }, [isNameAvailable]);
  useEffect(() => {
    if (props.name) {
      setIsNameAvailable(true);
    }
  }, [props.name]);
  useEffect(() => {
    console.log(selectedBloodTypes.length);
    setisEmpty(selectedBloodTypes.length === 0);
    console.log(isEmpty);
  }, [selectedBloodTypes]);
  const donorCounts = countDonorsByType(donors);
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
