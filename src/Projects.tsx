import React from "react";
import Layout from "./Layout";
import "./Projects.css";

const Projects: React.FC = () => {
  return (
    <Layout>
      <div className="Projects">
        <h1>Notable Projects</h1>
        <p>
          Throughout his career, Steve Jobs played a critical role in the
          development of numerous groundbreaking products. Some of his most
          notable projects include:
        </p>
        <ul className="Projects-list">
          <li>
            <h2>Apple I</h2>
            <p>
              The Apple I was the first product developed by Apple Inc.,
              introduced in 1976. It was a personal computer kit that came with
              a pre-assembled motherboard, allowing users to build their own
              system.
            </p>
          </li>
          <li>
            <h2>Apple II</h2>
            <p>
              The Apple II, released in 1977, was a major success for Apple and
              one of the first highly successful mass-produced microcomputers.
              It featured color graphics, a built-in keyboard, and support for
              various peripherals.
            </p>
          </li>
          <li>
            <h2>Macintosh</h2>
            <p>
              Launched in 1984, the Macintosh was the first successful personal
              computer to feature a graphical user interface and a mouse. It
              revolutionized the way people interacted with computers and paved
              the way for future innovations.
            </p>
          </li>
          <li>
            <h2>iPod</h2>
            <p>
              Introduced in 2001, the iPod was a portable media player that
              transformed the way people listened to music. Its innovative
              design, user-friendly interface, and extensive storage capacity
              made it an instant hit.
            </p>
          </li>
          <li>
            <h2>iPhone</h2>
            <p>
              Launched in 2007, the iPhone was a groundbreaking smartphone that
              combined a mobile phone, an iPod, and an internet communication
              device into a single, easy-to-use device. It revolutionized the
              mobile industry and set the standard for future smartphones.
            </p>
          </li>
          <li>
            <h2>iPad</h2>
            <p>
              Debuted in 2010, the iPad was a versatile tablet computer that
              offered a larger display and greater functionality than a
              smartphone. It quickly became popular for web browsing, media
              consumption, and productivity tasks.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
