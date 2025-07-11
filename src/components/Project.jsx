import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./projectcards";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const fullStackProjects = [
    {
      title: "E-Commerce Platform",
      description: "MERN Stack | Product Catalog, Cart & Checkout",
      imgUrl: "/images/project1.png",
    },
    {
      title: "Real-Time Chat App",
      description: "Node.js, Socket.io, React | Live Messaging",
      imgUrl: "/images/project2.png",
    },
    {
      title: "Task Manager API",
      description: "Express & MongoDB | REST API for CRUD tasks",
      imgUrl: "/images/project3.png",
    },
    {
      title: "Portfolio Website",
      description: "React | Responsive Frontend & Animations",
      imgUrl: "/images/project4.png",
    },
    {
      title: "Blog Platform",
      description: "Next.js & MongoDB | Auth, Posts, Comments",
      imgUrl: "/images/project5.png",
    },
    {
      title: "Admin Dashboard",
      description: "React + Chart.js | Data Visualization & CRUD",
      imgUrl: "/images/project6.png",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>Projects</h2>
                  <p>
                    As a Full Stack Developer, I’ve built a wide range of
                    projects from fully responsive frontends to scalable backend
                    APIs. Here's a selection of my work showcasing my skills
                    across the stack.
                  </p>
                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="fullstack">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="fullstack">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="frontend">Frontend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="backend">Backend</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="fullstack">
                        <Row>
                          {fullStackProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="frontend">
                        <p>
                          Projects focusing on modern frontend frameworks like
                          React, responsive UI/UX, animation, and state
                          management using tools like Redux or Context API.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="backend">
                        <p>
                          Backend and API development with Node.js, Express,
                          MongoDB, and secure authentication, including REST and
                          GraphQL APIs.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src="/images/color-sharp2.png"
        alt="Background"
      />
    </section>
  );
};

export default Projects;
