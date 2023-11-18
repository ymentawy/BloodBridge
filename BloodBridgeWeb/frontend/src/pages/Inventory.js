import React, { useState, useEffect } from "react";
import BloodAmountBar from "../components/BloodAmountBar";
import "../App.css";
import InventoryDisplay from "../components/InventoryDisplay";
import ManageInventoryBar from "../components/ManageInventoryBar";
import InventoryManageCard from "../components/InventoryManageCard";
function Inventory(props) {
  const [selectedInventoryItem, setSelectedInventoryItem] = useState(null);
  const [newInventory, setNewInventory] = useState(null);
  let allTypes;
  allTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const [selectedButtons, setSelectedButtons] = useState(allTypes);
  const handleDismiss = () => {
    setSelectedInventoryItem(null);
  };
  const handleSubmit = async (message) => {
    console.log("implement notifications");
    setSelectedInventoryItem(null);
  };
  useEffect(() => {
    console.log(selectedInventoryItem);
  }, [selectedInventoryItem]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {selectedInventoryItem && (
        <InventoryManageCard
          handleSubmit={handleSubmit}
          handleDismiss={handleDismiss}
          setSelectedInventoryItem={setSelectedInventoryItem}
          selectedBag={selectedInventoryItem}
        />
      )}
      <BloodAmountBar
        selectedButtons={selectedButtons}
        setSelectedButtons={setSelectedButtons}
      />
      <InventoryDisplay
        name={props.name}
        bloodtypes={selectedButtons}
        setNewInventory={setNewInventory}
        newInventory={newInventory}
        setSelectedInventoryItem={setSelectedInventoryItem}
      />
      <ManageInventoryBar
        setNewInventory={setNewInventory}
        setSelectedInventoryItem={setSelectedInventoryItem}
      />
    </div>
  );
}

export default Inventory;
