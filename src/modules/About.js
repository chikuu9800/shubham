import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../CSS/About.css"; // Import custom styles

const About = () => {
  return (
    <Container className="about-container">
      <Row>
        <Col xs={12}>
          <div className="about-title">
            <h1>About Me</h1>
          </div>
          <div className="about-content">
            <p>
              Hello, my name is Shubham Chikhale. I hold a bachelor's degree in Computer Applications, which I completed in 2022. During my academic journey, I built a web application called MovieDB using React.js, showcasing my proficiency in front-end development.
            </p>
            <p>
              I have six months of experience as a developer at Ideasmith, where I worked on various projects, including a Father's Day website and a Cricket Lions webpage. My professional background is complemented by a certification as a MERN stack developer, underlining my expertise in MongoDB, Express.js, React.js, and Node.js.
            </p>
            <p>
              I am passionate about leveraging technology to create impactful and efficient solutions, and I am constantly seeking opportunities to expand my skills and contribute to innovative projects.
            </p>
            <p>
              In my free time, I enjoy learning new programming languages, exploring the latest tech trends, and working on personal projects to further hone my skills.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
