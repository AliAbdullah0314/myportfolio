import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import QalbPlus from "../assets/img/qalbplus.jpg";
import TaskManager from "../assets/img/taskmanager.jpg";
import F1Fantasy from "../assets/img/f1fantasy.jpg";
import ToDoList from "../assets/img/todolist.png";
import MidisGame from "../assets/img/midisgame.webp";
import SnakeGame from "../assets/img/snakegame.jpg";
import LapTime from "../assets/img/f1laptimes.jpg";
import Quantum from "../assets/img/quantum.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "QalbPlus",
      description: "A web-based system (Django) to find the nearest doctors who match your insurance, and book appointments",
      imgUrl: QalbPlus,
    },
    {
      title: "Task Management System",
      description: "A system which allows employees to track projects and tasks",
      imgUrl: TaskManager,
    },
    {
      title: "F1 Fantasy League",
      description: "A fantasy league game that involves the drivers from the actual current season.",
      imgUrl: F1Fantasy,
    },
    {
      title: "To-Do List",
      description: "A To-Do List for students with an index for procrastination",
      imgUrl: ToDoList,
    },
    {
      title: "Midis Game",
      description: "A web-based trivia game to boost morale around the office",
      imgUrl: MidisGame,
    },
    {
      title: "Snake Game",
      description: "Famous Snake game made using Processing (Python)",
      imgUrl: SnakeGame,
    },
  ];

  const papers = [
    {
      title: "An investigation into the use of quantum security technologies",
      description: "",
      imgUrl: Quantum,
    },
    {
      title: "Minimising total race time for an F1 car taking into account the fuel load effect, and tyre degradation",
      description: "",
      imgUrl: LapTime,
    }
  ];

  return (
    <section className="project" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once={true} >
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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