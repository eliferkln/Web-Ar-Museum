import React from "react";
import toast, { Toaster } from "react-hot-toast";

import styles from ".././styles/Home.module.css";

function index() {
  function send() {
    toast.success("Success Send !", {
      position: "top-center",
    });
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "60px",
          backgroundColor: "#111827",
        }}
      >
        <h3
          style={{
            fontSize: "40px",
            color: "#aab0b9",
          }}
        >
          {" "}
          Contact Me{" "}
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "350px",
            width: "100%",
            margin: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Name"
            style={{
              border: "3px solid #aab0b9",
              borderRadius: "10px",
              margin: "10px",
              padding: "6px",
              backgroundColor: "#eaeaea",
            }}
          />
          <input
            type="text"
            placeholder="Email"
            style={{
              border: "3px solid #aab0b9",
              borderRadius: "10px",
              margin: "10px",
              padding: "6px",
              backgroundColor: "#eaeaea",
            }}
          />
          <textarea
            rows={6}
            placeholder="Message"
            style={{
              border: "3px solid #aab0b9",
              borderRadius: "10px",
              margin: "10px",
              backgroundColor: "#eaeaea",
              padding: "8px",
            }}
          />
          <button
            style={{
              color: "#aab0b9",
              fontSize: "20px",
              border: "2px solid #aab0b9",
              borderRadius: "10px",
              margin: "10px",
            }}
            onClick={send}
          >
            Send
          </button>
          <Toaster />
        </div>
      </div>

      {/* <img
        src="images/footer-curve.svg"
        alt="Footer"
        className="contactpage"
        loading="lazy"
        height={100}
        role="presentation"
        style={{
          backgroundColor: "#dddcde",
          maxWidth: "1550px",
          width: "100%",
          display: "block",
        }}
      /> */}
    </>
  );
}

export default index;
