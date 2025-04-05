import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Button, Input } from "@mui/material";
import { saveAs } from "file-saver";
import "./Qrcode.css";

const Qrcode = () => {
  const [text, setText] = useState("");

  const downloadQR = () => {
    const canvas = document.getElementById("qrcode");
    canvas.toBlob((blob) => {
      saveAs(blob, "qrcode.png");
    });
  };

  return (
    <div className="container-fluid">
      <div className="qr-box">
        <h1 className="title">QR Code Generator</h1>
        <Input
          className="input-box"
          placeholder="Enter text or URL..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="qr-container">
          {text && <QRCodeCanvas id="qrcode" value={text} size={200} />}
        </div>
        {text && (
          <Button
            variant="contained"
            color="primary"
            className="download-btn"
            onClick={downloadQR}
          >
            Download QR Code
          </Button>
        )}
      </div>
    </div>
  );
};

export default Qrcode;