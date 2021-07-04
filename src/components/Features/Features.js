import React from 'react';
import "../../styles/shared/fonts-definition.scss";
import omniCycling from "../../assets/omni-cycling.png"
import { Row, Col, Container } from 'react-bootstrap';
import "./Features.scss";
import banner from '../../assets/banner-small.png';

const Features = () => {
    return (
        <section className="container-fluid mt-5 ">
            <div className="text-center">
                <Container>
                    <div className="section-title">
                        <h3>Smart Lock</h3>
                    </div>
                    <div className="section-heading">
                        <h2> Amazing Features
                        </h2>
                    </div>
                    <div className="regular-font">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br /> fermentum metus ligula, id eleifend quam feugiat
                        </p>
                    </div>

                    <Row className=""> 
                        <Col md={4}>

                            <div className="features-left">
                                <div className=" content-text sec-title-third ">
                                    <div className="text-right">
                                        <h4 className="text-container">Self and reliable</h4>
                                        <p className="regular-font">orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor.
                                        </p>
                                    </div>
                                </div>

                                <div className=" content-text sec-title-third margin-right">
                                    <div className="text-right">
                                        <h4 className="text-container">Self and reliable</h4>
                                        <p className="regular-font">orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor.
                                        </p>
                                    </div>
                                </div>

                                <div className=" content-text sec-title-third ">
                                    <div className="text-right">
                                        <h4 className="text-container">Self and reliable</h4>
                                        <p className="regular-font">orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </Col>
                        <Col md={4}>
                            <div>
                                <div className="omni-cycling">
                                    <img style={{ width: "100%" }} src={omniCycling} alt="omniCycling" />
                                </div>

                            </div>
                        </Col>
                        <Col md={4}>

                            <div className="features-right">
                                <div className=" content-text sec-title-third ">
                                    <div className="text-left">
                                        <h4 className="text-container-right">Self and reliable</h4>
                                        <p className="regular-font">orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor.
                                        </p>
                                    </div>
                                </div>

                                <div className=" content-text sec-title-third margin-left">
                                    <div className="text-left">
                                        <h4 className="text-container-right">Self and reliable</h4>
                                        <p className="regular-font">orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor.
                                        </p>
                                    </div>
                                </div>

                                <div className=" content-text sec-title-third ">
                                    <div className="text-left">
                                        <h4 className="text-container-right">Self and reliable</h4>
                                        <p className="regular-font">orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="banner-section">
                <Container>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <div>
                                <img className="banner" style={{ width: "100%" }} src={banner} alt="banner.png" />
                                <button className="button-round-white btn-white" >Shop Now</button>
                                <h4 className="banner-text">One of the best products <br /> for smart people.</h4>
                            </div>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Features;