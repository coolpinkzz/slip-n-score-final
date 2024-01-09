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
      <h1 className="price-heading"> Exclusive Winter Offers!</h1>
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
            fontFamily: "content",
          }}
          className="rate-card"
        >
          <div sx={{ margin: "30px 0px" }}>
            <h2>Weekdays (Mon - Fri)</h2>
            <h3>Max Players: 10 + 2 (Substitute)</h3>
            <div className="price-wrap">
              <h3 sx={{ textDecoration: "line-through", margin: "0px" }}>
                2499 Rs
              </h3>
              <h3 sx={{ color: "yellow", fontSize: "30px", margin: "10px" }}>
                1499 Rs (55 min)
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
            <div className="price-wrap">
              <h3 sx={{ textDecoration: "line-through", margin: "0px" }}>
                2999 Rs
              </h3>
              <h3 sx={{ color: "yellow", fontSize: "30px", margin: "10px" }}>
                1999 Rs (55 min)
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
