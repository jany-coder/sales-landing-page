import React from "react";
import { Row, Col } from 'react-bootstrap';
import SimpleAccordion from "../Accordion/SimpleAccordion";
import accordionData from "../../components/Accordion/accordionData";
import question from "../../assets/question.png";

const Questions = (props) => {

const qaData = accordionData;

    return (
        <div className="mt-5 container">
            <Row>
                <Col md={6}>
                    <div className="section-title">
                        <h3>Frequently Ask Question</h3>
                    </div>
                    <div className="section-heading">
                        <h2>Solver your problem with <br />
                            very faster
                        </h2>
                    </div>
                    <div className="regular-font">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor.
                        </p>
                    </div>

                    <div>
                    
                </div>
                {
                    qaData.map( data => <SimpleAccordion data = {data} /> )
                }
                </Col>
                <Col className="d-flex align-items-center" md={6}>
                    <div >
                         <img style={{width: "100%"}} src={question} alt="question.png" />   
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Questions;