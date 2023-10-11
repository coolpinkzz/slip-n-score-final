/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heading } from "../Heading";
import "./index.css";

const VideoContainer = {
  width: "75%",
  margin: "auto",
  textAlign: "center",
};

export const YoutubeVideo = () => {
  return (
    <div sx={VideoContainer}>
      <Heading>Slip N Score Trending Vlog</Heading>
      <div className="iframe-container">
        <iframe
          className="responsive-iframe"
          //  width="560"
          //  height="315"
          src="https://www.youtube.com/embed/zqev3674MdA?si=koC1b0rpmjI0gjj5"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
