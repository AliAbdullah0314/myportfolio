import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { title: "JAVA" },
    { title: "PYTHON" },
    { title: "C/C++" },
    { title: "JAVASCRIPT" },
    { title: "HTML" },
    { title: "CSS" },
    { title: "SQL" },
    { title: "MONGODB" },
    { title: "GIT" },
    { title: "FIREBASE" },
    { title: "QUARKUS" },
    { title: "DJANGO" },
    { title: "FLASK" },
    { title: "NODE.JS" },
    { title: "VUE .JS" },
    { title: "REACT" },
    { title: "BOOTSTRAP" },
    { title: "JAVAFX" },
    { title: "CAD DESIGN" },
    { title: "ASSEMBLY (X86)" },
    { title: "TAILWIND CSS" },
  ]

  const langs = [
    { title: "JAVA" },
    { title: "PYTHON" },
    { title: "C/C++" },
    { title: "JAVASCRIPT" },
    { title: "HTML" },
    { title: "CSS" },
    { title: "SQL" },
    { title: "ASSEMBLY (X86)" }
  ]


  const frameworks = [
    { title: "MONGODB" },
    { title: "GIT" },
    { title: "FIREBASE" },
    { title: "QUARKUS" },
    { title: "DJANGO" },
    { title: "FLASK" },
    { title: "NODE.JS" },
    { title: "VUE .JS" },
    { title: "REACT" },
    { title: "BOOTSTRAP" },
    { title: "TAILWIND" },
    { title: "JAVAFX" },
    { title: "CAD DESIGN" },

  ]

  return (
    <section className="skill" >
      <div className="container" id="skills">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
              <Tab.Container id="skills-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Languages</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Frameworks & Tools</Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link eventKey="third">Tools</Nav.Link>
                  </Nav.Item> */}
                </Nav>
                <Tab.Content id="slideInUp" >
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        langs.map((skill, index) => {
                          return (
                            <Col size={12} sm={6} md={4}>
                              <div className="skill-item">
                                <h4>{skill.title}</h4>
                              </div>
                            </Col>
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    <Row>
                      {
                        frameworks.map((skill, index) => {
                          return (
                            <Col size={12} sm={6} md={4}>
                              <div className="skill-item">
                                <h4>{skill.title}</h4>
                              </div>
                            </Col>
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
              {/* <Row>
                {
                  skills.map((skill, index) => {
                    return (
                      <Col size={12} sm={6} md={4}>
                        <div className="skill-item">
                          <h4>{skill.title}</h4>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row> */}
              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel> */}

            </div>
          </div>
        </div>
      </div>

      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>

  )
}