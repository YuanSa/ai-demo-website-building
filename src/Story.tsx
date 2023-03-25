import React from "react";
import "./Story.css";

const Story = () => {
  return (
    <div className="Story">
      <h1>Our Story</h1>
      <p>
        The creation of this website is a testament to the power of
        collaboration between humans and AI. Working together, I provided
        instructions to ChatGPT, an advanced AI language model from OpenAI,
        using natural language. In response, ChatGPT generated Windows
        PowerShell commands that I executed to build the website, without
        writing any code myself.
      </p>
      <p>
        Throughout the development process, our collaboration was seamless and
        efficient, as I communicated my requirements and ChatGPT provided the
        necessary commands. This even includes the creation of this 'Our Story'
        page, which was generated through the commands provided by ChatGPT.
      </p>
      <p>
        Throughout this journey, we faced and overcame several errors, bugs, and
        difficulties, such as:
        <ul>
          <li>
            Resolving encoding issues and ensuring the correct encoding was used
            when creating and updating files.
          </li>
          <li>
            Debugging and resolving issues with the React Router, including
            adapting the code for different versions and fixing routing
            problems.
          </li>
          <li>
            Implementing responsiveness and optimizing the website for different
            screen sizes and devices, such as mobile phones and tablets.
          </li>
          <li>
            Enhancing the website's design with various styles, animations, and
            visual improvements to create a more appealing and user-friendly
            experience.
          </li>
          <li>
            Ensuring compatibility with different browsers and platforms, as
            well as improving the website's SEO and print-friendliness.
          </li>
        </ul>
        From addressing encoding issues to refining the design and ensuring
        responsiveness, we tackled each challenge as a team, learning and
        growing together. Our unique partnership demonstrates the potential of
        AI-driven development, showcasing how AI can assist and support humans
        in various tasks and projects. The success of this project is a
        testament to the power of human-AI collaboration, and we look forward to
        the exciting innovations the future holds!
      </p>
    </div>
  );
};

export default Story;
