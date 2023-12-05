import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";

function ManageInventoryBar(props) {
  const [scanResult, setScanResult] = useState(null);
  const [isScanner, setIsScanner] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();
  let scanner = null;

  useEffect(() => {
    if (scanResult && isAdd) {
      props.setNewInventory(scanResult);
    } else if (scanResult && isSearch) {
      const jsonRes = JSON.parse(scanResult);
      props.setSelectedInventoryItem(jsonRes);
    }
    console.log(scanResult);
    setScanResult(null);
    setIsAdd(false);
    setIsSearch(false);
  }, [scanResult]);

  useEffect(() => {
    const success = (result) => {
      setIsScanner(false);
      setScanResult(result);
      scanner.clear();
    };

    const error = (err) => {
      console.warn(err);
    };
    if (isScanner) {
      scanner = new Html5QrcodeScanner("reader", {
        qrbox: { width: 400, height: 400 },
        fps: 5,
      });

      scanner.render(success, error);
    }

    console.log(scanResult);
  }, [isScanner]);

  const handleSearch = () => {
    setIsScanner(!isScanner);
    if (scanner) {
      scanner.clear();
      setIsAdd(false);
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }
  };
  const handleAdd = () => {
    setIsScanner(!isScanner);
    if (scanner) {
      scanner.clear();
      setIsAdd(false);
      setIsSearch(false);
    } else {
      setIsAdd(true);
    }
  };
  const handleRequest = () => {
    navigate("/request");
    window.location.reload();
  };

  const handleButtonClick = (bloodType) => {
    console.log("clicked");
  };

  return (
    <Card
      sx={{
        width: "100%",
      }}
    >
      {isScanner && <div id="reader"></div>}
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <Button
          variant="contained"
          size="large"
          style={{
            backgroundColor: "red",
            width: "200px",
          }}
          onClick={handleAdd}
        >
          Add Using QR
        </Button>
        <Button
          size="large"
          variant="contained"
          style={{
            backgroundColor: "red",
            width: "200px",
          }}
          onClick={handleSearch}
        >
          Search Using QR
        </Button>
        <Button
          size="large"
          variant="contained"
          style={{
            backgroundColor: "red",
            width: "200px",
          }}
          onClick={() => handleRequest()}
        >
          Request Blood
        </Button>
      </CardContent>
    </Card>
  );
}

export default ManageInventoryBar;
