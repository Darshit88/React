import { useState, useRef } from "react";
import QRCode from "react-qr-code";
import Barcode from "react-barcode";
import * as htmlToImage from "html-to-image";
import "./QrBarcode.css";

function QrBarcode() {
  const [qrText, setQrText] = useState("");
  const [barcodeText, setBarcodeText] = useState("");
  const qrRef = useRef(null);
  const barcodeRef = useRef(null);

  const downloadQRCode = () => {
    if (qrRef.current) {
      htmlToImage.toPng(qrRef.current).then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "qr-code.png";
        link.href = dataUrl;
        link.click();
      });
    }
  };

  const downloadBarcode = () => {
    if (barcodeRef.current) {
      htmlToImage.toPng(barcodeRef.current).then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "barcode.png";
        link.href = dataUrl;
        link.click();
      });
    }
  };

  return (
    <div className="main-container">
      <h2>Code Generator</h2>
      <div className="inner-container">
        <div className="code-container">
          {/* QR Code Section */}
          <div className="qr-section">
            <h3>QR Code</h3>
            <div className="input-section">
              <input
                type="text"
                placeholder="Enter text for QR Code"
                value={qrText}
                onChange={(e) => setQrText(e.target.value)}
              />
            </div>
            <div ref={qrRef} className="code-display">
              {qrText ? (
                <QRCode value={qrText} />
              ) : (
                <p>Enter text to generate QR</p>
              )}
            </div>
            <button onClick={downloadQRCode} disabled={!qrText}>
              Download QR Code
            </button>
          </div>

          {/* Barcode Section */}
          <div className="barcode-section">
            <h3>Barcode</h3>
            <div className="input-section">
              <input
                type="text"
                placeholder="Enter text for Barcode"
                value={barcodeText}
                onChange={(e) => setBarcodeText(e.target.value)}
              />
            </div>
            <div ref={barcodeRef} className="code-display">
              {barcodeText ? (
                <Barcode value={barcodeText} />
              ) : (
                <p>Enter text to generate Barcode</p>
              )}
            </div>
            <button onClick={downloadBarcode} disabled={!barcodeText}>
              Download Barcode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrBarcode;
