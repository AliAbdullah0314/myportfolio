import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/headshot-circle2.png";
import headerVid from "../assets/vid/intro-vid3.mp4";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Computer Science Major", "Studying at NYUAD", "Rising Senior"];
    const description = "Rising Senior | Computer Science Major | Studying at NYUAD"
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick2();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {

        
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(200);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    const tick2 = () => {
        if (text.length<description.length) {
            
            let updatedText = description.substring(0, text.length + 1);
            setText(updatedText);
            setDelta(250 - Math.random() * 200)
            
        }
        else {

        }
    }
    

    return (
        <section className="banner" id="home">
            <video src={headerVid} autoPlay loop muted typeof="video/mp4" className="vid">
            </video>
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    {/* <span className="tagline">Welcome to my Portfolio</span> */}
                                    <h1>{`Hi! I'm Ali`} </h1>
                                    <h4><span className="wrap">{text}</span></h4>
                                    <p>I’m a senior at NYU Abu Dhabi, majoring in Computer Science with a minor in Economics. Through my academic and extracurricular experiences, I have gained a strong foundation in software development, data analysis, and even economic principles. <br /><br />
                                        My interests include app and web development, as well as machine learning.
                                        Beyond technology, I have a deep-seated passion for motorsport, particularly Formula 1. This enthusiasm fuels my drive for excellence and precision in everything I do.</p>
                                    <button onClick={event =>  window.location.href='https://www.linkedin.com/in/ali-abdullah-jafri/'} >Let’s Connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className= "animate__animated animate__zoomIn">
                            <img src={headerImg} alt="Header Img" />
                        </div>
                        {/* <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}