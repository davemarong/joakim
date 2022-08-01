import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

function App() {
  const [data, setData] = useState("No result");

  const openMediaDevices = async (constraints) => {
    return await navigator.mediaDevices.getUserMedia(constraints);
  };

  try {
    const stream = openMediaDevices({ video: true, audio: true });
    console.log("Got MediaStream:", stream);
  } catch (error) {
    console.error("Error accessing media devices.", error);
  }
  return (
    <div>
      Hei du
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </div>
  );
}

export default App;
