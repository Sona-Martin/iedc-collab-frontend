import React from "react";
import "./Request.css";
import { Button } from "@mui/material";

function Sent() {
  return (
    <div className="received_sent_box">
      <div className="received_bpx_header">
        <p>Project Name</p>
        <Button
          sx={{
            fontSize: "1rem",
            display: "flex",
          }}
          variant="outlined"
        >
          View Projects
        </Button>
      </div>
      <div className="req_profile_box">
        <img
          className="req_profile_img"
          src="https://vpnoverview.com/wp-content/uploads/what-is-a-hacker-what-is-hacking-featured-800x400.png"
          alt=""
        />
        <div className="req_profile_details">
          <h4>Guy Hawkins</h4>
          <p>
            Invite Message - Add a default Message if user doesnot customize it
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sent;