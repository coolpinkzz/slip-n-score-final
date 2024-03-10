/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { Heading } from "../Heading";
import { bookNowBtn } from "../styles";
import { LABELS } from "../../utils/labels";
import { Link } from "gatsby";
import { WHATSAPPLINK } from "../../utils/constant";

const PriceContainer = {
  width: "container",
};

export const Price = () => {
  return (
    <div sx={{ position: "relative" }}>
      <img className="bubble" src={"../../bubble.png"} width={200} />
      {/*<h1 className="price-heading"> Exclusive Student Offer!</h1>*/}

      <div sx={PriceContainer} className="price-container">
        <div className="studentOfferContainer">
          <div className="studentOfferImgConatiner">
            <img
              src={"../../student-offer.png"}
              alt="student-offer"
              className="studentOfferImg"
            />
          </div>
          <div sx={{ fontFamily: "content" }} className="studentOfferDiv">
            <h1>Get 10% off on your Soap Football!</h1>
            <p sx={{ marginTop: "5px", textAlign: "justify" }}>
              Whether you're taking a break from your studies or looking for a
              thrilling way to bond with friends, Slip n Score is the place to
              be. Immerse yourself in the world of football, slipping, and
              sliding on our specially designed soap football field.
            </p>
            <div className="howtoavail">
              <p sx={{ color: "yellow" }}>
                Present your valid student ID at the counter.
              </p>
              <p sx={{ color: "yellow" }}>
                Enjoy a 10% discount on your Soap Football session.
              </p>
            </div>
          </div>
        </div>
        <div className="studentOfferContainer">
          <div className="studentOfferImgConatiner">
            <img
              src={"../../happy-hour.png"}
              alt="student-offer"
              className="studentOfferImg"
            />
          </div>
          <div sx={{ fontFamily: "content" }} className="studentOfferDiv">
            <h1>Happy Hour Special at Slip n Score</h1>
            <h3 sx={{ color: "yellow" }}>Timings : 10am to 4pm</h3>
            <p sx={{ marginTop: "5px", textAlign: "justify" }}>
              Looking for a midday break filled with excitement and laughter?
              Look no further! Slip n Score Soap Football is thrilled to
              introduce our Happy Hour offer, ensuring non-stop fun from 10 am
              to 4 pm.
            </p>
            <div sx={{ color: "yellow" }} className="howtoavail">
              <h3>Monday - Friday : ₹ 1200 /-</h3>
              <h3>Saturday - Sunday or Holidays : ₹ 1800 /-</h3>
            </div>
          </div>
        </div>
        {/*<div sx={{ flex: 1 }}>
          <h1 sx={{ fontFamily: "content" }} className="discount-info">
            Get ready for non-stop fun with a Flat{" "}
            <span sx={{ color: "yellow" }}> 1000 ₹ </span>discount on each slot
          </h1>
        </div>*/}
        <div
          sx={{
            variant: "buttons.warning",
            fontFamily: "content",
          }}
          className="rate-card"
        >
          <div sx={{ margin: "30px 0px" }}>
            <h2>Weekdays (Mon - Fri)</h2>
            <h3>Max Players: 10 + 2 (Substitute)</h3>
            <p sx={{ margin: "10px 0px" }}>Timings (10am - 4pm)</p>
            <div className="price-wrap">
              <h3 sx={{ color: "yellow", fontSize: "30px" }}>
                1199 Rs (60 min)
              </h3>
            </div>
            <p sx={{ margin: "10px 0px" }}>Timings (4pm - 9pm)</p>
            <div className="price-wrap">
              <h3 sx={{ color: "yellow", fontSize: "30px" }}>
                1499 Rs (60 min)
              </h3>
            </div>
            <button sx={bookNowBtn}>
              <Link to={WHATSAPPLINK} target="_blank">
                {" "}
                {LABELS?.BOOK_NOW}
              </Link>
            </button>
          </div>
          <div sx={{ margin: "30px 0px" }}>
            <h2>Weekends (Sat - Sun) + Holidays</h2>
            <h3>Max Players: 10 + 2 (Substitute)</h3>
            <p sx={{ margin: "10px 0px" }}>Timings (10am - 4pm)</p>
            <div className="price-wrap">
              <h3 sx={{ color: "yellow", fontSize: "30px" }}>
                1799 Rs (60 min)
              </h3>
            </div>
            <p sx={{ margin: "10px 0px" }}>Timings (4pm - 9pm)</p>
            <div className="price-wrap">
              <h3 sx={{ color: "yellow", fontSize: "30px" }}>
                1999 Rs (60 min)
              </h3>
            </div>
            <button sx={bookNowBtn}>
              <Link to={WHATSAPPLINK} target="_blank">
                {" "}
                {LABELS?.BOOK_NOW}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
