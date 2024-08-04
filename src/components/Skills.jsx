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

  return (
    <section className="skill" >
      <div className="container" id="skills">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
              <Row>
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
              </Row>
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