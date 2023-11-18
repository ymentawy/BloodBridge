import React, { useState, useEffect } from "react";
import "../App.css";
import InventoryCard from "./InventoryCard";
import { Grid, Box, Typography } from "@mui/material";
import { Button } from "@mui/material";

function InventoryDisplay(props) {
  const [hosptialID, sethospitalID] = useState(null);
  const [isNameAvailable, setIsNameAvailable] = useState(false);
  const [Inventory, setInventory] = useState([]);
  const [newAdded, setNewAdded] = useState(null);
  const [IsChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!IsChecked);
  };
  useEffect(() => {
    if (props.name) {
      setIsNameAvailable(true);
    }
  }, [props.name]);
  useEffect(() => {
    if (props.name) {
      setIsNameAvailable(true);
    }
  }, [props.name]);
  useEffect(() => {
    console.log(props.newInventory);

    const addInventory = async () => {
      const content = JSON.parse(props.newInventory);

      try {
        const response = await fetch(
          "http://localhost:8000/api/inventory/createrequest/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(content),
          }
        );

        const data = await response.json();
        console.log(data);
        setNewAdded(!newAdded);
      } catch (error) {
        console.error("Error updating inventory:", error);
      }
    };

    if (props.newInventory) {
      addInventory();
      props.setNewInventory(null);
    }
  }, [props.newInventory]);
  useEffect(() => {
    console.log(Inventory);
  }, [Inventory]);
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
  useEffect(() => {
    const fetchInventory = async () => {
      const response = await fetch(
        `http://localhost:8000/api/inventory/getallrecords/${props.name}/`
      );
      const data = await response.json();
      console.log(data);
      if (data && data.details && data.details.length > 0) {
        const transformedInventory = data.details.map((record) => ({
          name: record.name,
          bloodtype: record.type,
          id: record.unique_id,
          email: record.email,
          creation_date: record.creation_date,
        }));
        setInventory(transformedInventory);
      } else {
        console.error("No inventory found in the response.");
      }
    };
    if (isNameAvailable) {
      {
        fetchInventory();
      }
    }
  }, [isNameAvailable, newAdded]);
  return (
    <div>
      <Box
        border={1}
        p={2}
        borderRadius={4}
        width="800px"
        style={{ overflowY: "auto", maxHeight: "500px" }}
      >
        {Inventory.filter((record) =>
          props.bloodtypes.includes(record.bloodtype)
        ).length > 0 ? (
          <Grid container spacing={2}>
            {Inventory.filter((record) =>
              props.bloodtypes.includes(record.bloodtype)
            ).map((record) => (
              <Grid item key={record.id} xs={12}>
                <InventoryCard
                  donorName={record.name}
                  donorBloodType={record.bloodtype}
                  id={record.id}
                  creationDate={record.creation_date}
                  onSelect={() => props.setSelectedInventoryItem(record)}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography>No items found for the selected blood types.</Typography>
        )}
      </Box>
    </div>
  );
}

export default InventoryDisplay;
