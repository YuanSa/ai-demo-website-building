import React from "react";
import Layout from "./Layout";
import "./Skills.css";

const Skills: React.FC = () => {
  return (
    <Layout>
      <div className="Skills">
        <h1>Notable Skills and Qualities</h1>
        <p>
          Steve Jobs was known for his exceptional skills and qualities that
          contributed to his success. Some of the most notable ones include:
        </p>
        <ul className="Skills-list">
          <li>
            <strong>Visionary Leadership:</strong> Steve Jobs had a clear vision
            for Apple and was able to inspire and lead his team towards
            achieving that vision.
          </li>
          <li>
            <strong>Innovation:</strong> He was always pushing the boundaries of
            technology and design, resulting in the creation of groundbreaking
            products.
          </li>
          <li>
            <strong>Focus:</strong> Jobs was known for his intense focus on the
            tasks at hand, which allowed him to excel in product development and
            business strategy.
          </li>
          <li>
            <strong>Attention to Detail:</strong> His keen eye for detail
            ensured that Apple products were both visually appealing and highly
            functional.
          </li>
          <li>
            <strong>Marketing and Branding:</strong> Steve Jobs was a master at
            marketing and branding, helping to build Apple into one of the most
            recognizable and valuable brands in the world.
          </li>
          <li>
            <strong>Public Speaking and Presentation:</strong> His captivating
            and engaging presentations were a key factor in generating
            excitement and interest in Apple products.
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Skills;
