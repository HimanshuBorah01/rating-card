import React, { useState } from "react";
import starIcon from "../assets/icon-star.svg";
import "../components/Reting.css";
import { useNavigate } from "react-router-dom";

function Reting() {
  const [rating, setRating] = useState(null);
  const navigate = useNavigate();

  const GetFormData = (value) => {
    setRating(value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (rating === null) {
      alert("Please select a rating before submitting!");
      return;
    }
    console.log("Navigating with rating:", rating);
    navigate("/submit", { state: { rating } });
  };
  return (
    <form onSubmit={handelSubmit} className="rating-container">
      <div className="starIcon">
        <img src={starIcon} />
      </div>
      <div className="title">
        <h2>How Did We Do?</h2>
      </div>
      <div className="paragraph">
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rating-section">
        <button
          type="button"
          onClick={() => GetFormData(1)}
          className={`${rating === 1 ? "active" : ""} rating-btn`}
        >
          1
        </button>
        <button
          type="button"
          onClick={() => GetFormData(2)}
          className={`${rating === 2 ? "active" : ""} rating-btn`}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => GetFormData(3)}
          className={`${rating === 3 ? "active" : ""} rating-btn`}
        >
          3
        </button>
        <button
          type="button"
          onClick={() => GetFormData(4)}
          className={`${rating === 4 ? "active" : ""} rating-btn`}
        >
          4
        </button>
        <button
          type="button"
          onClick={() => GetFormData(5)}
          className={`${rating === 5 ? "active" : ""} rating-btn`}
        >
          5
        </button>
      </div>
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Reting;
