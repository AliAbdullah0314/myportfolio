import { Col } from "react-bootstrap";
import github from '../assets/img/github-mark-white.svg';
import document from '../assets/img/document.svg';
import QuantumSecurityPDF from '../assets/Quantum-security-technologies-EE.pdf'; // Import the PDF
import MinimisingF1PDF from '../assets/Minimising-F1-Race-Time.pdf'; // Import the PDF


export const ProjectCard = ({ title, description, imgUrl, linkUrl, linkImg }) => {
  let icon;
  if(linkImg=="github"){
    icon = github;
  }
  else {
    icon = document;
  }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br /><br />
          <a href={linkUrl} target='_blank'><img className="gitlink" src={icon} /> </a>
        </div>
        
      </div>
    </Col>
  )
}