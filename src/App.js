import React, { useState, useEffect, useRef } from "react";
// import { QrReader } from "react-qr-reader";
import QRCode from "react-qr-code";

function App() {
  // const [data, setData] = useState("No result");

  // useEffect(() => {
  //   const openMediaDevices = async (constraints) => {
  //     return await navigator.mediaDevices.getUserMedia(constraints);
  //   };

  //   try {
  //     const stream = openMediaDevices({ video: true, audio: true });
  //     console.log("Got MediaStream:", stream);
  //     setData(stream);
  //   } catch (error) {
  //     console.error("Error accessing media devices.", error);
  //   }
  // }, []);

  const inputEl = useRef(null);

  const constraints = {
    audio: true,
    video: { width: 1280, height: 720 },
  };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((mediaStream) => {
      inputEl.srcObject = mediaStream;
      inputEl.onloadedmetadata = () => {
        inputEl.play();

        console.log("did it");
      };
    })
    .catch((err) => {
      // always check for errors at the end.
      console.error(`${err.name}: ${err.message}`);
    });
  return (
    <div>
      {/* <video ref={inputEl}></video> */}
      <video
        onLoadedMetadata={() => {
          console.log("hei");
        }}
        // ref={inputEl}
      />
      Hei du
    </div>
  );
}

export default App;
