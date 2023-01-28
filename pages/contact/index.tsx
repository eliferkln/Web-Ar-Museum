import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
function index() {
  function send() {
    toast.success("Success Send !", {
      position: "top-center",
    });
  }
  return (
    <>
      {" "}
      <div
        style={{
          backgroundColor: "#111827",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "140px",
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
            width: "350px",
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
              padding: "4px",
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
              padding: "4px",
              backgroundColor: "#eaeaea",
            }}
          />
          <input
            type="text"
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
      <img
        src="images/footer-curve.svg"
        alt="Footer"
        className="w-full bg"
        loading="lazy"
        height={100}
        role="presentation"
        width={1550}
        style={{ backgroundColor: "#dddcde" }}
      />
    </>
  );
}

export default index;
