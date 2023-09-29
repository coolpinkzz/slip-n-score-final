/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { Heading } from "../Heading";
import { bookNowBtn } from "../styles";
import { LABELS } from "../../utils/labels";

const PriceContainer = {
  width: "75%",
};

export const Price = () => {
  return (
    <div sx={{ position: "relative" }}>
      <img className="bubble" src={"../../bubble.png"} width={200} />
      <h1 className="price-heading"> Exclusive Grand Opening Offers!</h1>
      <div sx={PriceContainer} className="price-container">
        <div sx={{ flex: 1 }}>
          <h1 sx={{ fontFamily: "content" }} className="discount-info">
            Get ready for non-stop fun with a Flat{" "}
            <span sx={{ color: "yellow" }}> 1000 ₹ </span>discount on each slot
          </h1>
        </div>
        <div
          sx={{
            variant: "buttons.warning",
          }}
          className="rate-card"
        >
          <div sx={{ margin: "30px 0px" }}>
            <h2>Weekdays (Mon - Fri)</h2>
            <h3>Max Players: 10 + 2</h3>
            <div className="price-wrap">
              <h3 sx={{ textDecoration: "line-through", margin: "0px" }}>
                2500 Rs
              </h3>
              <h3 sx={{ color: "yellow", fontSize: "30px", margin: "10px" }}>
                1500 Rs (55 min)
              </h3>
            </div>
            <button sx={bookNowBtn}>{LABELS?.BOOK_NOW}</button>
          </div>
          <div sx={{ margin: "30px 0px" }}>
            <h2>Weekends (Sat - Sun)</h2>
            <h3>Max Players: 10 + 2</h3>
            <div className="price-wrap">
              <h3 sx={{ textDecoration: "line-through", margin: "0px" }}>
                3000 Rs
              </h3>
              <h3 sx={{ color: "yellow", fontSize: "30px", margin: "10px" }}>
                2000 Rs (55 min)
              </h3>
            </div>
            <button sx={bookNowBtn}>{LABELS?.BOOK_NOW}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
