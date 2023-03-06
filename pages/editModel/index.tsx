import Link from "next/link";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiUpload } from "react-icons/bi";
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
          Edit Profile
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
          <div
            style={{
              border: "3px solid #aab0b9",
              borderRadius: "10px",
              margin: "10px",
              padding: "6px",
              backgroundColor: "#eaeaea",
            }}
          >
            <input
              type="file"
              style={{
                color: "#eaeaea",
                margin: "10px",
                padding: "6px",
              }}
            />
            <BiUpload
              style={{
                color: "#aaaab2",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
              }}
            />
          </div>

          <input
            type="text"
            placeholder="Object Name"
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
            placeholder="Size"
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
            placeholder="Color"
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
            placeholder="Material"
            style={{
              border: "3px solid #aab0b9",
              borderRadius: "10px",
              margin: "10px",
              padding: "6px",
              backgroundColor: "#eaeaea",
            }}
          />

          <div
            style={{
              color: "#aab0b9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
            }}
          >
            <button
              style={{
                color: "#aab0b9",
                width: "200px",
                fontSize: "20px",
                border: "2px solid #aab0b9",
                borderRadius: "10px",
                margin: "20px",
              }}
              onClick={send}
            >
              <Link href="/">
                <a>Send</a>
              </Link>
            </button>
          </div>

          <Toaster />
        </div>
      </div>
    </>
  );
}

export default index;
