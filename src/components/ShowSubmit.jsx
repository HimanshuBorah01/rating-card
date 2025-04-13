import React from "react";
import "../components/ShowSubmit.css";
import SubmiIcon from "../assets/illustration-thank-you.svg";
import { useLocation } from "react-router-dom";

function ShowSubmit() {
  const location = useLocation();
  const rating = location.state?.rating || "No rating";
  console.log("Received rating:", rating);
  return (
    <div className="conatainer2">
      <div className="image-div">
        <img className="image2" src={SubmiIcon} alt="thank you image" />
      </div>
      <div className="show-rating2">
        <p>
          You selected <span>{rating}</span> out of 5
        </p>
      </div>
      <div className="title2">
        <h2>Thank you!</h2>
      </div>
      <div>
        <p className="paragraph2">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default ShowSubmit;
