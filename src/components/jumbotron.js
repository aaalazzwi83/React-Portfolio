import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import image from "../images/about-me-photo.jpg";
import githubLogo from "../images/GitHub-Mark-120px-plus.png";
import linkedInLogo from "../images/linkedin.png";

const MainSection = (props) => {
  return (
    <div>
        <div className="row">
            <div className="col-12">
                <Jumbotron fluid>
                    <Container fluid>
                    <h1 className="display-3">From BA to Full Stack Developer</h1>
                    <p className="lead">My personal journey from a Business Analyst to coder.</p>

                    <a className="logo" href="https://github.com/aaalazzwi83">
                        <img src={githubLogo} alt="GitHub logo" id="github" />
                    </a>
                    <a className="logo" href="https://www.linkedin.com/in/ammar-alazzawi-3a882a168/">
                        <img src={linkedInLogo} alt="LinkedIn logo" id="linkedin" />
                    </a>
                    <a className="logo" href="https://docs.google.com/document/d/0BxZzHHjLTajOeGYwRk5LbGgxX0o5bVQ4MGYzZThWYWNyZUtB/edit" id="cv">
                        CV
                    </a>
                    </Container>
                </Jumbotron>
            </div>
        </div>
        <div className="row">
            <div id="aboutMeSection">
                <div className="col-lg-3 col-12">
                    <img src={image} alt="Ammar Alazzawi" id="myPhoto" />
                </div>
                <div className="col-12">
                    <div id="aboutMeText">
                        <p>Experienced Senior Information Technology Business Analyst with a demonstrated history of working in the building materials industry. Skilled in Visio, Requirements Analysis, Quality Assurance, Business Analysis, and Consulting. Strong information technology professional with a Bachelor's degree focused in Business Administration and Management, General from Alpetra University . , I've made a smooth transition over to web development. After completing a Full Stack Web Developer bootcamp at UT Austin, I am now proficient in React, Javascript, Node.js, Express, HTML & CSS, among other programs, libraries and frameworks</p>
                        <p>With a sharp eye for designing front-end and a logical brain for tackling back-end, I'd be an essential asset to your team.</p>
                        <p>Feel free to peruse my favorite projects via the navbar above, or even visit my GitHub to see my full catalogue. I'd love to hear from you, too! Fire me an email from the contact page.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MainSection;