import React, { useState, useEffect } from "react";
import DonorCard from "../components/DonorCard";
import StatusInfoCard from "../components/StatusInfoCard";
import Sidebar from "../components/Sidebar";
import "../App.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { YoutubeSearchedForOutlined } from "@mui/icons-material";

function Donors(props) {
  const [donors, setDonors] = useState([]);
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [hosptialID, sethospitalID] = useState(null);
  const [isNameAvailable, setIsNameAvailable] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [filteredDonors, setFilteredDonors] = useState([]);
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    console.log("Selected Status:", selectedStatus);
  };
  useEffect(() => {
    console.log("selectedStatus:", selectedStatus);
    console.log("searchTerm:", searchTerm);
  }, [selectedDonor]);
  useEffect(() => {
    setFilteredDonors(
      donors.filter((donor) => {
        const checkStatus =
          selectedStatus == "All" ? 1 : donor.status == selectedStatus;
        const checkSearch =
          searchTerm == ""
            ? 1
            : donor.name.toLowerCase().includes(searchTerm.toLowerCase());
        return checkStatus && checkSearch;
      })
    );
  }, [selectedDonor, searchTerm, selectedStatus, donors]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    console.log(selectedDonor);
    console.log(props.name + "yes");
  }, [searchTerm]);
  useEffect(() => {
    if (props.name) {
      setIsNameAvailable(true);
    }
  }, [props.name]);
  const statuses = {
    0: "Pending",
    1: "Accepted",
    2: "Rejected",
  };

  const handleDonorClick = (donor) => {
    setSelectedDonor(donor);
  };
  useEffect(() => {
    console.log(selectedDonor);
    console.log(props.name + "yes");
  }, [selectedDonor, props.name]);
  const getID = async () => {
    const response = await fetch(
      `http://localhost:8000/api/getid/${props.name}/`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const content = await response.json();
    sethospitalID(content.id);
  };

  useEffect(() => {
    if (isNameAvailable) {
      getID();
    }
  }, [isNameAvailable, props.name]);
  const handleDonorSubmit = async (status, message) => {
    console.log(status);

    const content = {
      username: String(hosptialID),
      email: String(selectedDonor.id),
      status: statuses[status],
    };

    console.log(content);
    await fetch("http://localhost:8000/api/patientrecords/updatestatus/", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    selectedDonor.status = statuses[status];
    setSelectedDonor(null);
  };
  const handleDonorDismiss = () => {
    setSelectedDonor(null);
  };
  useEffect(() => {
    const fetchDonors = async () => {
      const response = await fetch(
        `http://localhost:8000/api/patientrecords/getallrecords/${props.name}/`
      );
      const data = await response.json();
      if (data && data.patient_details && data.patient_details.length > 0) {
        const transformedDonors = data.patient_details.map((record) => ({
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
  return (
    <div
      style={{
        display: "flex",
        zIndex: 9998,
      }}
    >
      {selectedDonor && (
        <StatusInfoCard
          person={selectedDonor}
          handleDismiss={handleDonorDismiss}
          handleSubmit={handleDonorSubmit}
        />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "10px",
            borderBottom: "1px solid #ccc",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "290px", marginRight: "210px" }}>Name</div>
          <div style={{ marginRight: "70px" }}>Age</div>
          <div style={{ marginRight: "85px" }}>Type</div>
          <div style={{ marginRight: "60px" }}>Status</div>
          <div style={{ marginRight: "40px" }}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <YoutubeSearchedForOutlined />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Select
            label="Status"
            variant="outlined"
            size="small"
            value={selectedStatus}
            onChange={handleStatusChange}
            sx={{ width: "200px" }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Accepted">Accepted</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </div>
        {filteredDonors.map((donor, index) => (
          <DonorCard
            onClick={() => handleDonorClick(donor)}
            key={index}
            person={donor}
            style={{ marginLeft: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}

export default Donors;
