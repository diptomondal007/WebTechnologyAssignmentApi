import React from "react";
import fidget from "./fidget-spinner.gif";
import {  BallBeat } from "react-pure-loaders";

const Loading = ({ type, loading }) => {
  switch (type) {
    case "ball":
      return <BallBeat color={"#1e2126"} loading={loading} />;
    case "fidget":
      return (
        <div>
          <img
            src={fidget}
            alt="loading..."
            style={{
              backgroundColor: "transparent",
              margin: "auto",
              display: "block"
            }}
          />
        </div>
      );
    default:
      return;
  }
};

export default Loading;
