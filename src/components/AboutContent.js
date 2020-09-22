import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import styled from 'styled-components';

import pdf from '../assets/resume/developerResume.pdf';


function AboutContent(props) {

    return(
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={2}>
                <img className="p-pic-image pr-2" src="https://github.com/Michael-Veiga/react-portfolio/blob/master/src/assets/images/profPic.png?raw=true" alt=''/>
                </Col>
                <Col md={5}>
                    {props.children}
                </Col>
            </Row>
            <Row className="mt-5 justify-content-around">
                <Col lg={3}>
                    <a href="https://github.com/Michael-Veiga" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="grow fab fa-7x" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/michael-veiga-473755142/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="grow fab fa-7x mx-5"/>
                    </a>
                    <a href={pdf} target="_blank" download="" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFile} className="grow far fa-7x ml-2" />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutContent;