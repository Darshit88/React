import React, { useState } from "react";
import Barcode from "react-barcode";
import { Button, Input } from "@mui/material";
import { saveAs } from "file-saver";
import "./Barcode.css";

const BarcodeGen = () => {
  const [text, setText] = useState("");

const downloadBarcode = () => {
  const svg = document.getElementById("barcode");
  if (!svg) return;

  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svg);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    canvas.toBlob((blob) => {
      saveAs(blob, "barcode.png");
    });
  };

  img.src = `data:image/svg+xml;base64,${btoa(svgString)}`;
};

  return (
    <div className="container-fluid">
      <div className="barcode-box">
        <h1 className="title">Barcode Generator</h1>
        <Input
          className="input-box"
          placeholder="Enter text or number..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="barcode-container">
          {text && (
            <Barcode
              id="barcode"
              value={text}
              width={2}
              height={100}
              displayValue={false}
              background="transparent"
              lineColor="rgb(255, 255, 255)"
            />
          )}
        </div>
        {text && (
          <Button
            variant="contained"
            className="download-btn"
            onClick={downloadBarcode}
          >
            Download Barcode
          </Button>
        )}
      </div>
    </div>
  );
};

export default BarcodeGen;
