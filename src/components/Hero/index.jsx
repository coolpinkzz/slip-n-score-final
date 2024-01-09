/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Lottie from "react-lottie";
import soapAnimation from "../../../static/soap.json";
import { Link } from "gatsby";

import "./index.css";
import { StaticImage } from "gatsby-plugin-image";
import { FaWhatsapp } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Hero = () => {
  const bookNowBtn = {
    variant: "buttons.primary",
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: soapAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div
        sx={{
          textAlign: "center",
          position: "relative",
        }}
      >
        <img className="bubble_hero" src={"../../bubble.png"} width={200} />
        <div
          sx={{
            background: "tomato",
          }}
          className="contact-box"
        >
          <div className="social">
            <Link to="https://www.instagram.com/slipnscoreblr" target="_blank">
              <p sx={{ fontFamily: "content" }} className="welcome">
                <span sx={{ display: "flex" }} className="icons">
                  <GrInstagram color="white" />
                </span>
                slipnscoreblr
              </p>
            </Link>
          </div>
          <div className="social">
            <Link to="https://wa.me/message/PCN56GV7XJQZD1" target="_blank">
              <p sx={{ fontFamily: "content" }} className="welcome">
                <span sx={{ display: "flex" }} className="icons">
                  <FaWhatsapp color="white" />
                </span>
                9886011023
              </p>
            </Link>
          </div>
          <div className="social hideOnPhone">
            <Link to="https://g.co/kgs/9CHAfWE" target="_blank">
              <p sx={{ fontFamily: "content" }} className="welcome">
                <span sx={{ display: "flex" }} className="icons">
                  <FaMapMarkerAlt color="white" />
                </span>
                Slip N Score Soap Football
              </p>
            </Link>
          </div>
        </div>
        <div className="hero-bg">
          <StaticImage
            className="hero-img"
            src="https://ik.imagekit.io/slipnscore/Kick,%20Slide,%20Score!%20Immerse%20yourself%20in%20the%20thrill%20of%20Slip%20'n'%20Score%20Soap%20Football%20in%20Bangalore%20(1)%20(1).jpg?updatedAt=1704780478056"
            alt="slip n score"
          />
          <div className="hero-dull"></div>
          {/*<p className="hero-text">
            Score Big with{" "}
            <span className="fadein" sx={{ color: "aqua" }}>
              {" "}
              Bengaluru's
            </span>{" "}
            One and Only{" "}
            <span className="fadein" sx={{ color: "aqua" }}>
              Soapy Football
            </span>{" "}
            Adventure
            <br /> Experience Now!
            <br />
            <button className="hero-btn" sx={bookNowBtn}>
              <Link
                to="https://playo.co/venues/hulimavu-bengaluru/slip-n-score-soap-football-hulimavu-bengaluru"
                target="_blank"
              >
                {" "}
                {LABELS?.BOOK_NOW}
              </Link>
            </button>
          </p>*/}
        </div>
      </div>
    </>
  );
};
