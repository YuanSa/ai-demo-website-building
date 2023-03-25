import React from "react";
import Layout from "./Layout";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="Contact">
        <h1>Contact</h1>
        <p>
          Although Steve Jobs has passed away, his legacy lives on through Apple
          and its products. For any inquiries related to Apple, please use the
          following information:
        </p>
        <p>
          <strong>Apple Inc.</strong>
          <br />
          One Apple Park Way
          <br />
          Cupertino, CA 95014
          <br />
          United States
          <br />
          <br />
          <strong>Phone:</strong> +1 (800) 692-7753
          <br />
          <strong>Website:</strong>{" "}
          <a
            href="https://www.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.apple.com
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
