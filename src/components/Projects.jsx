import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import QalbPlus from "../assets/img/qalbplus.jpg";
import TaskManager from "../assets/img/taskmanager.jpg";
import F1Fantasy from "../assets/img/f1fantasy2.jpg";
import ToDoList from "../assets/img/todolist.png";
import MidisGame from "../assets/img/midisgame.webp";
import F1ml from "../assets/img/f1ml.png";
import LapTime from "../assets/img/f1laptimes.jpg";
import Quantum from "../assets/img/quantum.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import github from '../assets/img/github-mark-white.svg';
import document from '../assets/img/document.svg';
import QuantumSecurityPDF from '../assets/Quantum-security-technologies-EE.pdf'; // Import the PDF
import MinimisingF1PDF from '../assets/Minimising-F1-Race-Time.pdf'; // Import the PDF
import F1mlPDF from '../assets/Ali_Jafri_CapstoneProject1_Fall2024.pdf'; // Import the PDF


export const Projects = () => {

  const projects = [
    {
      title: "Qalb+",
      description: "A web-based system (Django) to find the nearest doctors who match your insurance, and book appointments",
      imgUrl: QalbPlus,
      linkUrl: "https://github.com/AliAbdullah0314/QalbPlus",
      linkImg: "github"
    },
    {
      title: "Task Management System",
      description: "A system which allows employees to track projects and tasks",
      imgUrl: TaskManager,
      linkUrl: "https://github.com/AliAbdullah0314/Quarkus-ToDo",
      linkImg: "github"
    },
    {
      title: "F1 Fantasy League",
      description: "A fantasy league game that involves the drivers from the actual current season.",
      imgUrl: F1Fantasy,
      linkUrl: "https://github.com/AliAbdullah0314/F1-Fantasy-League",
      linkImg: "github"
    },
    {
      title: "To-Do List",
      description: "A To-Do List for students with an index for procrastination",
      imgUrl: ToDoList,
      linkUrl: "https://github.com/AliAbdullah0314/Task-Manager",
      linkImg: "github"
    },
    {
      title: "Midis Game",
      description: "A web-based trivia game to boost morale around the office",
      imgUrl: MidisGame,
      linkUrl: "https://github.com/AliAbdullah0314/MidisGame",
      linkImg: "github"
    },
    {
      title: "Predicting F1 Lap Times",
      description: "Machine learning project that predicts Formula 1 lap times and race outcomes",
      imgUrl: F1ml,
      linkUrl: "https://github.com/AliAbdullah0314/F1_ML",
      linkImg: "github"
    },
  ];

  const papers = [
    {
      title: "An investigation into the use of quantum security technologies",
      description: "",
      imgUrl: Quantum,
      linkUrl: QuantumSecurityPDF,
      linkImg: "document"
    },
    {
      title: "Minimising total race time for an F1 car taking into account the fuel load effect, and tyre degradation",
      description: "",
      imgUrl: LapTime,
      linkUrl: MinimisingF1PDF,
      linkImg: "document"
    },
    {
      title: "Predicting Formula 1 Race Outcomes: A Machine Learning Approach",
      description: "",
      imgUrl: F1ml,
      linkUrl: F1mlPDF,
      linkImg: "document"
    }

  ];

  return (
    <section className="project" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility >
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 id="projects">Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Code</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Papers</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      <Row>
                        {
                          papers.map((paper, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...paper}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}