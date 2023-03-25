import React from "react";
import Layout from "./Layout";
import "./About.css";
import LottieAnimation from "./LottieAnimation";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="About">
        <h1>About</h1>
        <div className="About-content">
          <div className="About-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="100"
              height="100"
            >
              <circle cx="50" cy="50" r="50" fill="#007aff" />
              <circle cx="50" cy="50" r="35" fill="#fff" />
              <circle cx="50" cy="50" r="25" fill="#007aff" />
              <circle cx="50" cy="50" r="15" fill="#fff" />
              <circle cx="50" cy="50" r="5" fill="#007aff" />
            </svg>
          </div>
          <div className="About-text">
            <p>
              Steve Jobs was an American business magnate, industrial designer,
              investor, and media proprietor. He was the chairman, chief
              executive officer (CEO), and co-founder of Apple Inc., the
              chairman and majority shareholder of Pixar, a member of The Walt
              Disney Company's board of directors following its acquisition of
              Pixar, and the founder, chairman, and CEO of NeXT. Jobs is widely
              recognized as a pioneer of the personal computer revolution of the
              1970s and 1980s, along with his early business partner and fellow
              Apple co-founder Steve Wozniak.
            </p>
<LottieAnimation />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

