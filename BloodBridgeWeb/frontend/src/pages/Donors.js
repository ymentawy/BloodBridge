import React, { useState, useEffect } from "react";
import DonorCard from "../components/DonorCard";

function Donors(props) {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/patientrecords/getallrecords/${"new"}/`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && data.patient_details && data.patient_details.length > 0) {
          const transformedDonors = data.patient_details.map((record) => ({
            name: record.name,
            bloodtype: record.type,
            age: record.age,
            status: record.status,
          }));
          setDonors(transformedDonors);
        } else {
          console.error("No donors found in the response.");
        }
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchDonors();
  }, []); 

  return (
    <div>
      <div
        style={{
          display: "flex",
          padding: "10px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <div style={{ marginLeft: "300px", marginRight: "200px" }}>Name</div>
        <div style={{ marginRight: "70px" }}>Age</div>
        <div style={{ marginRight: "85px" }}>Type</div>
        <div style={{ marginRight: "80px" }}>Status</div>
      </div>
      {donors.map((donor, index) => (
        <DonorCard key={index} person={donor} style={{ marginLeft: "auto" }} />
      ))}
    </div>
  );
}

export default Donors;
